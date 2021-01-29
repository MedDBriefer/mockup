import React
, { useState }
 from "react";

import {
  // Collapse,
  ListGroup,
  ListGroupItem
} from "reactstrap"

import classnames from "classnames";

import CheckBox from "./CheckBox";


const CheckList = ({ stateGetter, stateToggler, heading, steps, depth=2 }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  // return (
  //   <ul>
  //     {steps.map((step) => (
  //       <li key={`li-${step.id}`}>
  //         <CheckBox
  //           step={step}
  //           stateGetter={stateGetter}
  //           stateToggler={stateToggler}
  //         />
  //         {step.children &&
  //           <CheckList
  //             stateGetter={stateGetter}
  //             stateToggler={stateToggler}
  //             steps={step.children}
  //             depth={depth+1}
  //           />
  //         }
  //       </li>
  //     )
  //     )}
  //   </ul>
  // )
  return (
    <>
    <ListGroup
      className={classnames("collapse", {"show": !collapsed})}
      key={`lg-${steps[0].id}`}
    >
      {steps.map((step) => (
        <ListGroupItem key={`lgi-${step.id}`}>
        {
          !step.children
          ?
            <CheckBox
              key={`cb-${step.id}`}
              step={step}
              stateGetter={stateGetter}
              stateToggler={stateToggler}
            />
          :
            <>
            <p
              className={`h${depth+1}`}
              onClick={() => {toggle()}}>
                {step.label}
            </p>
            <CheckList
              key={`cl-${step.id}`}
              stateGetter={stateGetter}
              stateToggler={stateToggler}
              // heading={step.label}
              steps={step.children}
              depth={depth+1}
            />
            </>
        }
        </ListGroupItem>
      ))}
      </ListGroup>
    </>
  );
};

export default CheckList;
