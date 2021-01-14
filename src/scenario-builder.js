function annotateStepsTree(steps, callouts) {
  return steps.map((step) => {
    if (!step.children.length) {
      let callout = callouts.find((ca) => ca.step === step.id);
      step.callout = callout.id;
      // return step;
    } else {
      step.children = annotateStepsTree(step.children, callouts);
    }
    return step;
  });
}

export const scenarioBuilder = (scen) => {
  let { steps, callouts } = scen;
  let newScen = {
    steps: annotateStepsTree(steps, callouts),
    callouts
  };
  return newScen;
};
