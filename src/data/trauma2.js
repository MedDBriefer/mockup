const ASSESS = "assessment";
const INTERV = "intervention";
const CHECK = "check-box";
const RADIO = "radio-button";
const CRIT_FAIL = "critical-criteria";
const HEADING = "heading";

const data = {
    outline: [
        { id: "bsi", type: HEADING, label: "BSI" },
        { id: "scene-size-up", type: HEADING, label: "Scene Size-Up" },
        {
            id: "initial-assessment-resuscitation",
            type: HEADING,
            label: "Primary Assessment/Resuscitation",
            children: [
                { id: 'general-assessment', type: HEADING, label: 'General Assessment' },
                { id: "airway", type: HEADING, label: "Airway" },
                { id: "breathing", type: HEADING, label: "Breathing" },
                { id: "circulation", type: HEADING, label: "Circulation" },
                { id: "transport-decision", type: HEADING, label: "Transport Decision" }
            ]
        },
        { id: "history-taking", type: HEADING, label: "History Taking" },
        {
            id: "detailed-physical-examination",
            type: HEADING,
            label: "Secondary Assessment",
            children: [
                { id: "head", type: HEADING, label: "Head" },
                { id: "neck", type: HEADING, label: "Neck" },
                { id: "chest", type: HEADING, label: "Chest" },
                { id: "abdomen-pelvis", type: HEADING, label: "Abdomen/pelvis" },
                { id: "lower-extremities", type: HEADING, label: "Lower extremities" },
                { id: "upper-extremities", type: HEADING, label: "Upper extremities" },
                { id: "posterior-thorax-lumbar-buttocks", type: HEADING, label: "Posterior thorax, lumbar, & buttocks" },
                { id: "misc", type: HEADING, label: "Misc."}
            ]
        },

    ],
    items: {
        'bsi': [
            { id: "apply-ppe", type: ASSESS, label: "Takes or verbalizes body substance isolation precautions." } // crit criteria 590
        ],
        'scene-size-up': [
            { id: "assess-scene-safety",     type: ASSESS, label: "Determines the scene/situation is safe" },
            { id: "assess-injury-mechanism", type: ASSESS, label: "Determines the mechanism of injury/nature of illness" },
            { id: "assess-num-patients",     type: ASSESS, label: "Determines the number of patients" },
            { id: "request-addl-help",       type: ASSESS, label: "Requests additional help if necessary" },
            { id: "assess-spinal-stability", type: ASSESS, label: "Considers stabilization of spine" }, // crit criteria 610
            { id: "stabilizes-spine",        type: INTERV, label: "Stabilizes or directs assistant to stabilize the cervical spine, as indicated" } // crit criteria 610
        ],
        'general-assessment': [
            { id: "verbalizes-patient-condition", type: ASSESS, label: "Verbalizes general impression of the patient" },
            { id: "determines-loc",               type: ASSESS, label: "Determines responsiveness/level of consciousness" },
            { id: "determines-life-threats",      type: ASSESS, label: "Determines chief complaint/apparent life-threats" }
        ],
        'airway': [
            { id: "assess-airway",   type: ASSESS, label: "Opens & assesses airway" },
            { id: "manages-airway",  type: INTERV, label: "Inserts adjunct as indicated" } // action / crit criteria 690
        ],
        'breathing': [
            { id: "assess-breathing",        type: ASSESS, label: "Assess breathing" },
            { id: "assess-ventilation",      type: ASSESS, label: "Assess adequate ventilation" },
            { id: "oxygen-therapy",          type: INTERV, label: "Initiates appropriate oxygen therapy" }, // crit criteria 620
            { id: "manage-breathing-injury", type: INTERV, label: "Manages any injury which may compromise breathing/ventilation" } // crit criteria 630
        ],
        'circulation': [
            { id: "assess-pulse",     type: ASSESS, label: "Checks pulse" },
            { id: "assess-skin",      type: ASSESS, label: "Assess skin [color, temperature, or condition]" },
            { id: "assess-bleeding",  type: ASSESS, label: "Assesses for major bleeding" },
            { id: "control-bleeding", type: INTERV, label: "Manages major bleeding if present" },
            { id: "control-shock",    type: INTERV, label: "Initiates shock management" } // crit criteria 640
        ],
        'transport-decision': [
            { id: "transport-priority", type: ASSESS, label: "Identifies priority patients/makes transport decision based upon calculated GCS" } // crit criteria 650
        ],
        'history-taking': [
            { id: "obtains-vitals", type: ASSESS, label: "Obtains, or directs assistant to obtain, baseline vital signs" }, // point to vitals
            { id: "attempt-obtain-sample", type: ASSESS, label: "Attempts to obtain SAMPLE history" } // point to SAMPLE
        ],
        'head': [
            { id: "assess-mouth-nose-face", type: ASSESS, label: "Inspects mouth, nose, & assesses facial area" },
            { id: "assess-scape-ears",      type: ASSESS, label: "Inspects & palpates scalp & ears" },
            { id: "assess-perrl",           type: ASSESS, label: "Assesses eyes for PERRL" }
        ],
        'neck': [
            { id: "assess-trachea", type: ASSESS, label: "Checks position of trachea" },
            { id: "assess-jugular",          type: ASSESS, label: "Checks jugular veins" },
            { id: "assess-spine",            type: ASSESS, label: "Palpates cervical spine" }
        ],
        'chest': [
            { id: "inspects-chest",    type: ASSESS, label: "Inspects chest" },
            { id: "palpate-chest",    type: ASSESS, label: "Palpates chest" },
            { id: "auscultate-chest", type: ASSESS, label: "Auscultates chest" }
        ],
        'abdomen-pelvis': [
            { id: "assess-abdomen",   type: ASSESS, label: "Inspects & palpates abdomen" },
            { id: "assess-pelvis",    type: ASSESS, label: "Assesses pelvis" },
            { id: "assess-genitalia", type: ASSESS, label: "Verbalizes assessment of genitalia/perineum as needed" }
        ],
        'lower-extremities': [
            { id: "assess-left-leg",  type: ASSESS, label: "Left Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" },
            { id: "assess-right-leg", type: ASSESS, label: "Right Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" }
        ],
        'upper-extremities': [
            { id: "assess-left-arm", type: ASSESS, label: "Left Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Left Arm" },
            { id: "assess-right-arm", type: ASSESS, label: "Right Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions", calloutLabel: "Right Arm" }
        ],
        "posterior-thorax-lumbar-buttocks": [
            { id: "assess-posterior-thorax", type: ASSESS, label: "Inspects & palpates posterior thorax" },
            { id: "assess-lumbar-buttocks",  type: ASSESS, label: "Inspects & palpates lumbar & buttocks area" }
        ],
        "misc": [
            { id: "550", type: ASSESS, label: "Manages secondary injuries & wounds appropriately" },
            { id: "560", type: ASSESS, label: "Performs ongoing assessment" }
        ]
    },
    callouts: [
        { stepId: "assess-scene-safety",           calloutLabel: "Scene Safety" },
        { stepId: "assess-injury-mechanism",       calloutLabel: "Mechanism of Injury" },
        { stepId: "assess-num-patients",           calloutLabel: "Num Patients" },
        { stepId: "request-addl-help",             calloutLabel: "Additional Help" },
        { stepId: "verbalizes-patient-condition",  calloutLabel: "Condition" },
        { stepId: "determines-loc",                calloutLabel: "LOC" },
        { stepId: "determines-life-threats",       calloutLabel: "Life Threats" },
        { stepId: "assess-airway",                 calloutLabel: "Airway" },
        { stepId: "assess-breathing",              calloutLabel: "Breathing" },
        { stepId: "assess-ventilation",            calloutLabel: "Ventilations" },
        { stepId: "assess-pulse",                  calloutLabel: "Pulse" },
        { stepId: "assess-skin",                   calloutLabel: "Skin" },
        { stepId: "assess-bleeding",               calloutLabel: "Bleeding" },
        { stepId: "assess-mouth-nose-face",        calloutLabel: "Face" },
        { stepId: "assess-scape-ears",             calloutLabel: "Ears" },
        { stepId: "assess-perrl",                  calloutLabel: "PERRL" },
        { stepId: "assess-trachea",                calloutLabel: "Trachea" },
        { stepId: "assess-jugular",                calloutLabel: "Jugular" },
        { stepId: "assess-spine",                  calloutLabel: "Assess C-Spine" },
        { stepId: "inspects-chest",                calloutLabel: "Inspect Chest" },
        { stepId: "palpate-chest",                 calloutLabel: "Palpate Chest" },
        { stepId: "auscultate-chest",              calloutLabel: "Auscultates Chest" },
        { stepId: "assess-abdomen",                calloutLabel: "Abdomen" },
        { stepId: "assess-pelvis",                 calloutLabel: "Pelvis" },
        { stepId: "assess-genitalia",              calloutLabel: "Genitalia" },
        { stepId: "assess-left-leg",               calloutLabel: "Left Leg" },
        { stepId: "assess-right-leg",              calloutLabel: "Right Leg" },
        { stepId: "assess-left-arm",               calloutLabel: "Left Arm" },
        { stepId: "assess-right-arm",              calloutLabel: "Right Arm" },
        { stepId: "assess-posterior-thorax",       calloutLabel: "Posterior/Thorax" },
        { stepId: "assess-lumbar-buttocks",        calloutLabel: "Lumbar/Buttocks" }
    ],
    criticalCriteria: [
        { id: "580", type: CRIT_FAIL, parent: "transport-priority", label: "Failure to initiate or call for transport of the patient within 10 minutes of time limit" },

        // true if 'apply-ppe' not checked?
        { id: "590", type: CRIT_FAIL, parent: "apply-ppe", label: "Failure to take or verbalize body substance isolation precautions" },
        // true if 'assess-scene-safety' not checked?
        { id: "600", type: CRIT_FAIL, parent: "assess-scene-safety", label: "Failure to determine scene safety" },
        // true if 'stabilize-spine' not checked AND indicated?
        { id: "610", type: CRIT_FAIL, parent: "stabilizes-spine", label: "Failure to assess for and provide spinal protection when indicated" },

        { id: "620", type: CRIT_FAIL, parent: "oxygen-therapy", label: "Failure to voice & ultimately provide high concentration of oxygen" },
        // true if ANY of the ventiliation
        { id: "630", type: CRIT_FAIL, parent: "assess-ventilation", label: "Failure to assess/provide adequate ventilation" },
        { id: "640", type: CRIT_FAIL, parent: "Primary Assessment/Resuscitation", label: "Failure to find or appropriately manage problems associated with airway, breathing, hemorrhage or shock [hypoperfusion]" },
        // combine below with 580?
        { id: "650", type: CRIT_FAIL, parent: "transport-priority", label: "Failure to differentiate patient's need for immediate transportation versus continued assessment/treatment at the scene" },

        { id: "660", type: CRIT_FAIL, label: "Does other detailed/focused history or physical exam before assessing/treating threats to airway, breathing, & circulation" },
        { id: "670", type: CRIT_FAIL, label: "Exhibits unacceptable affect with patient or other personnel" },
        { id: "680", type: CRIT_FAIL, label: "Failure to manage the patient as a competent EMT-P" },
        { id: "690", type: CRIT_FAIL, label: "Uses or orders a dangerous or inappropriate intervention" }
    ],
    interventionForms: {
        // Each selected intervention should, by default, also include an 'other / incorrect intervention' option
        // Each object title matches checklist item id for easier mapping
        // TODO: may have to assign type to individual steps to account for medical scenarios (or for a mix or radios/checks)
        "stabilizes-spine": {
            id: "c-spine-interventions",
            type: CHECK,
            steps: [
                { id: "c-spine-intervention-10", label: "Holds manual stabilization" },
                { id: "c-spine-intervention-20", label: "Applies cervical collar" }
            ],
            criticalCriteria: []
        },
        "manages-aiway": {
            id: "airway-interventions",
            type: RADIO,
            steps: [
                { id: "airway-intervention-10", label: "Inserts OPA" },
                { id: "airway-intervention-20", label: "Inserts NPA" },
            ],
            criticalCriteria: []
        },
        "assess-ventilation": {
            id: "ventilation-interventions",
            type: RADIO,
            steps: [
                { id: "ventilation-intervention-10", label: "Endotracheal intubation" },
                { id: "ventilation-intervention-20", label: "Bag-valve mask" },
            ],
            criticalCriteria: []
        },
        "control-bleeding": {
            id: "bleeding-interventions",
            type: RADIO,
            steps: [
                { id: "bleeding-intervention-10", label: "Applies direct pressure" },
                { id: "bleeding-intervention-20", label: "Applies tourniquet" }
            ],
            criticalCriteria: [ // Critical criteria should automatically be check boxes
                { id: "bleeding-crit-30", type: CRIT_FAIL, label: "Did not control hemorrhage using correct procedures in a timely manner" },
                { id: "bleeding-crit-40", type: CRIT_FAIL, label: "Did not apply direct pressure to wound before applying tourniquet" },
                { id: "bleeding-crit-50", type: CRIT_FAIL, label: "Did not properly position the patient" },
                { id: "bleeding-crit-60", type: CRIT_FAIL, label: "Did not take steps to prevent heat loss" }
            ]
        },
        "control-shock": {
            id: "shock-interventions",
            type: RADIO,
            steps: [
                { id: "shock-intervention-10", label: "IV fluid therapy--Peripheral IV insertion" },
                { id: "shock-intervention-20", label: "IV fluid therapy--IV Push/Bolus" },
                { id: "shock-intervention-30", label: "Covers patient" }
            ],
            criticalCriteria: [
                { id: "shock-crit-10", type: CRIT_FAIL, label: "Fails to establish a patent and properly adjusted IV within 6-minute time limit" },
                { id: "shock-crit-20", type: CRIT_FAIL, label: "Fails to establish IV within 3 attempts during 6-minute time limit" },
                { id: "shock-crit-30", type: CRIT_FAIL, label: "Contaminates equipment or site without appropriately correcting situation" },
                { id: "shock-crit-40", type: CRIT_FAIL, label: "Performs any improper technique resulting in the potential for uncontrolled hemorrhage, catheter shear, or air embolism" },
                { id: "shock-crit-50", type: CRIT_FAIL, label: "Fails to dispose/verbalize disposal of blood-contaminated sharps immediately in proper container at point of use" }
            ]
        },
        "transport-decision": {
            id: "transport-interventions",
            type: RADIO,
            steps: [
                { id: "transport-intervention-10", label: "Scoop Stretcher" },
                { id: "transport-intervention-20", label: "Supine Long Backboard" },
            ],
            criticalCriteria: [
                { id: "transport-crit-10", type: CRIT_FAIL, label: "Did not immediately direct or take manual immobilization of head" },
                { id: "transport-crit-20", type: CRIT_FAIL, label: "Did not properly apply appropriately sized cervical collar before ordering releaseof manual immobilization" },
                { id: "transport-crit-30", type: CRIT_FAIL, label: "Released or ordered relase of manual immobilization before it was maintained mechanically" },
                { id: "transport-crit-40", type: CRIT_FAIL, label: "Manipulated or moved patient excessively causing potential spinal compromise" },
                { id: "transport-crit-50", type: CRIT_FAIL, label: "Head immobilized to the device before device sufficiently secured to torso" },
                { id: "transport-crit-60", type: CRIT_FAIL, label: "Patient moves excessively up, down, left, or right on the device" },
                { id: "transport-crit-70", type: CRIT_FAIL, label: "Head immobilization allows for excessive movement" },
                { id: "transport-crit-80", type: CRIT_FAIL, label: "Upon completion of immobilization, head is not in a neutral, in-line position" },
                { id: "transport-crit-90", type: CRIT_FAIL, label: "Did not reassess motor, sensory, and circulatory functions in each extremity after immobilizing patient to the device" }
            ]
        }
    }
};

module.exports = data;
// export default data;