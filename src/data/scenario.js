const AND = "and";
const OR = "or";

const scenarioData = {
  id: "PHTC M2CA",
  scenarioType: "trauma",
  info: {
    instructorInformation: "This skill station involves a middle-aged patient who experienced a rollover with a riding lawn mower. The patient requires airway/breathing management, hemorrhage control, immobilization, and rapid transport to a trauma center. Follow the written scenario, and provide information to all team members as the scenario progresses or as the team members ask.",
    patientInformation: {
      moulage: "Multiple lacerations to upper and lower extremities; partial amputation of right lower extremity with active bleeding; multiple bruises to chest and abdomen; flail segment to right upper chest; pale, cool, and diaphoretic skin",
      position: "Supine",
      actions: "Opens eyes to pain and becomes progressively more unresponsive"
    },
    dispatchInfo: "You and your partners work for a transporting EMS agency and have been dispatched to a residential housing development for a lawn mower accident. It is 1330 hr on a Saturday afternoon and the temperature is 90°F (32°C). You are 5 minutes away from a level III trauma center and 25 minutes from a level I trauma center.",
    sceneAssessment: "You arrive at a suburban yard where you observe a large riding lawn mower on its side at the bottom of an 8-ft (2.5-m) hill. A bystander is holding a towel to the patient’s right lower leg. As you approach the patient, the bystander tells you that he saw the mower tip over while the patient was driving it.",
  },
  assessmentFindings: {
      "assess-scene-safety": "scene is safe",
      "assess-injury-mechanism": "Patient experienced a rollover with a riding lawn mower",
      "assess-num-patients": "1 patient",
      "request-addl-help": "Additional EMS is on the way.",
      "verbalizes-patient-condition": "You arrive at a suburban yard where you observe a large riding lawn mower on its side at the bottom of an 8-ft (2.5-m) hill. A bystander is holding a towel to the patient’s right lower leg. As you approach the patient, the bystander tells you that he saw the mower tip over while the patient was driving it.",
      "determines-loc": "Opens eyes to pain and becomes progressively more unresponsive",
      "determines-life-threats": "Multiple lacerations to face, scalp, right arm, amputation at the right ankle",
      "assess-airway": "Airway is patent",
      "assess-breathing": "8 BPM", // point to vitals?
      "assess-ventilation": "shallow, irregular",
      "assess-pulse": "130; weak radial pulses", // point to vitals?
      "assess-skin": "Cyanonic, diaphoretic",
      "assess-bleeding": "Major external hemorrhage at lower right leg",
      "assess-mouth-nose-face": "Multiple lacerations with minor bleeding",
      "assess-scape-ears": "Unremarkable",
      "assess-perrl": "Pupils equal, round, and responsive", // point to vitals?
      "assess-trachea": "Neck unremarkable",
      "assess-jugular": "No JVD",
      "assess-spine": "Unremarkable / No step-off",
      "inspects-chest": "Multiple lacerations; red marks to right chest",
      "palpate-chest": "Flail segment to right upper chest",
      "auscultate-chest": "Crepitus on right",
      "assess-abdomen": "Soft, nontender",
      "assess-pelvis": "Stable",
      "assess-genitalia": "Unremarkable",
      "assess-left-leg": "Multiple lacerations",
      "assess-right-leg": "Amputation of right leg at the ankle",
      "assess-left-arm": "Multiple lacerations",
      "assess-right-arm": "Multiple lacerations",
      "assess-posterior-thorax": "Unremarkable",
      "assess-lumbar-buttocks": "Unremarkable"
  },
  initialVitalSigns: {
    BP: "96 / palpation",
    P: "130, weak radial pulses",
    R: "38, shallow; LS clear and equal with crepitus on right",
    Skin: "Cyanonic, diaphoretic",
    Spo2: "78 % /RA",
    ETCO2: "64 mm Hg",
    GCS: "8 (E-2, V-2, M-4), PERRLA",
    Glucose: "86 mg/dl(4.8 mmol / l)",
    Pain: "Unable to access",
    Temp: "96.5 F(35.8 C)"
  },
  SAMPLE: {
    S: "shortness of breath",
    A: "unknown",
    M: "unknown",
    P: "unknown",
    L: "unknown",
    E: "Riding a lawnmower on an incline and it rolled over the patient"
  },
  reassessmentVitals: {
    BP: {
      "good-if": {
        "type": AND,
        "ids": ["bleeding-interventions", "shock-interventions"] // hemorrhage control, IV
      },
      "goodVitals": "96 / P",
      "badVitals": "78 / P"
    },
    P: {
      "good-if": {
        "type": AND,
        "ids": ["bleeding-interventions", "shock-interventions"] // hemorrhage control, IV
      },
      "goodVitals": "120, weak",
      "badVitals": "130, weak radial pulses"
    },
    R: {
      "good-if": {
        "type": AND,
        "ids": ["ventilation-intervention-10", "manage-breathing-injury"] // intubation, ventilation
      },
      "goodVitals": "12, LS clear and equal with crepitus on right",
      "badVitals": "38, shallow; LS clear and equal with crepitus on right"
    },
    Skin: {
      "good-if": {
        "type": AND,
        "ids": ["bleeding-interventions", "shock-interventions", "ventilation-intervention-10", "manage-breathing-injury"] // Hemorrhage control, IV, intubates, ventilates
      },
      "goodVitals": "Pale, diaphoretic",
      "badVitals": "Cyanonic, diaphoretic"
    },
    Spo2: {
      "good-if": {
        "type": AND,
        "ids": ["ventilation-intervention-10", "manage-breathing-injury"] // intubation, ventilation
      },
      "goodVitals": "99%, O2 ",
      "badVitals": "No capture"
    },
    ETCO2: {
      "good-if": {
        "type": AND,
        "ids": ["ventilation-intervention-10", "manage-breathing-injury"] // intubation, ventilation
      },
      goodVitals: "45 mm Hg",
      badVitals: "32 mm Hg"
    },
    GCS: {
      "good-if": {
        "type": AND,
        "ids": ["bleeding-interventions", "shock-interventions", "ventilation-intervention-10" ] // hemorrhage control, IV, intubation
      },
      "goodVitals": "8",
      "badVitals": "4"
    },
    Glucose: {
      "good-if": {
        "type": OR,
        "ids": [] // always the same
      },
      "goodVitals": "86 mg/dl(4.8 mmol / l)",
      "badVitals": "86 mg/dl(4.8 mmol / l)"
    },
    Pain: {
      "good-if": {
        "type": OR,
        "ids": [] // always the same
      },
      "goodVitals": "Unable to access",
      "badVitals": "Unable to access"
    },
    Temp: {
      "good-if": {
        "type": OR,
        "ids": ["shock-intervention-30"] // covers patient
      },
      "goodVitals": "96.5 F(35.8 C)",
      "badVitals": "94.8"
    }
  },
  interventions: {
    "stabilizes-spine": "do", // "c-spine-interventions"
    "manages-airway": "do", // "airway-interventions"
    "oxygen-therapy": "do", // na?? - no intervention list for it but should be done
    "manage-breathing-injury": "do", // ventilation-interventions
    "control-bleeding": "do", // "bleeding-interventions"
    "control-shock": "say", // "shock-interventions"
    "transport-priority": "do", // "transport-interventions"
  }
};


export default scenarioData;