import React
, { useState }
 from "react";

import {
  // Collapse,
  // ListGroup,
  // ListGroupItem
} from "reactstrap"

import classnames from "classnames";

// import CheckBox from "./CheckBox";
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
            // <CheckBox
            //     step={step}
            //     config={config}
            //   />
            <CheckListItem
                scenario={scenario}
                item={step}
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
  // console.log(steps)
  // return (
  //   <>
  //   <ListGroup
  //     className={classnames("collapse", {"show": !collapsed})}
  //     key={`lg-${steps[0].id}`}
  //   >
  //     {steps.map((step) => (
  //       <ListGroupItem key={`lgi-${step.id}`}>
  //       {
  //         step.children && step.children.length > 0
  //         ?
  //           <>
  //           <p
  //             className={`h${depth}`}
  //             onClick={() => {toggle()}}>
  //               {step.label}
  //           </p>
  //           <CheckList
  //             key={`cl-${step.id}`}
  //             stateGetter={stateGetter}
  //             stateToggler={stateToggler}
  //             // heading={step.label}
  //             steps={step.children}
  //             depth={depth+1}
  //           />
  //           </>
  //       :
  //         <CheckBox
  //           key={`cb-${step.id}`}
  //           step={step}
  //           stateGetter={stateGetter}
  //           stateToggler={stateToggler}
  //         />
  //       }
  //       </ListGroupItem>
  //     ))}
  //     </ListGroup>
  //   </>
  // );
}
