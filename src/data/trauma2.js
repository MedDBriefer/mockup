const ASSESS = "assessment";
const INTERV = "intervention";
const CRIT_FAIL = "critical-criteria";


const data = {
    outline: [
        { id: "bsi", label: "BSI" },
        { id: "scene-size-up", label: "Scene Size-Up" },
        {
            id: "initial-assessment-resuscitation",
            label: "INITIAL ASSESSMENT/RESUSCITATION",
            children: [
                { id: 'general-assessment', label: 'General Assessment' },
                { id: "airway", label: "Airway" },
                { id: "breathing", label: "Breathing" },
                { id: "circulation", label: "Circulation" },
                { id: "transport-decision", label: "Transport Decision" }
            ]
        },
        { id: "history-taking", label: "HISTORY TAKING" },
        {
            id: "detailed-physical-examination",
            label: "DETAILED PHYSICAL EXAMINATION",
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
    items: [{
        parent: 'bsi',
        children: [
            { id: "apply-ppe",                  type: "????", label: "Takes or verbalizes body substance isolation precautions." }
        ]
    }, {
        parent: 'scene-size-up',
        children: [
            { id: "assess-scene-safety",        type: ASSESS, label: "Determines the scene/situation is safe" },
            { id: "assess-injury-mechanism",    type: ASSESS, label: "Determines the mechanism of injury/nature of illness" },
            { id: "assess-num-patients",        type: ASSESS, label: "Determines the number of patients" },
            { id: "request-addl-help",          type: ASSESS, label: "Requests additional help if necessary" },
            { id: "assess-spinal-stability",    type: ASSESS, label: "Considers stabilization of spine" },
            { id: "stabilizes-spine",           type: INTERV, label: "Stabilizes or directs assistant to stabilize the cervical spine, as indicated"}
        ]
    }, {
        parent: 'general-assessment',
        children: [
            { id: "verbalizes-patient-condition", type: ASSESS, label: "Verbalizes general impression of the patient" },
            { id: "determines-loc",               type: ASSESS, label: "Determines responsiveness/level of consciousness" },
            { id: "determines-life-threats",      type: ASSESS, label: "Determines chief complaint/apparent life-threats" }
        ]
    }, {
        parent: 'airway',
        children: [
            { id: "assess-airway", type: ASSESS, label: "Opens & assesses airway" },
            { id: "clears-aiway",  type: INTERV, label: "Inserts adjunct as indicated" }
        ]
    }, {
        parent: 'breathing',
        children: [
            { id: "assess-breathing",        type: ASSESS, label: "Assess breathing" },
            { id: "assess-ventilation",      type: ASSESS, label: "Assess adequate ventilation" },
            { id: "oxygen-therapy",          type: INTERV, label: "Initiates appropriate oxygen therapy" },
            { id: "manage-breathing-injury", type: INTERV, label: "Manages & injure which may compromise breathing/ventilation" }
        ]
    }, {
        parent: 'circulation',
        children: [
            { id: "assess-pulse",     type: ASSESS, label: "Checks pulse" },
            { id: "assess-skin",      type: ASSESS, label: "Assess skin [color, temperature, or condition]" },
            { id: "control-bleading", type: INTERV, label: "Assesses for & controls major bleeding if present" },
            { id: "control-shock",    type: INTERV, label: "Initiates shock management" }
        ]
    }, {
        parent: 'transport-decision',
        children: [
            { id: "260",              type: ASSESS, label: "Identifies priority patients/makes transport decision based upon calculated GCS" }
        ]
    }, {
        parent: 'history-taking',
        children: [
            { id: "obtains-vitals",        type: ASSESS, label: "Obtains, or directs assistant to obtain, baseline vital signs" },
            { id: "attempt-obtain-sample", type: ASSESS, label: "Attempts to obtain SAMPLE history" }
        ]
    }, {
        parent: 'head',
        children: [
            { id: "assess-mouth-nose-face", type: ASSESS, label: "Inspects mouth, nose, & assesses facial area" },
            { id: "assess-scape-ears",      type: ASSESS, label: "Inspects & palpates scalp & ears" },
            { id: "assess-perrl",           type: ASSESS, label: "Assesses eyes for PERRL" }
        ]
    }, {
        parent: 'neck',
        children: [
            { id: "assess-trachea-position", type: ASSESS, label: "Checks position of trachea" },
            { id: "assess-jugular",          type: ASSESS, label: "Checks jugular veins" },
            { id: "assess-spine",            type: ASSESS, label: "Palpates cervical spine" }
        ]
    }, {
        parent: 'chest',
        children: [
            { id: "inspect-chess",    type: ASSESS, label: "Inspects chest" },
            { id: "palpate-chest",    type: ASSESS, label: "Palpates chest" },
            { id: "auscultate-chest", type: ASSESS, label: "Auscultates chest" }
        ]
    }, {
        parent: 'abdomen-pelvis',
        children: [
            { id: "assess-abdomen",    type: ASSESS, label: "Inspects & palpates abdomen" },
            { id: "assess-pelvis",     type: ASSESS, label: "Assesses pelvis" },
            { id: "assess-nads-taint", type: ASSESS, label: "Verbalizes assessment of genitalia/perineum as needed" }
        ]
    }, {
        parent: 'lower-extremities',
        children: [
            { id: "assess-left-leg",  type: ASSESS, label: "Left Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" },
            { id: "assess-right-leg", type: ASSESS, label: "Right Leg: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" }
        ]
    }, {
        parent: 'upper-extremities',
        children: [
            { id: "assess-left-arm",  type: ASSESS, label: "Left Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" },
            { id: "assess-right-arm", type: ASSESS, label: "Right Arm: Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" }
        ]
    }, {
        parent: "posterior-thorax-lumbar-buttocks",
        children: [
            { id: "assess-posterior-thorax", type: ASSESS, label: "Inspects & palpates posterior thorax" },
            { id: "assess-lumbar-buttocks",  type: ASSESS, label: "Inspects & palpates lumbar & buttocks area" }
        ]
    }],
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
    ]
};

export default data;