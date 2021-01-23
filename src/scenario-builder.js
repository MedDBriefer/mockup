function annotateStepsTree(steps, callouts) {
  return steps.map((step) => {
    if (!step.children.length) {
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
  let { info, steps, callouts } = scen;
  let newScen = {
    info,
    callouts,
    steps: annotateStepsTree(steps, callouts),
  };
  return newScen;
};
