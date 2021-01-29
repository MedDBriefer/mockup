
function annotateItems(items, callouts) {
  return items;
  // eslint-disable-next-line
  for (let callout of callouts) {
    // eslint-disable-next-line
    for (const [heading, children] of Object.entries(items)) {
      console.log(heading)
    }
  }
}

// eslint-disable-next-line
function annotateStepsTree(steps, callouts) {
  console.log(steps);
  console.log(callouts)
  return steps.map((step) => {
      if (!step.children) {
      let callout = callouts.find((ca) => ca.step === step.id);
      // let callout = callouts[]
      if (callout) {
        step.callout = callout.id;
      }
    } else {
      step.children = annotateStepsTree(step.children, callouts);
    }
    return step;
  });
}

export const scenarioBuilder = (scen) => {
  let { info, callouts, outline, items, criticalCriteria} = scen;
  // console.log(info)
  // console.log(callouts)
  // console.log(outline)
  // items
  let newScen = {
    info,
    callouts,
    steps: outline,
    items: annotateItems(items, callouts),
    criticalCriteria
  };
  return newScen;
};
