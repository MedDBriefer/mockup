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
            { id: "ppe", label: "Takes or verbalizes body substance isolation precautions." }
        ]
    }, {
        parent: 'scene-size-up',
        children: [
            { id: "scene-safety", label: "Determines the scene/situation is safe" },
            { id: "50", label: "Determines the mechanism of injury/nature of illness" },
            { id: "60", label: "Determines the number of patients" },
            { id: "70", label: "Requests additional help if necessary" },
            { id: "80", label: "Considers stabilization of spine" }
        ]
    }, {
        parent: 'general-assessment',
        children: [
            { id: "100", label: "Verbalizes general impression of the patient" },
            { id: "110", label: "Determines responsiveness/level of consciousness" },
            { id: "120", label: "Determines chief complaint/apparent life-threats" }
        ]
    }, {
        parent: 'airway',
        children: [
            { id: "140", label: "Opens & assesses airway" },
            { id: "150", label: "Inserts adjunct as indicated" }
        ]
    }, {
        parent: 'breathing',
        children: [
            { id: "170", label: "Assess breathing" },
            { id: "180", label: "Assess adequate ventilation" },
            { id: "190", label: "Initiates appropriate oxygen therapy" },
            { id: "200", label: "Manages & injure which may compromise breathing/ventilation" }
        ]
    }, {
        parent: 'circulation',
        children: [
            { id: "220", label: "Checks pulse" },
            { id: "230", label: "Assess skin [color, temperature, or condition]" },
            { id: "240", label: "Assesses for & controls major bleeding if present" },
            { id: "250", label: "Initiates shock management" }
        ]
    }, {
        parent: 'transport-decision',
        children: [
            { id: "260", label: "Identifies priority patients/makes transport decision based upon calculated GCS" }
        ]
    }, {
        parent: 'history-taking',
        children: [
            { id: "280", label: "Obtains, or directs assistant to obtain, baseline vital signs" },
            { id: "290", label: "Attempts to obtain SAMPLE history" }
        ]
    }, {
        parent: 'head',
        children: [
            { id: "320", label: "Inspects mouth, nose, & assesses facial area" },
            { id: "330", label: "Inspects & palpates scalp & ears" },
            { id: "340", label: "Assesses eyes for PERRL" }
        ]
    }, {
        parent: 'neck',
        children: [
            { id: "360", label: "Checks position of trachea" },
            { id: "370", label: "Checks jugular veins" },
            { id: "380", label: "Palpates cervical spine" }
        ]
    }, {
        parent: 'chest',
        children: [
            { id: "400", label: "Inspects chest" },
            { id: "410", label: "Palpates chest" },
            { id: "420", label: "Auscultates chest" }
        ]
    }, {
        parent: 'abdomen-pelvis',
        children: [
            { id: "440", label: "Inspects & palpates abdomen" },
            { id: "450", label: "Assesses pelvis" },
            { id: "460", label: "Verbalizes assessment of genitalia/perineum as needed" }
        ]
    }, {
        parent: 'lower-extremities',
        children: [
            { id: "480", label: "Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" }
        ]
    }, {
        parent: 'upper-extremities',
        children: [
            { id: "520", label: "Inspects, palpates, & assesses motor, sensory, & distal circulatory functions" }
        ]
    }, {
        parent: "posterior-thorax-lumbar-buttocks",
        children: [
            { id: "540", label: "Inspects & palpates posterior thorax" },
            { id: "550", label: "Inspects & palpates lumbar & buttocks area" }
        ]
    }],
    criticalCriteria: [
        { id: "580", label: "Failure to initiate or call for transport of the patient within 10 minutes of time limit" },
        { id: "590", label: "Failure to take or verbalize body substance isolation precautions" },
        { id: "600", label: "Failure to determine scene safety" },
        { id: "610", label: "Stabilizes or directs assistant to stabilize cervical spine, as indicated" },
        { id: "620", label: "Failure to voice & ultimately provide high concentration of oxygen" },
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