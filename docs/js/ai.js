import refs from "./refs.js";
import { feedbackPrompt, insightsPrompt } from "./prompts.js";
import { generateJson } from "./gemini.js";

export async function getFeedback(caseData, reasoning, dx, image) {
  const c = { ...caseData };
  const builtin = refs[c.id];
  if (builtin) Object.assign(c, builtin);
  else c.reference = { diagnosis: "", known_facts: [], ...(c.reference || {}) };
  const { json, model } = await generateJson({ prompt: feedbackPrompt(c, reasoning.slice(0, 8000), dx.slice(0, 500)), image });
  if (!image) json.uncertainty = ((json.uncertainty || "") + " De afbeelding werd niet meegestuurd; de feedback steunt enkel op de referentie.").trim();
  return { feedback: json, model, reference: c.reference, course_figure: c.course_figure || null };
}

export async function getInsights(previous, attempts, total) {
  const { json, model } = await generateJson({ prompt: insightsPrompt(previous, attempts.slice(-40), total) });
  return { insights: json, model };
}
