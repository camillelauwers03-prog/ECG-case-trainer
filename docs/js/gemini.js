// Gemini REST client that runs in the browser. The key is entered once in the app and stays on this device.
const API = "https://generativelanguage.googleapis.com/v1beta/models";
const KEY = "ecgtrainer:geminiKey";
const MODEL_KEY = "ecgtrainer:geminiModel";
const DEFAULT_MODELS = ["gemini-flash-latest", "gemini-3.6-flash", "gemini-3.5-flash", "gemini-2.5-flash"];
const FOUND_KEY = "ecgtrainer:geminiFound";

// Ask Google which models this key may use, and pick the newest Flash model that can read images.
async function discoverModels(key) {
  try {
    const r = await fetch(`${API}?pageSize=200`, { headers: { "x-goog-api-key": key } });
    if (!r.ok) return [];
    const d = await r.json();
    const ok = (d.models || []).filter(m => (m.supportedGenerationMethods || []).includes("generateContent"))
      .map(m => m.name.replace(/^models\//, ""))
      .filter(n => /gemini/.test(n) && /flash/.test(n) && !/(image|tts|audio|live|embed|thinking-exp|lite)/.test(n));
    const ver = n => { const m = n.match(/gemini-(\d+(?:\.\d+)?)/); return m ? parseFloat(m[1]) : 0; };
    const stable = n => /preview|exp/.test(n) ? 0 : 1;
    return ok.sort((a, b) => ver(b) - ver(a) || stable(b) - stable(a));
  } catch { return []; }
}

export const settings = {
  getKey() { try { return cleanKey(localStorage.getItem(KEY) || ""); } catch { return ""; } },
  setKey(v) { v = cleanKey(v || ""); try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); } catch {} },
  getModel() { try { return localStorage.getItem(MODEL_KEY) || ""; } catch { return ""; } },
  setModel(v) { try { v ? localStorage.setItem(MODEL_KEY, v.trim()) : localStorage.removeItem(MODEL_KEY); } catch {} }
};

// A key copied on iPhone can carry invisible characters (spaces, line breaks, zero-width marks).
// Those make fetch fail before anything is sent, which looks like "no internet". Keep only key characters.
function cleanKey(v) { return String(v).replace(/[^A-Za-z0-9._\-]/g, ""); }

export class AiError extends Error { constructor(message, code) { super(message); this.code = code; } }

export async function generateJson({ prompt, image, fast }) {
  const key = settings.getKey();
  if (!key) throw new AiError("Vul eerst je gratis Gemini-sleutel in bij Cases > Instellingen.", "no_key");
  const parts = [];
  if (image && image.data) parts.push({ inline_data: { mime_type: image.mimeType || "image/png", data: image.data } });
  parts.push({ text: prompt });
  // fast: short answer with as little "thinking" as the model allows. Not every model accepts the
  // thinking setting, so a 400 about it is retried without.
  let useThinking = !!fast;
  const bodyFor = model => {
    const gc = { responseMimeType: "application/json", temperature: 0.2 };
    if (fast) gc.maxOutputTokens = 1024;
    if (useThinking) gc.thinkingConfig = /gemini-2\./.test(model) ? { thinkingBudget: 0 } : { thinkingLevel: "minimal" };
    return JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: gc });
  };
  let found = ""; try { found = localStorage.getItem(FOUND_KEY) || ""; } catch {}
  let models = settings.getModel() ? [settings.getModel()] : [...new Set([found, ...DEFAULT_MODELS].filter(Boolean))];
  let last, discovered = false;
  let lastDetail = "";
  // viaQuery: key in the URL and a "simple" request (text/plain, no custom header), so the browser sends no preflight.
  const call = (model, viaQuery) => fetch(`${API}/${encodeURIComponent(model)}:generateContent` + (viaQuery ? `?key=${encodeURIComponent(key)}` : ""), {
    method: "POST",
    headers: viaQuery ? { "content-type": "text/plain;charset=UTF-8" } : { "content-type": "application/json", "x-goog-api-key": key },
    body: bodyFor(model)
  });
  const VIA_KEY = "ecgtrainer:geminiViaQuery";
  let viaQuery = false; try { viaQuery = localStorage.getItem(VIA_KEY) === "1"; } catch {}
  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    let res;
    try { res = await call(model, viaQuery); }
    catch (err) {
      // Try once more as a simple request before blaming the connection.
      try { res = await call(model, true); viaQuery = true; }
      catch (err2) {
        const why = (err2 && (err2.name + ": " + err2.message)) || String(err2);
        const online = typeof navigator !== "undefined" && navigator.onLine === false ? "Je toestel meldt dat het offline is. " : "";
        throw new AiError(online + "Kon Gemini niet bereiken. Controleer je internet of probeer het zonder VPN/inhoudsblokker. (Technische melding: " + why + ")", "network");
      }
    }
    if (!res.ok && i === 0 && !viaQuery && [400, 401, 403, 404].includes(res.status)) {
      // Some keys are only accepted as ?key= parameter: try that once.
      try { const r2 = await call(model, true); if (r2.ok || r2.status !== res.status) { res = r2; viaQuery = true; } } catch {}
    }
    if (res.ok) {
      const data = await res.json();
      const text = (data.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("");
      if (!text) throw new AiError("Gemini gaf een leeg antwoord. Probeer opnieuw.", "empty");
      try { localStorage.setItem(FOUND_KEY, model); localStorage.setItem(VIA_KEY, viaQuery ? "1" : "0"); } catch {}
      return { json: parseJson(text), model };
    }
    const errText = await res.text().catch(() => "");
    let gmsg = ""; try { gmsg = JSON.parse(errText).error.message; } catch { gmsg = errText.slice(0, 200); }
    if (useThinking && res.status === 400 && /thinking/i.test(gmsg)) { useThinking = false; i--; continue; }
    lastDetail = `${model}: fout ${res.status}${gmsg ? " – " + gmsg : ""}`;
    console.warn("Gemini", lastDetail);
    if (res.status === 429) throw new AiError("De gratis limiet van Gemini is even bereikt. Wacht een minuut en probeer opnieuw. (" + lastDetail + ")", "rate_limited");
    if ([400, 401, 403].includes(res.status) && /api key|api_key|permission|unauthenticated|credential/i.test(gmsg)) {
      throw new AiError("Google aanvaardt je sleutel niet. " + keyHint(key) + " (Melding van Google: " + lastDetail + ")", "bad_key");
    }
    if (res.status === 404 || res.status === 400) {
      if (i === models.length - 1 && !discovered) {
        discovered = true;
        const more = (await discoverModels(key)).filter(m => !models.includes(m));
        models = models.concat(more);
      }
      continue;
    }
    throw new AiError("Gemini gaf een fout. Probeer opnieuw. (" + lastDetail + ")", "upstream");
  }
  throw new AiError("Geen enkel Gemini-model werkte met je sleutel. " + keyHint(key) + (lastDetail ? " (Laatste melding van Google: " + lastDetail + ")" : ""), "model");
}

function keyHint(key) {
  return "Kijk na of je de volledige sleutel uit aistudio.google.com/apikey hebt geplakt (die begint met AQ. of AIza).";
}

function parseJson(text) {
  try { return JSON.parse(text); } catch {}
  const m = text.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch {} }
  throw new AiError("Het antwoord van Gemini was onleesbaar. Probeer opnieuw.", "invalid_json");
}
