import { steps } from "./trauma";

export const scenario = {
  steps: steps,
  callouts: [
    { id: "callout-10", step: "step-1.1", message: "call out for step 1.1" },
    { id: "callout-20", step: "step-1.2", message: "call out for step 1.2" },
    {
      id: "callout-30",
      step: "step-2.1.1",
      message: "call out for step 2.1.1"
    },
    {
      id: "callout-40",
      step: "step-2.1.2",
      message: "call out for step 2.1.2"
    },
    { id: "callout-50", step: "step-2.2", message: "call out for step 2.2" },
    { id: "callout-60", step: "step-3", message: "call out for step 3" }
  ]
};
