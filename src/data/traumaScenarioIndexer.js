// the scenarios entered via forms are merely a set of fields and values and
// aren't organized as steps.  the purpose of this file is to define the
// structure of a trauma scenario, as
// * a tree of steps (and weave the scenario-speific info into them)
// * various other mappings of things so they can be looked up by id,  more details later


const ASSESS = "assessment";
const INTERV = "intervention";
const REQURED = "required-action"

const CHECK = "check-box";
const RADIO = "radio-button";
const CRIT_FAIL = "critical-criteria";
const HEADING = "heading";

const TRAUMA_SCENARIO_STRUCTURE = {
    nodeLabels: {
        "bsi":                              "BSI",
        "scene-size-up":                    "Scene Size-Up",
        "initial-assessment-resuscitation": "Primary Survey/Resuscitation",
        "general-assessment":               "General Impression and LOC",
        "airway":                           "Airway",
        "breathing":                        "Breathing",
        "circulation":                      "Circulation",
        "transport-decision":               "Transport Decision",
        "history-taking":                   "History Taking",
        "detailed-physical-examination":    "Secondary Assessment",
        "head":                             "Head",
        "neck":                             "Neck**",
        "chest":                            "Chest**",
        "abdomen-pelvis":                   "Abdomen/pelvis**",
        "lower-extremities":                "Lower extremities**",
        "upper-extremities":                "Upper extremities",
        "posterior-thorax-lumbar-buttocks": "Posterior thorax, lumbar, and buttocks**",
        "misc":                             "Ongoing management and reassessment",
        "critical-criteria":                "Critical Criteria"
    },
    tree: [
        { id: "bsi",           type: HEADING },
        { id: "scene-size-up", type: HEADING },
        {
            id: "initial-assessment-resuscitation",
            type: HEADING,
            children: [
                { id: 'general-assessment', type: HEADING },
                { id: "airway",             type: HEADING },
                { id: "breathing",          type: HEADING },
                { id: "circulation",        type: HEADING },
                { id: "transport-decision", type: HEADING }
            ]
        },
        { id: "history-taking", type: HEADING },
        {
            id: "detailed-physical-examination",
            type: HEADING,
            children: [
                { id: "head",                             type: HEADING },
                { id: "neck",                             type: HEADING },
                { id: "chest",                            type: HEADING },
                { id: "abdomen-pelvis",                   type: HEADING },
                { id: "lower-extremities",                type: HEADING },
                { id: "upper-extremities",                type: HEADING },
                { id: "posterior-thorax-lumbar-buttocks", type: HEADING },
                { id: "misc",                             type: HEADING }
            ]
        },
        { id: "critical-criteria", type: HEADING }
    ],
    leaves: {
        'bsi': [
            { id: "apply-ppe",  type: REQURED, label: "Takes or verbalizes appropriate PPE precautions." } // crit criteria 590
        ],
        'scene-size-up': [
            { id: "assess-scene-safety",     type: ASSESS, label: "Determines the scene/situation is safe" },
            { id: "assess-injury-mechanism", type: ASSESS, label: "Determines the mechanism of injury/nature of illness" },
            { id: "assess-num-patients",     type: ASSESS, label: "Determines the number of patients" },
            { id: "request-addl-help",       type: ASSESS, label: "Requests additional help if necessary" },
            { id: "stabilizes-spine",        type: INTERV, label: "Stabilizes or directs assistant to stabilize the cervical spine, as indicated" } // crit criteria 610
        ],
        'general-assessment': [
            { id: "verbalizes-patient-condition", type: ASSESS, label: "Verbalizes general impression of the patient" },
            { id: "determines-loc",               type: ASSESS, label: "Determines responsiveness/level of consciousness" },
            { id: "determines-life-threats",      type: ASSESS, label: "Determines chief complaint/apparent life-threats" }
        ],
        'airway': [
            { id: "assess-airway",   type: ASSESS, label: "Opens and assesses airway" },
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
            { id: "assess-skin",      type: ASSESS, label: "Assess skin [either skin color, temperature, or condition]" },
            { id: "assess-bleeding",  type: ASSESS, label: "Assesses for major bleeding" },
            { id: "control-bleeding", type: INTERV, label: "Controls major bleeding if present" },
            { id: "control-shock",    type: INTERV, label: "Initiates shock management as indicated" } // crit criteria 640
        ],
        'transport-decision': [
            { id: "transport-priority", type: REQURED, label: "Identifies priority patients/makes transport decision based upon calculated GCS" } // crit criteria 650
        ],
        'history-taking': [
            { id: "obtains-vitals", type: ASSESS, label: "Obtains, or directs assistant to obtain, baseline vital signs" }, // point to vitals
            { id: "attempt-obtain-sample", type: ASSESS, label: "Attempts to obtain SAMPLE history" } // point to SAMPLE
        ],
        'head': [
            { id: "assess-mouth-nose-face", type: ASSESS, label: "Inspects mouth**, nose**, and assesses facial area" },
            { id: "assess-scape-ears",      type: ASSESS, label: "Inspects and palpates scalp and ears" },
            { id: "assess-perrl",           type: ASSESS, label: "Assesses eyes for PERRL**" }
        ],
        'neck': [
            { id: "assess-trachea", type: ASSESS, label: "Checks position of trachea" },
            { id: "assess-jugular", type: ASSESS, label: "Checks jugular veins" },
            { id: "assess-spine",   type: ASSESS, label: "Palpates cervical spine" }
        ],
        'chest': [
            { id: "inspects-chest",   type: ASSESS, label: "Inspects chest" },
            { id: "palpate-chest",    type: ASSESS, label: "Palpates chest" },
            { id: "auscultate-chest", type: ASSESS, label: "Auscultates chest" }
        ],
        'abdomen-pelvis': [
            { id: "assess-abdomen",   type: ASSESS, label: "Inspects and palpates abdomen" },
            { id: "assess-pelvis",    type: ASSESS, label: "Assesses pelvis" },
            { id: "assess-genitalia", type: ASSESS, label: "Verbalizes assessment of genitalia/perineum as needed" }
        ],
        'lower-extremities': [
            { id: "assess-right-leg", type: ASSESS, label: "Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on right lower extremity" },
            { id: "assess-left-leg",  type: ASSESS, label: "Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on left lower extremity" }
        ],
        'upper-extremities': [
            { id: "assess-right-arm", type: ASSESS, label: "Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on right upper extremity" },
            { id: "assess-left-arm",  type: ASSESS, label: "Inspects, palpates, and assesses motor, sensory, and distal circulatory functions on left upper extremity" }
        ],
        "posterior-thorax-lumbar-buttocks": [
            { id: "assess-posterior-thorax", type: ASSESS, label: "Inspects and palpates posterior thorax" },
            { id: "assess-lumbar-buttocks",  type: ASSESS, label: "Inspects and palpates lumbar and buttocks area" }
        ],
        "misc": [
            { id: "manage-secondary-injuries", type: REQURED, label: "Manages secondary injuries and wounds appropriately" },
            { id: "performs-ongoing-assessment", type: REQURED, label: "Performs ongoing assessment" }
        ],
        "critical-criteria": [] // these need to all be woven in by the scenario builder, as what goes here is depending on some options
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
        // we might be able to auto-check based off of timer expiring
        { id: "580", type: CRIT_FAIL, parent: "transport-decision", label: "Failure to initiate or call for transport of the patient within 10 minute time limit" },
        // true if 'apply-ppe' not checked?
        { id: "590", type: CRIT_FAIL, parent: "bsi",                label: "Failure to take or verbalize appropriate PPE precautions" },
        // true if 'assess-scene-safety' not checked?
        { id: "600", type: CRIT_FAIL, parent: "scene-size-up",      label: "Failure to determine scene safety" },
        // true if 'stabilize-spine' not checked AND indicated?
        { id: "610", type: CRIT_FAIL, parent: "scene-size-up",      label: "Failure to assess for and provide spinal protection when indicated" },
        { id: "620", type: CRIT_FAIL, parent: "breathing",          label: "Failure to voice and ultimately provide high concentration of oxygen" },
        // true if ANY of the ventiliation
        { id: "630", type: CRIT_FAIL, parent: "breathing",          label: "Failure to assess/provide adequate ventilation" },
        // not giving this one a parent, as it belongs to a heading whose only other children are other headings, making it
        // problematic in the navigation/details layout - readdress this if we don't go with that
        { id: "640", type: CRIT_FAIL,                               label: "Failure to find or appropriately manage problems associated with airway, breathing, hemorrhage or shock [hypoperfusion]" },
        // combine below with 580?
        { id: "650", type: CRIT_FAIL, parent: "transport-decision", label: "Failure to differentiate patient's need for immediate transportation versus continued assessment/treatment at the scene" },
        { id: "660", type: CRIT_FAIL,                               label: "Does other detailed history or physical exam before assessing/treating threats to airway, breathing, and circulation" },
        { id: "680", type: CRIT_FAIL,                               label: "Failure to manage the patient as a competent EMT" },
        { id: "670", type: CRIT_FAIL,                               label: "Exhibits unacceptable affect with patient or other personnel" },
        { id: "690", type: CRIT_FAIL,                               label: "Uses or orders a dangerous or inappropriate intervention" }
    ],
    interventionForms: {
        // Each selected intervention should, by default, also include an 'other / incorrect intervention' option
        // Each object title matches checklist item id for easier mapping
        // TODO: may have to assign type to individual steps to account for medical scenarios (or for a mix or radios/checks)
        "stabilizes-spine": {
            id: "c-spine-interventions",
            type: CHECK,
            interventions: [
                { id: "c-spine-intervention-10", label: "Holds manual stabilization" },
                { id: "c-spine-intervention-20", label: "Applies cervical collar" }
            ],
            criticalCriteria: []
        },
        "manages-airway": {
            id: "airway-interventions",
            type: RADIO,
            interventions: [
                { id: "airway-intervention-10", label: "Inserts OPA" },
                { id: "airway-intervention-20", label: "Inserts NPA" },
            ],
            criticalCriteria: []
        },
        "assess-ventilation": {
            id: "ventilation-interventions",
            type: RADIO,
            interventions: [
                { id: "ventilation-intervention-10", label: "Endotracheal intubation" },
                { id: "ventilation-intervention-20", label: "Bag-valve mask" },
            ],
            criticalCriteria: []
        },
        "control-bleeding": {
            id: "bleeding-interventions",
            type: RADIO,
            interventions: [
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
            interventions: [
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
        "transport-priority": {
            id: "transport-interventions",
            type: RADIO,
            interventions: [
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



function addAssessmentFindings(assessmentFindings) {
    return Object.entries(assessmentFindings).map(([key, value]) => {
        const found = TRAUMA_SCENARIO_STRUCTURE.callouts.find((ca) => ca.stepId === key)
        if (found) {
            found.calloutText = value;
        } else {
            console.log("ERROR key not found!", key);
            process.exit(1)
        }
        return found;
    })
}


// eslint-disable-next-line
function addAssessmentFindingsToLeaves(items, callouts) {

    for (const { stepId, calloutLabel, calloutText } of callouts) {
        // console.log(stepId, calloutLabel, calloutText)
        for (const key of Object.keys(items)) {
            let children = items[key].map((item) =>
                item.id === stepId
                    ? { ...item, calloutLabel: calloutLabel, callout: calloutText }
                    : item
            )
            items[key] = children
        }
    }
    return items;
}

function addInterventionCategorizationsToLeaves(items, interventions) {
    for (const [stepId, value] of Object.entries(interventions)) {
        for (const key of Object.keys(items)) {
            let children = items[key].map((item) =>
                item.id === stepId
                    ? {...item, intervention: value}
                    : item
            )
            items[key] = children
        }
    }
}

function addCriticalCriteriaToLeaves(items, criticalCriteria) {
    // add all to the critical criteria step, components can elect not to display
    // ones with parents
    criticalCriteria.forEach(element => {
        items['critical-criteria'].push(element)
    });
    // append specific ones to the approriate 'items' based off their parent
    // (if present)

    const critsWithParents = criticalCriteria.filter((crit) => !!crit.parent)
    for (const heading of Object.keys(items)) {
        // console.log("\n", heading)
        for (const crit of critsWithParents.filter((crit) => crit.parent === heading)) {
            items[heading].push(crit)
        }
    }
    // process.exit(0)
}



function addEmptyChildren(array) {
    return array.map((item) =>
        !item.children
            ? { ...item, children: [] }
            : item
    )
}

function addNodeLabelsToBranches(steps, labelsMap) {
    return steps.map((step) => {
        let found = (step.id in labelsMap) ? labelsMap[step.id] : false;
        if (!found) {
            console.error(`label for ${step.id} not found!`)
        } else {
            step.label = found;
        }
        if (step.children) {
            step.children = addNodeLabelsToBranches(step.children, labelsMap)
        }
        return step
    })
}
    // eslint-disable-next-line
 function addLeavesToBranches(steps, items) {
    // console.log(steps);
    // console.log(items)
    return steps.map((step) => {
        if (!step.children) {
            step.children = (step.id in items) ? addEmptyChildren(items[step.id]) : []
            // let callout = callouts.find((ca) => ca.step === step.id);
            // // let callout = callouts[]
            // if (callout) {
            //   step.callout = callout.id;
            // }
        } else {
            step.children = addLeavesToBranches(step.children, items);
        }
        return step;
    });
}

function deepCopy(object) {
    return JSON.parse(JSON.stringify(object))
}

const traumaScenarioIndexer = (scenario) => {
    const data = {
        id: scenario.id,
        scenarioType: scenario.scenarioType,
        info: scenario.info,
        initialVitalSigns: scenario.initialVitalSigns,
        SAMPLE: scenario.SAMPLE,
        reassessmentVitals: scenario.reassessmentVitals,
        interventionForms: deepCopy(TRAUMA_SCENARIO_STRUCTURE.interventionForms),
        criticalCriteria: deepCopy(TRAUMA_SCENARIO_STRUCTURE.criticalCriteria),
        nodeLabels: deepCopy(TRAUMA_SCENARIO_STRUCTURE.nodeLabels),
        items: deepCopy(TRAUMA_SCENARIO_STRUCTURE.leaves),
    }
    // callouts are defined separately, as 1. it's easier to access them from the
    // right pane this way, and 2. it's easier to modify their labels if they're listed
    // sequentially, rather than in the tree or leaves structures
    // also, while we've changed the labels to 'Assessment Findings', I'm keeping things
    // as callouts now, so we don't have to change all of the props, code, etc
    data.callouts = addAssessmentFindings(scenario.assessmentFindings)
    addAssessmentFindingsToLeaves(data.items, data.callouts)
    addCriticalCriteriaToLeaves(data.items, TRAUMA_SCENARIO_STRUCTURE.criticalCriteria)
    addInterventionCategorizationsToLeaves(data.items, scenario.interventions)
    const steps = addNodeLabelsToBranches(TRAUMA_SCENARIO_STRUCTURE.tree, TRAUMA_SCENARIO_STRUCTURE.nodeLabels)
    data.steps = addLeavesToBranches(steps, data.items)

    return data;
}


// export const scenarioBuilder = (scen) => {
//     let { info, callouts, outline, items, criticalCriteria, initialVitalSigns, SAMPLE, reassessmentVitals } = scen;
//     items = annotateItems(items, callouts, criticalCriteria)
//     let newScen = {
//         info,
//         callouts,
//         steps: annotateStepsTree(outline, items),
//         items,
//         criticalCriteria,
//         initialVitalSigns,
//         SAMPLE,
//         reassessmentVitals
//     };
//     return newScen;
// };

// }

export default traumaScenarioIndexer
