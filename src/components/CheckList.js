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


const CheckList = ({ stateGetter, stateToggler, heading, steps, depth=3, first=false }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <ul className={classnames(first ? "first" : "")}>
      {steps.map((step) => (
        <li key={`li-${step.id}`}>
          {!step.children.length > 0
           ?
           <CheckBox
            step={step}
            stateGetter={stateGetter}
            stateToggler={stateToggler}
            />
          :
            <>
            <p className={`h${depth}`} onClick={() => toggle()}>{step.label}</p>
            <CheckList
              stateGetter={stateGetter}
              stateToggler={stateToggler}
              steps={step.children}
              depth={depth+1}
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
};

export default CheckList;
