# ECG Case Trainer

Oefen-app voor ECG-interpretatie: echte ECG's (PhysioNet), vrije redenering, een aparte finale diagnose, feedback door Google Gemini (gratis versie, eigen sleutel), een voortgangsdashboard en automatisch bijgewerkte aandachtspunten. Bij twijfel stuurt een knop de case, je antwoord en de feedback door naar Claude.

## Opbouw

Een statische app voor GitHub Pages, zonder server.

- `docs/index.html`: de app.
- `docs/js/gemini.js`: Gemini-client in de browser. De API-sleutel vul je in de app in (Cases > Instellingen) en die blijft op je toestel.
- `docs/js/prompts.js`: de opdrachten voor de feedback en de aandachtspunten.
- `docs/js/refs.js`: referentiediagnoses en bronfeiten van de ingebouwde cases. De app toont ze pas na het indienen.
- `docs/js/course.js`: cursustekst (H2 Het ECG, H11 Ritmestoornissen) die als context meegaat.
- `docs/ecg/`, `docs/cases.json`: ECG-afbeeldingen en case-gegevens.
- Voortgang en eigen cases staan in de browser (localStorage en IndexedDB). In het dashboard kan je een back-up downloaden en terugzetten.

## Online zetten (GitHub Pages)

Settings > Pages > Source: *Deploy from a branch*, branch `main`, map `/docs`.

## Lokaal testen

```
npm run dev     # http://localhost:3000
```

## Een ingebouwde case toevoegen

1. Zet de afbeelding in `docs/ecg/`.
2. Voeg de gegevens toe aan `docs/cases.json` (zonder diagnose).
3. Voeg de referentie toe aan `docs/js/refs.js` onder dezelfde `id`.

## Bronnen

- PTB-XL v1.0.3, CC BY 4.0. Wagner P. et al., Sci Data 2020;7:154.
- PTB Diagnostic ECG Database, ODC-By. Bousseljot R. et al., Biomed Tech 1995.
- MIT-BIH Arrhythmia Database, ODC-By. Moody GB, Mark RG, IEEE EMB 2001.

Alleen voor eigen studiegebruik. Geen klinisch hulpmiddel.
