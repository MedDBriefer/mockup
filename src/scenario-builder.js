function annotateStepsTree(steps, callouts) {
  console.log(steps);
  return steps.map((step) => {
      if (!step.children) {
      let callout = callouts.find((ca) => ca.step === step.id);
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
    steps: annotateStepsTree(outline, callouts),
    items,
    criticalCriteria
  };
  return newScen;
};
