// eslint-disable-next-line
function annotateItems(items, callouts) {

  for (const { stepId, calloutLabel, calloutText } of callouts) {
    // console.log(stepId, calloutLabel, calloutText)
    for (const key of Object.keys(items)) {
      let children = items[key].map((item) =>
        item.id === stepId
        ?  {...item, calloutLabel: calloutLabel, callout: calloutText}
        : item
      )
      items[key] = children
    }
  }
  return items;
}

function addEmptyChildren(array) {
  return array.map((item) =>
    !item.children
    ? {...item, children: []}
    : item
  )
}

// eslint-disable-next-line
function annotateStepsTree(steps, items) {
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
        step.children = annotateStepsTree(step.children, items);
    }
    return step;
  });
}

export const scenarioBuilder = (scen) => {
  let { info, callouts, outline, items, criticalCriteria, initialVitalSigns, SAMPLE, reassessmentVitals} = scen;
  // console.log(info)
  // console.log(callouts)
  // console.log(outline)
  items = annotateItems(items, callouts)
  let newScen = {
    info,
    callouts,
    steps: annotateStepsTree(outline, items),
    items,
    criticalCriteria,
    initialVitalSigns,
    SAMPLE,
    reassessmentVitals
  };
  return newScen;
};
