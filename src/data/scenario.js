const data = require("./trauma2.js");
// console.log(steps);

console.log(data);
export const scenario = Object.assign({}, data, {
  info: {
    name: "PHTC M2CA",
    dispatchInfo: "You and your partners work for a transporting EMS agency and have been dispatched to a residential housing development for a lawn mower accident. It is 1330 hr on a Saturday afternoon and the temperature is 90°F (32°C). You are 5 minutes away from a level III trauma center and 25 minutes from a level I trauma center.",
    sceneAssessment: "You arrive at a suburban yard where you observe a large riding lawn mower on its side at the bottom of an 8-ft (2.5-m) hill. A bystander is holding a towel to the patient’s right lower leg. As you approach the patient, the bystander tells you that he saw the mower tip over while the patient was driving it.",
  },
  callouts: [{
      id: "callout-10",
      step: "40",
      message: "scene is safe"
    }, {
      id: "callout-20",
      step: "50",
      message: "Patient experienced a rollover with a riding lawn mower"
    }, {
      id: "callout-30",
      step: "60",
      message: "1 patient"
    }
  ],
});
