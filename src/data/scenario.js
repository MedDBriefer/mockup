const data = require("./trauma2.js");
// console.log(steps);

console.log(data);
export const scenario = Object.assign({}, data, {
  info: {
    name: "PHTC M2CA",
    dispatchInfo: "You and your partners work for a transporting EMS agency and have been dispatched to a residential housing development for a lawn mower accident. It is 1330 hr on a Saturday afternoon and the temperature is 90°F (32°C). You are 5 minutes away from a level III trauma center and 25 minutes from a level I trauma center.",
    sceneAssessment: "You arrive at a suburban yard where you observe a large riding lawn mower on its side at the bottom of an 8-ft (2.5-m) hill. A bystander is holding a towel to the patient’s right lower leg. As you approach the patient, the bystander tells you that he saw the mower tip over while the patient was driving it.",
  },
  callouts: {
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
    "control-bleeding": "Major external hemorrhage at lower right leg",
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
    "assess-nads-taint": "Unremarkable",
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
  }
});
