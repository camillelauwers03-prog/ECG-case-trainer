// Reference data for built-in cases. Server-only, so the diagnosis is never sent before submission.
export default {
 "ptbxl-00001": {
  "reference": {
   "diagnosis": "Normaal ECG: sinusritme met perifere laagvoltage",
   "known_facts": [
    "PTB-XL SCP-labels voor dit record: NORM (normaal ECG), SR (sinusritme), LVOLT (laagvoltage).",
    "Oorspronkelijk Duits verslag in PTB-XL: 'sinusrhythmus periphere niedervoltage'."
   ],
   "status": "dataset-label",
   "status_note": "Label overgenomen uit de PTB-XL-metadata. Nog niet lokaal nagekeken tegen ptbxl_database.csv, omdat PhysioNet in deze bouwomgeving niet bereikbaar was."
  },
  "course_sections": [
   "2. Het ECG > het normaal ECG",
   "2. Het ECG > ecg protocol"
  ],
  "course_figure": null
 },
 "ptb-s0010": {
  "reference": {
   "diagnosis": "Recent (acuut) infero-lateraal myocardinfarct, dag 2 na trombolyse",
   "known_facts": [
    "Klinische samenvatting uit de database: reden van opname myocardinfarct; acuut infarct, lokalisatie infero-lateraal; geen eerder infarct.",
    "Infarctdatum 29-09-1990, ECG-datum 01-10-1990 (dag 2). Trombolyse met Gamma-TPA bij opname.",
    "Coronarografie (16-10-1990): eenvatslijden, RIVA (LAD) 70% stenose proximaal van ramus diagonalis 2; RCX en RCA zonder stenosen.",
    "De database bevat GEEN systematische ECG-beschrijving (frequentie, as, intervallen, ST/T). Die moet uit de afbeelding gehaald worden en is dus minder zeker."
   ],
   "status": "dataset-label",
   "status_note": "Diagnose uit de klinische samenvatting van de PTB-database. Let op: de coronarografie toont een LAD-letsel, terwijl de klinische lokalisatie infero-lateraal is."
  },
  "course_sections": [
   "2. Het ECG > ischemie",
   "2. Het ECG > ischemie > Welke coronair?"
  ],
  "course_figure": null
 },
 "mitdb-100-a": {
  "reference": {
   "diagnosis": "Sinusritme met één atriale extrasystole (premature atriale slag)",
   "known_facts": [
    "Slag-voor-slag annotaties door twee cardiologen (MIT-BIH): 12 normale slagen (N) en 1 atriale premature slag (A) op ongeveer 5,5 s in deze strook.",
    "Gemiddelde frequentie in deze strook ongeveer 74/min (berekend uit de geannoteerde RR-intervallen).",
    "De premature slag heeft een smal QRS, zoals de normale slagen."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritme- en slagannotaties zijn door experts gevalideerd."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > extrasystole"
  ],
  "course_figure": {
   "image": "ecg/cursus-pac.png",
   "caption": "Uit je cursus: incomplete compensatoire pauze bij een PAC"
  }
 },
 "mitdb-100-v": {
  "reference": {
   "diagnosis": "Sinusritme met één ventriculaire extrasystole",
   "known_facts": [
    "Slag-voor-slag annotaties door twee cardiologen (MIT-BIH): 11 normale slagen (N) en 1 ventriculaire premature slag (V) op ongeveer 5,9 s in deze strook.",
    "Gemiddelde frequentie in deze strook ongeveer 76/min (berekend uit de geannoteerde RR-intervallen).",
    "Dit is de enige ventriculaire extrasystole in de volledige 30 minuten van record 100."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritme- en slagannotaties zijn door experts gevalideerd."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > extrasystole"
  ],
  "course_figure": {
   "image": "ecg/cursus-pvc.png",
   "caption": "Uit je cursus: complete compensatoire pauze bij een PVC"
  }
 }
};
