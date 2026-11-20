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
   "status_note": "Label nagekeken in ptbxl_database.csv (PTB-XL v1.0.3): NORM 100, LVOLT, SR; verslag 'sinusrhythmus periphere niederspannung'."
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
 },
 "ptbxl-00254": {
  "reference": {
   "diagnosis": "Normaal ECG, sinusritme",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. normal ecg.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > het normaal ECG"
  ],
  "course_figure": null
 },
 "ptbxl-00264": {
  "reference": {
   "diagnosis": "Normaal ECG, sinusritme",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. normal ecg.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > het normaal ECG"
  ],
  "course_figure": null
 },
 "ptbxl-00568": {
  "reference": {
   "diagnosis": "Sinusbradycardie, verder normaal ECG",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 80%); SBRAD (sinus bradycardia).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus bradycardia. otherwise normal ecg. the cause of the bradycardia is not evident.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > bradycardie"
  ],
  "course_figure": null
 },
 "ptbxl-00698": {
  "reference": {
   "diagnosis": "Sinustachycardie, verder normaal ECG",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 100%); STACH (sinus tachycardia).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus tachycardia. normal ecg.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > het normaal ECG"
  ],
  "course_figure": null
 },
 "ptbxl-02087": {
  "reference": {
   "diagnosis": "Sinusaritmie (respiratoir), verder normaal ECG (14-jarige)",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 100%); SARRH (sinus arrhythmia).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus arrhythmia. normal ecg.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > het normaal ECG"
  ],
  "course_figure": null
 },
 "ptbxl-00330": {
  "reference": {
   "diagnosis": "Voorkamerfibrillatie (VKF), verder geen duidelijke afwijkingen",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 50%); AFIB (atrial fibrillation).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'atrial fibrillation. otherwise no definite pathology.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie > VKF"
  ],
  "course_figure": null
 },
 "ptbxl-00697": {
  "reference": {
   "diagnosis": "Voorkamerfibrillatie met grenswaardige linker asdeviatie",
   "known_facts": [
    "PTB-XL SCP-labels: LVH (left ventricular hypertrophy, zekerheid 50%); AFIB (atrial fibrillation).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'atrial fibrillation. borderline left axis deviation. otherwise no definite pathology.'.",
    "Hartas volgens PTB-XL: naar links (grenswaardig).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie > VKF"
  ],
  "course_figure": null
 },
 "ptbxl-00567": {
  "reference": {
   "diagnosis": "Voorkamerfibrillatie met snelle ventrikelrespons; label ook (oud) inferior infarct",
   "known_facts": [
    "PTB-XL SCP-labels: IMI (inferior myocardial infarction, zekerheid 100%); AFIB (atrial fibrillation).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'atrial fibrillation with rapid ventricular response. compared with tracings of 20 & 21:3:92, it remains basically similar except for the recurrence of atrial fibrillation.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie > VKF"
  ],
  "course_figure": null
 },
 "ptbxl-02739": {
  "reference": {
   "diagnosis": "Voorkamerflutter met 2:1-geleiding, extreme linker as, ST-afwijkingen",
   "known_facts": [
    "PTB-XL SCP-labels: AFLT (atrial flutter, zekerheid 100%).",
    "Oorspronkelijk verslag van de cardioloog (Duits): 'vorhofflattern mit 2 : 1 ueberleitung ueberdrehter linkstyp path. repolarisation: st- hebung avr, v1 st- senkung i, ii, avf, v6 t- veraenderungen hoch in v1, v2,'.",
    "Hartas volgens PTB-XL: abnormale (extreme) linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie"
  ],
  "course_figure": null
 },
 "ptbxl-06179": {
  "reference": {
   "diagnosis": "Voorkamerflutter met wisselende AV-geleiding",
   "known_facts": [
    "PTB-XL SCP-labels: AFLT (atrial flutter, zekerheid 100%).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'rhythm is atrial flutter with variable av block. non-specific t wave abnormality.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie"
  ],
  "course_figure": null
 },
 "ptbxl-16401": {
  "reference": {
   "diagnosis": "Voorkamerflutter met 4:1-geleiding",
   "known_facts": [
    "PTB-XL SCP-labels: AFLT (atrial flutter, zekerheid 100%); 2AVB (second degree AV block, zekerheid 100%).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'atrial flutter with 4:1 av block. otherwise no definite pathology.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie"
  ],
  "course_figure": null
 },
 "ptbxl-01919": {
  "reference": {
   "diagnosis": "Snelle regelmatige smal-QRS supraventriculaire tachycardie zonder zichtbare P-toppen (PSVT, bv. AVNRT)",
   "known_facts": [
    "PTB-XL SCP-labels: PSVT (paroxysmal supraventricular tachycardia, zekerheid 100%); NST_ (non-specific ST changes); SVTAC (supraventricular tachycardia).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'rapid regular supraventricular tachycardia without evident p waves. non-specific st-t wave changes.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie > AVNRT"
  ],
  "course_figure": null
 },
 "ptbxl-07960": {
  "reference": {
   "diagnosis": "Snelle regelmatige breed-QRS tachycardie: waarschijnlijk SVT met LBTB, maar VT niet volledig uit te sluiten",
   "known_facts": [
    "PTB-XL SCP-labels: CLBBB (complete left bundle branch block, zekerheid 100%); SVTAC (supraventricular tachycardia).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'a rapid, regular broad complex tachycardia is present. this is probably a supraventricular tachycardia with left bundle branch block but ventricular tachycardia cannot be entirely excluded. left axis deviation.'.",
    "Hartas volgens PTB-XL: linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > breed QRS tachycardie"
  ],
  "course_figure": null
 },
 "ptbxl-03658": {
  "reference": {
   "diagnosis": "Sinusritme met eerstegraads AV-blok",
   "known_facts": [
    "PTB-XL SCP-labels: 1AVB (first degree AV block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Duits): 'sinusrhythmus mlt/st av block 1.grades'.",
    "Hartas volgens PTB-XL: normaal (midden).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-01484": {
  "reference": {
   "diagnosis": "Sinusaritmie met eerstegraads AV-blok",
   "known_facts": [
    "PTB-XL SCP-labels: 1AVB (first degree AV block, zekerheid 100%); SARRH (sinus arrhythmia).",
    "Oorspronkelijk verslag van de cardioloog (Duits): 'sinus arrhythmie a-v block i lagetyp normal'.",
    "Hartas volgens PTB-XL: normaal (midden).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-14009": {
  "reference": {
   "diagnosis": "Tweedegraads AV-blok type I (Wenckebach / Mobitz I)",
   "known_facts": [
    "PTB-XL SCP-labels: 2AVB (second degree AV block, zekerheid 100%).",
    "Oorspronkelijk verslag van de cardioloog (Duits): 'av- block 2. grades typ i linkstyp intraventr. leitungsstoerung f, v1 ekg pathologisch'.",
    "Hartas volgens PTB-XL: linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-18101": {
  "reference": {
   "diagnosis": "Atriale tachycardie met 2:1 AV-blok, linker asdeviatie en rechterbundeltakblok",
   "known_facts": [
    "PTB-XL SCP-labels: CRBBB (complete right bundle branch block, zekerheid 100%); 2AVB (second degree AV block, zekerheid 100%).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'rhythm is atrial tachycardia with 2:1 av block and rapid ventricular response. left axis deviation. right bundle branch block.'.",
    "Hartas volgens PTB-XL: linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-00959": {
  "reference": {
   "diagnosis": "Derdegraads (compleet) AV-blok: sinusritme 98/min met ventriculair escaperitme 40/min; incompleet RBTB",
   "known_facts": [
    "PTB-XL SCP-labels: ASMI (anteroseptal myocardial infarction, zekerheid 15%); IRBBB (incomplete right bundle branch block, zekerheid 100%); 3AVB (third degree AV block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm, 98/min. with complete heart block and ventricular escape rate of 40/min. incomplete right bundle branch block. in view of syncope, permanent pacing should be considered.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen",
   "2. Het ECG > specifieke kenmerken > bradycardie"
  ],
  "course_figure": null
 },
 "ptbxl-08911": {
  "reference": {
   "diagnosis": "Derdegraads (compleet) AV-blok met AV-dissociatie (atria 82/min, ventrikels 38/min), rechter as",
   "known_facts": [
    "PTB-XL SCP-labels: ISC_ (non-specific ischemic, zekerheid 50%); LPFB (left posterior fascicular block, zekerheid 100%); LAO/LAE (left atrial overload/enlargement, zekerheid 100%); 3AVB (third degree AV block, zekerheid 100%).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'complete av dissociation is present [complete heart block]. atrial rate = 82/min., ventricular rate = 38/min. right axis deviation. r-s transition zone in v leads displaced to the left. low limb lead voltage. possible left posterior fascicular block. non-'.",
    "Hartas volgens PTB-XL: rechter asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen",
   "2. Het ECG > specifieke kenmerken > bradycardie"
  ],
  "course_figure": null
 },
 "ptbxl-00903": {
  "reference": {
   "diagnosis": "Sinusritme met compleet rechterbundeltakblok (RBTB), laag voltage extremiteitsafleidingen",
   "known_facts": [
    "PTB-XL SCP-labels: CRBBB (complete right bundle branch block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. low limb lead voltage. right bundle branch block.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-06282": {
  "reference": {
   "diagnosis": "Sinusritme met compleet rechterbundeltakblok (RBTB), rechter as",
   "known_facts": [
    "PTB-XL SCP-labels: CRBBB (complete right bundle branch block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Duits): 'sinusrhythmus rechtstyp rechtsschenkelblock'.",
    "Hartas volgens PTB-XL: rechter asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-00286": {
  "reference": {
   "diagnosis": "Sinusritme met compleet linkerbundeltakblok (LBTB), linker asdeviatie",
   "known_facts": [
    "PTB-XL SCP-labels: CLBBB (complete left bundle branch block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. left axis deviation. left bundle branch block, this is most commonly due to ischaemic heart disease.'.",
    "Hartas volgens PTB-XL: linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-00338": {
  "reference": {
   "diagnosis": "Sinusritme met compleet linkerbundeltakblok (LBTB)",
   "known_facts": [
    "PTB-XL SCP-labels: CLBBB (complete left bundle branch block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. left bundle branch block, this is most commonly due to ischaemic heart disease.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-00285": {
  "reference": {
   "diagnosis": "Sinusritme met linker anterieur fasciculair blok (linker asdeviatie)",
   "known_facts": [
    "PTB-XL SCP-labels: LAFB (left anterior fascicular block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. left axis deviation. left anterior fascicular block.'.",
    "Hartas volgens PTB-XL: linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-05794": {
  "reference": {
   "diagnosis": "Bifasciculair blok: RBTB + linker anterieur fasciculair blok; ST-elevatie V2-V4 (recente schade niet uitgesloten)",
   "known_facts": [
    "PTB-XL SCP-labels: LAFB (left anterior fascicular block, zekerheid 100%); IRBBB (incomplete right bundle branch block, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. left axis deviation. left anterior fascicular block. right bundle branch block. bifascicular block. st elevation v2-4, cant exclude recent damage. progress trace advised to rule out recent infarction.'.",
    "Hartas volgens PTB-XL: linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > geleidingsstoornissen"
  ],
  "course_figure": null
 },
 "ptbxl-10053": {
  "reference": {
   "diagnosis": "Wolff-Parkinson-White-patroon: kort PR-interval en deltagolven",
   "known_facts": [
    "PTB-XL SCP-labels: WPW (Wolf-Parkinson-White syndrome, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. pr interval is short and delta waves are present. these features indicate the wolff-parkinson-white syndrome. patients may be prone to bouts of paroxysmal supra- ventricular tachyarrhythmias.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie"
  ],
  "course_figure": null
 },
 "ptbxl-12559": {
  "reference": {
   "diagnosis": "Waarschijnlijk Wolff-Parkinson-White-patroon: deltagolven, PR aan de korte kant",
   "known_facts": [
    "PTB-XL SCP-labels: WPW (Wolf-Parkinson-White syndrome, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. pr interval is rather short (but >0.12 sec). delta waves are evident. patient probably has wolff-parkinson-white syndrome.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > small QRS tachycardie"
  ],
  "course_figure": null
 },
 "ptbxl-00297": {
  "reference": {
   "diagnosis": "Sinusritme met ventriculaire extrasystole(n), rechtse as",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 80%); PVC (ventricular premature complex); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'premature ventricular contraction(s). sinus rhythm. rightward axis.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > extrasystole"
  ],
  "course_figure": null
 },
 "ptbxl-00256": {
  "reference": {
   "diagnosis": "Sinusritme met ventriculaire extrasystolen in bigeminie, linkerbundeltakblok",
   "known_facts": [
    "PTB-XL SCP-labels: CLBBB (complete left bundle branch block, zekerheid 100%); PVC (ventricular premature complex, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'premature ventricular contraction(s), bigeminy. sinus rhythm. left bundle branch block, this is most commonly due to ischaemic heart disease.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > extrasystole"
  ],
  "course_figure": null
 },
 "ptbxl-00763": {
  "reference": {
   "diagnosis": "Sinusritme met atriale extrasystole(n), verder normaal",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 80%); PAC (atrial premature complex); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'premature atrial contraction(s). sinus rhythm. otherwise normal ecg.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > extrasystole"
  ],
  "course_figure": null
 },
 "ptbxl-01019": {
  "reference": {
   "diagnosis": "Sinusritme met atriale extrasystole(n), verder normaal",
   "known_facts": [
    "PTB-XL SCP-labels: NORM (normal ECG, zekerheid 100%); PAC (atrial premature complex); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'premature atrial contraction(s). sinus rhythm. no definite pathology.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > extrasystole"
  ],
  "course_figure": null
 },
 "ptbxl-15535": {
  "reference": {
   "diagnosis": "Ventriculaire extrasystolen in trigeminie bij sinusaritmie; ST-T-afwijkingen",
   "known_facts": [
    "PTB-XL SCP-labels: ASMI (anteroseptal myocardial infarction, zekerheid 15%); PVC (ventricular premature complex, zekerheid 100%); TRIGU (trigeminal pattern (unknown origin, SV or Ventricular)).",
    "Oorspronkelijk verslag van de cardioloog (Zweeds): 'ventrikulÄre extrasystole(n), trigeminus sinus arrhythmie lagetyp normal st & t abnorm, wahrscheinlich inferiore ischÄmie oder linksbelastung t abnorm in hochlateralen ableitungen 4.46 unbestÄtigter bericht'.",
    "Hartas volgens PTB-XL: normaal (midden).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > extrasystole"
  ],
  "course_figure": null
 },
 "ptbxl-02858": {
  "reference": {
   "diagnosis": "Sinusritme met linkerventrikelhypertrofie en linker asdeviatie",
   "known_facts": [
    "PTB-XL SCP-labels: LVH (left ventricular hypertrophy, zekerheid 80%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. left axis deviation. left ventricular hypertrophy. otherwise normal ecg.'.",
    "Hartas volgens PTB-XL: linker asdeviatie.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > hypertrofie"
  ],
  "course_figure": null
 },
 "ptbxl-02076": {
  "reference": {
   "diagnosis": "Sinusritme met linkerventrikelhypertrofie, aspecifieke ST-elevatie I, aVL, V2-V4",
   "known_facts": [
    "PTB-XL SCP-labels: LVH (left ventricular hypertrophy, zekerheid 80%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. left ventricular hypertrophy. non-specific st segment elevation in i, avl, v2,3,4. suggest repeat if clinically indicated.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > specifieke kenmerken > hypertrofie"
  ],
  "course_figure": null
 },
 "ptbxl-18093": {
  "reference": {
   "diagnosis": "Sinusritme met verlengd QT en prominente U-golf (denk aan hypokaliëmie)",
   "known_facts": [
    "PTB-XL SCP-labels: LNGQT (long QT-interval, zekerheid 80%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. qt prolongation is less than on 11:7:92. prominent u wave. suggest exclude hypokalaemia. otherwise normal ecg.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > het normaal ECG"
  ],
  "course_figure": null
 },
 "ptbxl-11916": {
  "reference": {
   "diagnosis": "Sinusritme met verlengd QT-interval",
   "known_facts": [
    "PTB-XL SCP-labels: LNGQT (long QT-interval, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Zweeds): 'sinusrytm qt fÖrlÄngd'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > het normaal ECG"
  ],
  "course_figure": null
 },
 "ptbxl-00947": {
  "reference": {
   "diagnosis": "Recent infero-lateraal myocardinfarct: ST-elevatie II, III, aVF en V4-V6",
   "known_facts": [
    "PTB-XL SCP-labels: ILMI (inferolateral myocardial infarction, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. rightward axis. low limb lead voltage. st segments are elevated in ii, iii, avf, v4,5,6. consistent with inferolateral myocardial infarction which appears recent.'.",
    "Infarctstadium volgens PTB-XL: Stadium II (I = acuut, II = recent/evoluerend, III = oud).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > ischemie",
   "2. Het ECG > ischemie > Welke coronair?"
  ],
  "course_figure": null
 },
 "ptbxl-02993": {
  "reference": {
   "diagnosis": "Acuut infero-lateraal infarct met posterieure betrokkenheid",
   "known_facts": [
    "PTB-XL SCP-labels: IPLMI (inferoposterolateral myocardial infarction, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. acute inferolateral infarct with true posterior involvement.'.",
    "Infarctstadium volgens PTB-XL: Stadium I (I = acuut, II = recent/evoluerend, III = oud).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > ischemie",
   "2. Het ECG > ischemie > Welke coronair?"
  ],
  "course_figure": null
 },
 "ptbxl-16951": {
  "reference": {
   "diagnosis": "Anterieur infarct: Q-golven V3-V6 en ST-elevatie V2-V6 (leeftijd onzeker, recente schade niet uitgesloten)",
   "known_facts": [
    "PTB-XL SCP-labels: ASMI (anteroseptal myocardial infarction, zekerheid 100%); ALMI (anterolateral myocardial infarction, zekerheid 100%); IMI (inferior myocardial infarction, zekerheid 50%); QWAVE (Q waves present); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. q waves in v3-6. st segments are elevated in v2-6. consistent with anterior infarct of uncertain age. recent damage cannot be excluded.'.",
    "Infarctstadium volgens PTB-XL: Stadium II (I = acuut, II = recent/evoluerend, III = oud).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > ischemie",
   "2. Het ECG > ischemie > Welke coronair?"
  ],
  "course_figure": null
 },
 "ptbxl-03314": {
  "reference": {
   "diagnosis": "Evoluerend inferior infarct met apicale betrokkenheid",
   "known_facts": [
    "PTB-XL SCP-labels: IMI (inferior myocardial infarction, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm evolving inferior infarct with apical envolvement.'.",
    "Infarctstadium volgens PTB-XL: Stadium II (I = acuut, II = recent/evoluerend, III = oud).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > ischemie",
   "2. Het ECG > ischemie > Welke coronair?"
  ],
  "course_figure": null
 },
 "ptbxl-00290": {
  "reference": {
   "diagnosis": "Sinusritme, mogelijk oud inferior myocardinfarct",
   "known_facts": [
    "PTB-XL SCP-labels: IMI (inferior myocardial infarction, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. possible old inferior myocardial infarction.'.",
    "Infarctstadium volgens PTB-XL: Stadium III (I = acuut, II = recent/evoluerend, III = oud).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > ischemie"
  ],
  "course_figure": null
 },
 "ptbxl-04380": {
  "reference": {
   "diagnosis": "Sinusritme, anteroseptaal infarct (waarschijnlijk oud), laag voltage extremiteitsafleidingen",
   "known_facts": [
    "PTB-XL SCP-labels: ASMI (anteroseptal myocardial infarction, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. low limb lead voltage. anteroseptal infarct, probably old.'.",
    "Infarctstadium volgens PTB-XL: Stadium III (I = acuut, II = recent/evoluerend, III = oud).",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > ischemie"
  ],
  "course_figure": null
 },
 "ptbxl-03181": {
  "reference": {
   "diagnosis": "Sinusritme met ST-depressie in I, II, V4-V6: recente ischemie (anterolateraal)",
   "known_facts": [
    "PTB-XL SCP-labels: ISCAL (ischemic in anterolateral leads, zekerheid 100%); SR (sinus rhythm).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'sinus rhythm. compared with tracing of earlier today. st segments remain depressed in i, ii, v4,5,6. t waves are now low rather than inverted in i, v5,6. the slightly changed pattern suggests recent ischaemia.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "2. Het ECG > ischemie"
  ],
  "course_figure": null
 },
 "ptbxl-01641": {
  "reference": {
   "diagnosis": "Gepacet ritme met pacemakerspikes, normale pacemakerfunctie",
   "known_facts": [
    "PTB-XL SCP-labels: PACE (normal functioning artificial pacemaker, zekerheid 100%).",
    "Oorspronkelijk verslag van de cardioloog (Engels): 'pacemaker spikes noted. a regular paced rhythm is present. apparently normal pacemaker function. abnormal nature of complexes obscures further interpretation.'.",
    "Frequentie, intervallen en ST-metingen staan niet in de dataset en moeten uit de afbeelding gehaald worden."
   ],
   "status": "dataset-label",
   "status_note": "Door een cardioloog gevalideerd verslag en labels uit ptbxl_database.csv (PTB-XL v1.0.3). De Nederlandse diagnose is een vertaling van dat verslag."
  },
  "course_sections": [
   "11. Ritmestoornissen > Aanpak ritmestoornis > niet-farmacologisch"
  ],
  "course_figure": null
 },
 "mitdb-205-vt": {
  "reference": {
   "diagnosis": "Ventriculaire tachycardie: salvo's van brede ventriculaire complexen (ongeveer 130/min) met één sinusslag ertussen",
   "known_facts": [
    "Ritmeannotatie MIT-BIH: '(VT' (ventriculaire tachycardie) vanaf 1460,5 s.",
    "Slag-voor-slag annotaties door twee cardiologen: 19 ventriculaire slagen (V) en 1 normale slag (N) in deze strook.",
    "Frequentie van de ventriculaire slagen ongeveer 132/min (mediaan RR).",
    "Klinische nota uit de databank: de PVC's hebben twee vormen."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritme- en slagannotaties door experts gevalideerd. Basislijnfilter 0,5 Hz toegepast."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > breed QRS tachycardie > VT",
   "11. Ritmestoornissen > bespreking ritmestoornissen > plotse cardiale dood"
  ],
  "course_figure": null
 },
 "vfdb-420-vt": {
  "reference": {
   "diagnosis": "Aanhoudende ventriculaire tachycardie (monomorfe, snelle brede-complex-tachycardie)",
   "known_facts": [
    "Ritmeannotatie: '(VT' van 1430 tot ongeveer 1591 s, dus deze strook valt midden in een aanhoudende VT-episode van meer dan 2,5 minuten."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritmeannotaties door experts (MIT-BIH Malignant Ventricular Ectopy Database). Deze databank bevat geen slag-per-slag annotaties en geen namen van de afleidingen. Basislijnfilter 0,5 Hz toegepast voor de leesbaarheid."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > breed QRS tachycardie > VT",
   "11. Ritmestoornissen > bespreking ritmestoornissen > plotse cardiale dood"
  ],
  "course_figure": null
 },
 "vfdb-427-vt": {
  "reference": {
   "diagnosis": "Ventriculaire tachycardie (zeer snel, regelmatig, brede complexen)",
   "known_facts": [
    "Ritmeannotatie: '(VT' van 648,5 tot ongeveer 1533 s (lange aanhoudende VT-episode)."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritmeannotaties door experts (MIT-BIH Malignant Ventricular Ectopy Database). Deze databank bevat geen slag-per-slag annotaties en geen namen van de afleidingen. Basislijnfilter 0,5 Hz toegepast voor de leesbaarheid."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > breed QRS tachycardie > VT",
   "11. Ritmestoornissen > bespreking ritmestoornissen > plotse cardiale dood"
  ],
  "course_figure": null
 },
 "mitdb-207-vfl": {
  "reference": {
   "diagnosis": "Ventrikelflutter (zeer snelle, sinusoïdale ventriculaire activiteit zonder herkenbare QRS-T)",
   "known_facts": [
    "Ritmeannotatie MIT-BIH: '(VFL' (ventrikelflutter) van 1540,9 tot ongeveer 1639 s; deze strook valt daarbinnen.",
    "Na deze langste flutterepisode volgt een idioventriculair ritme (klinische nota uit de databank).",
    "Onderliggend ritme elders in de opname: sinusritme met eerstegraads AV-blok en LBTB, multiforme PVC's."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritmeannotaties door experts gevalideerd. Basislijnfilter 0,5 Hz toegepast."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > breed QRS tachycardie > VT",
   "11. Ritmestoornissen > bespreking ritmestoornissen > plotse cardiale dood"
  ],
  "course_figure": null
 },
 "vfdb-422-vf": {
  "reference": {
   "diagnosis": "Ventrikelfibrillatie (chaotische, onregelmatige activiteit zonder herkenbare QRS-complexen)",
   "known_facts": [
    "Ritmeannotatie: '(VFIB' vanaf 1535 s (ongeveer 8 minuten), voorafgegaan door een VT-episode van ruim 3 minuten."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritmeannotaties door experts (MIT-BIH Malignant Ventricular Ectopy Database). Deze databank bevat geen slag-per-slag annotaties en geen namen van de afleidingen. Basislijnfilter 0,5 Hz toegepast voor de leesbaarheid."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > breed QRS tachycardie > VT",
   "11. Ritmestoornissen > bespreking ritmestoornissen > plotse cardiale dood"
  ],
  "course_figure": null
 },
 "vfdb-426-vf": {
  "reference": {
   "diagnosis": "Ventrikelfibrillatie (fijne, laag-amplitude fibrillatie)",
   "known_facts": [
    "Ritmeannotatie: '(VF' van 645,7 tot ongeveer 1166 s; deze strook valt daarbinnen."
   ],
   "status": "expert-annotatie",
   "status_note": "Ritmeannotaties door experts (MIT-BIH Malignant Ventricular Ectopy Database). Deze databank bevat geen slag-per-slag annotaties en geen namen van de afleidingen. Basislijnfilter 0,5 Hz toegepast voor de leesbaarheid."
  },
  "course_sections": [
   "11. Ritmestoornissen > bespreking ritmestoornissen > breed QRS tachycardie > VT",
   "11. Ritmestoornissen > bespreking ritmestoornissen > plotse cardiale dood"
  ],
  "course_figure": null
 }
};
