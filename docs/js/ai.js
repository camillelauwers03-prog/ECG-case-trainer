import refs from "./refs.js?v=9";
import { feedbackPrompt, insightsPrompt, quickPrompt } from "./prompts.js?v=9";
import { generateJson } from "./gemini.js?v=9";

function withRef(caseData) {
  const c = { ...caseData };
  const builtin = refs[c.id];
  if (builtin) Object.assign(c, builtin);
  else c.reference = { diagnosis: "", known_facts: [], ...(c.reference || {}) };
  return c;
}

export async function getQuick(caseData, reasoning, dx) {
  const c = withRef(caseData);
  const { json, model } = await generateJson({ prompt: quickPrompt(c, reasoning.slice(0, 4000), dx.slice(0, 500)), fast: true });
  return { quick: json, model, reference: c.reference };
}

export async function getFeedback(caseData, reasoning, dx, image) {
  const c = withRef(caseData);
  const { json, model } = await generateJson({ prompt: feedbackPrompt(c, reasoning.slice(0, 8000), dx.slice(0, 500)), image });
  if (!image) json.uncertainty = ((json.uncertainty || "") + " De afbeelding werd niet meegestuurd; de feedback steunt enkel op de referentie.").trim();
  return { feedback: json, model, reference: c.reference, course_figure: c.course_figure || null };
}

export async function getInsights(previous, attempts, total) {
  const { json, model } = await generateJson({ prompt: insightsPrompt(previous, attempts.slice(-40), total) });
  return { insights: json, model };
}
