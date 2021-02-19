import React
, { useState }
 from "react";

import classnames from "classnames";

import CheckListItem from "./CheckListItem"

const isLeafNode = (step) => {
  return !step.children.length > 0
}

export default function CheckList({ scenario, steps, heading, depth = 3, first = false, config }){
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    console.log("toggling");
    setCollapsed(!collapsed);
  }
  return (
    <ul className={classnames({first:  first})}>
      {steps.map((step) => (
        <li key={`li-${step.id}`}>
          {isLeafNode(step)
          ?
            <CheckListItem
                scenario={scenario}
                step={step}
                config={config}
            />
          :
            <>
              <p
                className={`h${depth}`}
                onClick={() => toggle()}>
                  {step.label}
              </p>
              <CheckList
                  scenario={scenario}
                  steps={step.children}
                  depth={depth + 1}
                  config={config}
              />
            </>
          }
        </li>
      )
      )}
    </ul>
  )

}
