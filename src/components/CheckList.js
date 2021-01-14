import React from "react";

import CheckBox from "./CheckBox";

const CheckList = ({ steps, first }) => {
  return (
    <>
      {steps.map((step) => (
        <ul className={first ? "first" : ""}>
          {0 === step.children.length && (
            <CheckBox step={step} key={`cb-${step.id}`} />
          )}
          {step.children.length > 0 && (
            <>
              <li key={`li-${step.id}`}>{step.label}</li>
              <CheckList steps={step.children} key={`cl-${step.id}`} />
            </>
          )}
        </ul>
      ))}
    </>
  );
};

export default CheckList;
