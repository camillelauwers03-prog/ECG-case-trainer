// Offline support: the app shell, ECGs and scripts are cached; Gemini calls always go to the network.
const VERSION = "ecg-trainer-2026-11-20.12";
const SHELL = ["./", "index.html", "cases.json", "manifest.webmanifest", "icon.svg", "apple-touch-icon.png", "icon-512.png", "icon-192.png",
  "js/ai.js", "js/gemini.js", "js/prompts.js", "js/refs.js", "js/course.js",
  "ecg/ptbxl-00001.png", "ecg/ptb-s0010.png", "ecg/mitdb-100-a.png", "ecg/mitdb-100-v.png", "ecg/cursus-pac.png", "ecg/cursus-pvc.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin === self.location.origin) {
    // Network first so updates arrive quickly, cache as fallback when offline.
    e.respondWith(fetch(e.request, { cache: "no-cache" }).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
  } else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return res; })));
  }
});
