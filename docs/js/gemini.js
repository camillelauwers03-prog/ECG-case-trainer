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
  getKey() { try { return localStorage.getItem(KEY) || ""; } catch { return ""; } },
  setKey(v) { try { v ? localStorage.setItem(KEY, v.trim()) : localStorage.removeItem(KEY); } catch {} },
  getModel() { try { return localStorage.getItem(MODEL_KEY) || ""; } catch { return ""; } },
  setModel(v) { try { v ? localStorage.setItem(MODEL_KEY, v.trim()) : localStorage.removeItem(MODEL_KEY); } catch {} }
};

export class AiError extends Error { constructor(message, code) { super(message); this.code = code; } }

export async function generateJson({ prompt, image }) {
  const key = settings.getKey();
  if (!key) throw new AiError("Vul eerst je gratis Gemini-sleutel in bij Cases > Instellingen.", "no_key");
  const parts = [];
  if (image && image.data) parts.push({ inline_data: { mime_type: image.mimeType || "image/png", data: image.data } });
  parts.push({ text: prompt });
  const body = JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: { responseMimeType: "application/json", temperature: 0.2 } });
  let found = ""; try { found = localStorage.getItem(FOUND_KEY) || ""; } catch {}
  let models = settings.getModel() ? [settings.getModel()] : [...new Set([found, ...DEFAULT_MODELS].filter(Boolean))];
  let last, discovered = false;
  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    let res;
    try {
      res = await fetch(`${API}/${encodeURIComponent(model)}:generateContent`, { method: "POST", headers: { "content-type": "application/json", "x-goog-api-key": key }, body });
    } catch { throw new AiError("Geen verbinding met Gemini. Controleer je internet.", "network"); }
    if (res.status === 404) {
      last = new AiError(`Model ${model} is niet beschikbaar.`, "model");
      if (i === models.length - 1 && !discovered) {
        discovered = true;
        const more = (await discoverModels(key)).filter(m => !models.includes(m));
        models = models.concat(more);
      }
      continue;
    }
    if (res.status === 429) throw new AiError("De gratis limiet van Gemini is even bereikt. Wacht een minuut en probeer opnieuw.", "rate_limited");
    if (res.status === 400 || res.status === 401 || res.status === 403) {
      const t = await res.text().catch(() => "");
      if (/API key|API_KEY|PERMISSION/i.test(t)) throw new AiError("Je Gemini-sleutel werkt niet. Kijk hem na bij Cases > Instellingen.", "bad_key");
      throw new AiError(`Gemini weigerde de aanvraag (${res.status}).`, "upstream");
    }
    if (!res.ok) throw new AiError(`Gemini gaf fout ${res.status}. Probeer opnieuw.`, "upstream");
    const data = await res.json();
    const text = (data.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("");
    if (!text) throw new AiError("Gemini gaf een leeg antwoord. Probeer opnieuw.", "empty");
    try { localStorage.setItem(FOUND_KEY, model); } catch {}
    return { json: parseJson(text), model };
  }
  throw new AiError("Geen enkel Gemini-model werkte met je sleutel. Vul eventueel zelf een modelnaam in bij Cases > Instellingen > Geavanceerd.", "model");
}

function parseJson(text) {
  try { return JSON.parse(text); } catch {}
  const m = text.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch {} }
  throw new AiError("Het antwoord van Gemini was onleesbaar. Probeer opnieuw.", "invalid_json");
}
