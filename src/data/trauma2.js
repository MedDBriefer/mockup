const ASSESS = "assessment";
const INTERV = "intervention";
const CHECK = "check-box";
const RADIO = "radio-button";
// const CRIT_FAIL = "critical-criteria";


const data = {
    outline: [
        { id: "bsi", label: "BSI" },
        { id: "scene-size-up", label: "Scene Size-Up" },
        {
            id: "initial-assessment-resuscitation",
            label: "Primary Assessment/Resuscitation",
            children: [
                { id: 'general-assessment', label: 'General Assessment' },
                { id: "airway", label: "Airway" },
                { id: "breathing", label: "Breathing" },
                { id: "circulation", label: "Circulation" },
                { id: "transport-decision", label: "Transport Decision" }
            ]
        },
        { id: "history-taking", label: "History Taking" },
        {
            id: "detailed-physical-examination",
            label: "Secondary Assessment",
            children: [
                { id: "head", label: "Head" },
                { id: "neck", label: "Neck" },
                { id: "chest", label: "Chest" },
                { id: "abdomen-pelvis", label: "Abdomen/pelvis" },
                { id: "lower-extremities", label: "Lower extremities" },
                { id: "upper-extremities", label: "Upper extremities" },
                { id: "posterior-thorax-lumbar-buttocks", label: "Posterior thorax, lumbar, & buttocks" },
                {
                    id: "550",
                    label: "Manages secondary injuries & wounds appropriately",
                },
                {
                    id: "560",
                    label: "Performs ongoing assessment",
                }
            ]
        },

    ],
    items: {
        'bsi': [
            { id: "apply-ppe",                  type: "????", label: "Takes or verbalizes body substance isolation precautions." }
        ],
        'scene-size-up': [
            { id: "assess-scene-safety",        type: ASSESS, label: "Determines the scene/situation is safe", calloutLabel: "Scene Safety"},
            { id: "assess-injury-mechanism",    type: ASSESS, label: "Determines the mechanism of injury/nature of illness", calloutLabel: "Mechanism of Injury"},
            { id: "assess-num-patients",        type: ASSESS, label: "Determines the number of patients", calloutLabel: "Num Patients"},
            { id: "request-addl-help",          type: ASSESS, label: "Requests additional help if necessary", calloutLabel: "Additional Help"},
            { id: "assess-spinal-stability",    type: ASSESS, label: "Considers stabilization of spine" },
            { id: "stabilizes-spine",           type: INTERV, label: "Stabilizes or directs assistant to stabilize the cervical spine, as indicated"}
        ],
        'general-assessment': [
            { id: "verbalizes-patient-condition", type: ASSESS, label: "Verbalizes general impression of the patient" },
            { id: "determines-loc",               type: ASSESS, label: "Determines responsiveness/level of consciousness", calloutLabel: "LOC"},
            { id: "determines-life-threats",      type: ASSESS, label: "Determines chief complaint/apparent life-threats" }
        ],
        'airway': [
            { id: "assess-airway", type: ASSESS, label: "Opens & assesses airway", calloutLabel: "Airway" },
            { id: "clears-aiway",  type: INTERV, label: "Inserts adjunct as indicated" }
        ],
        'breathing': [
            { id: "assess-breathing",        type: ASSESS, label: "Assess breathing", calloutLabel: "Breathing" },
            { id: "assess-ventilation",      type: ASSESS, label: "Assess adequate ventilation" },
            { id: "oxygen-therapy",          type: INTERV, label: "Initiates appropriate oxygen therapy" },
            { id: "manage-breathing-injury", type: INTERV, label: "Manages & injure which may compromise breathing/ventilation" }
        ],
        'circulation': [
            { id: "assess-pulse",     type: ASSESS, label: "Checks pulse", calloutLabel: "Pulse"},
            { id: "assess-skin",      type: ASSESS, label: "Assess skin [color, temperature, or condition]" },
            { id: "control-bleeding", type: INTERV, label: "Assesses for & controls major bleeding if present" },
            { id: "control-shock",    type: INTERV, label: "Initiates shock management" }
        ],
        'transport-decision': [ // change id to "transport-dec" or something?
            { id: "260",              type: ASSESS, label: "Identifies priority patients/makes transport decision based upon calculated GCS" }
        ],
        'history-taking': [
            { id: "obtains-vitals",        type: ASSESS, label: "Obtains, or directs assistant to obtain, baseline vital signs" },
            { id: "attempt-obtain-sample", type: ASSESS, label: "Attempts to obtain SAMPLE history" }
        ],
        'head': [
            { id: "assess-mouth-nose-face", type: ASSESS, label: "Inspects mouth, nose, & assesses facial area", calloutLabel: "Face" },
            { id: "assess-scape-ears",      type: ASSESS, label: "Inspects & palpates scalp & ears" },
            { id: "assess-perrl",           type: ASSESS, label: "Assesses eyes for PERRL", calloutLabel: "PERRL" }
        ],
        'neck': [
            { id: "assess-trachea-position", type: ASSESS, label: "Checks position of trachea", calloutLabel: "Trachea"},
            { id: "assess-jugular",          type: ASSESS, label: "Checks jugular veins", calloutLabel: "Jugular" },
            { id: "assess-spine",            type: ASSESS, label: "Palpates cervical spine" }
        ],
        'chest': [
            { id: "inspect-chest",    type: ASSESS, label: "Inspects chest", calloutLabel: "Inspect Chest"},
            { id: "palpate-chest",    type: ASSESS, label: "Palpates chest", calloutLabel: "Palpate Chest" },
            { id: "auscultate-chest", type: ASSESS, label: "Auscultates chest", calloutLabel: "Auscultates Chest" }
        ],
        'abdomen-pelvis': [
            { id: "assess-abdomen",    type: ASSESS, label: "Inspects & palpates abdomen", calloutLabel: "Inspect Abdomen"},
            { id: "assess-pelvis",     type: ASSESS, label: "Assesses pelvis" },
            { id: "assess-nads-taint", type: ASSESS, label: "Verbalizes assessment of genitalia/perineum as needed" }
        ],
        'lower-extremities': [
            { id: "assess-left-leg",  type: ASSESS, label: "Left Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Left Leg" },
            { id: "assess-right-leg", type: ASSESS, label: "Right Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Right Leg" }
        ],
        'upper-extremities': [
            { id: "assess-left-arm",  type: ASSESS, label: "Left Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Left Arm" },
            { id: "assess-right-arm", type: ASSESS, label: "Right Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Right Arm" }
        ],
        "posterior-thorax-lumbar-buttocks": [
            { id: "assess-posterior-thorax", type: ASSESS, label: "Inspects & palpates posterior thorax" },
            { id: "assess-lumbar-buttocks",  type: ASSESS, label: "Inspects & palpates lumbar & buttocks area" }
        ]
    },
    criticalCriteria: [
        { id: "580", label: "Failure to initiate or call for transport of the patient within 10 minutes of time limit" },

        // true if 'apply-ppe' not checked?
        { id: "590", label: "Failure to take or verbalize body substance isolation precautions" },
        // true if 'assess-scene-safety' not checked?
        { id: "600", label: "Failure to determine scene safety" },
        // true if 'stabilize-spine' not checked AND indicated?
        { id: "610", label: "Failure to assess for and provide spinal protection when indicated" },

        { id: "620", label: "Failure to voice & ultimately provide high concentration of oxygen" },
        // true if ANY of the ventiliation
        { id: "630", label: "Failure to assess/provide adequate ventilation" },
        { id: "640", label: "Failure to find or appropriately manage problems associated with airway, breathing, hemorrhage or shock [hypoperfusion" },

        { id: "650", label: "Failure to differentiate patient's need for immediate transportation versus continued assessment/treatment at the scene" },

        { id: "660", label: "Does other detailed/focused history or physical exam before assessing/treating threats to airway, breathing, & circulation" },
        { id: "670", label: "Exhibits unacceptable affect with patient or other personnel" },
        { id: "680", label: "Failure to manage the patient as a competent EMT" },
        { id: "690", label: "Uses or orders a dangerous or inappropriate intervention" }
    ],
    interventionForms: {
        // Each selected intervention should, by default, also include an 'other / incorrect intervention' option
        // Each object title matches checklist item id for easier mapping
        // TODO: may have to assign type to individual steps to account for medical scenarios (or for a mix or radios/checks)
        "stabilizes-spine": {
            id: "intervention-10",
            type: CHECK,
            steps: [
                { id: "spine-10", label: "Holds manual stabilization" },
                { id: "spine-20", label: "Applies cervical collar" }
            ],
            criticalCriteria: []
        },
        "assess-ventilation": {
            id: "intervention-20",
            type: RADIO,
            steps: [
                { id: "ventilation-10", label: "Endotracheal intubation" },
                { id: "ventilation-20", label: "Bag-valve mask" },
            ],
            criticalCriteria: []
        },
        "control-bleeding": {
            id: "intervnetion-30",
            type: RADIO,
            steps: [
                { id: "bleeding-10", label: "Applies direct pressure" },
                { id: "bleeding-20", label: "Applies tourniquet" }
            ],
            criticalCriteria: [
                { id: "bleeding-30", label: "Did not control hemorrhage using correct procedures in a timely manner" },
                { id: "bleeding-40", label: "Did not apply direct pressure to wound before applying tourniquet" },
                { id: "bleeding-50", label: "Did not properly position the patient" },
                { id: "bleeding-60", label: "Did not take steps to prevent heat loss" }
            ]
        },
        "control-shock": {
            id: "intervention-40",
            type: RADIO,
            steps: [
                { id: "shock-10", label: "IV fluid therapy--Peripheral IV insertion" },
                { id: "shock-20", label: "IV fluid therapy--IV Push/Bolus" },
                { id: "shock-30", label: "Covers patient" }
            ],
            criticalCriteria: [
                { id: "shock-40", label: "Fails to establish a patent and properly adjusted IV within 6-minute time limit" },
                { id: "shock-50", label: "Fails to establish IV within 3 attempts during 6-minute time limit" },
                { id: "shock-60", label: "Contaminates equipment or site without appropriately correcting situation" },
                { id: "shock-70", label: "Performs any improper technique resulting in the potential for uncontrolled hemorrhage, catheter shear, or air embolism" },
                { id: "shock-80", label: "Fails to dispose/verbalize disposal of blood-contaminated sharps immediately in proper container at point of use" }
            ]
        },
        "transport-decision": {
            id: "intervention-10",
            type: RADIO,
            steps: [
                { id: "transport-10", label: "Scoop Stretcher" },
                { id: "transport-20", label: "Supine Long Backboard" },
            ],
            criticalCriteria: [
                { id: "transport-30", label: "Did not immediately direct or take manual immobilization of head" },
                { id: "transport-40", label: "Did not properly apply appropriately sized cervical collar before ordering releaseof manual immobilization" },
                { id: "transport-50", label: "Released or ordered relase of manual immobilization before it was maintained mechanically" },
                { id: "transport-60", label: "Manipulated or moved patient excessively causing potential spinal compromise" },
                { id: "transport-70", label: "Head immobilized to the device before device sufficiently secured to torso" },
                { id: "transport-80", label: "Patient moves excessively up, down, left, or right on the device" },
                { id: "transport-90", label: "Head immobilization allows for excessive movement" },
                { id: "transport-100", label: "Upon completion of immobilization, head is not in a neutral, in-line position" },
                { id: "transport-110", label: "Did not reassess motor, sensory, and circulatory functions in each extremity after immobilizing patient to the device" }
            ]
        }
    }
};

module.exports = data;
// export default data;