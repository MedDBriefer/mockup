import React
, { useState }
 from "react";

import {
  // Collapse,
  // ListGroup,
  // ListGroupItem
} from "reactstrap"

import classnames from "classnames";

import CheckBox from "./CheckBox";


export default function CheckList({ isChecked, toggleChecked, heading, steps, depth=3, first=false, showCallouts, showCalloutIcon}){
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <ul className={classnames({first:  first})}>
      {steps.map((step) => (
        <li key={`li-${step.id}`}>
          {!step.children.length > 0
           ?
           <CheckBox
            step={step}
            isChecked={isChecked}
            toggleChecked={toggleChecked}
            showCallouts={showCallouts}
            showCalloutIcon={showCalloutIcon}
            />
          :
            <>
            <p className={`h${depth}`} onClick={() => toggle()}>{step.label}</p>
            <CheckList
              isChecked={isChecked}
              toggleChecked={toggleChecked}
              steps={step.children}
              depth={depth+1}
              showCallouts={showCallouts}
              showCalloutIcon={showCalloutIcon}
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
