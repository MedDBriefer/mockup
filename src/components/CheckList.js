import React, {useState} from "react";
import classnames from "classnames";

import CheckBox from "./CheckBox";

import {
  // Collapse,
  ListGroup, ListGroupItem } from "reactstrap"

const CheckList = ({ heading, steps, depth=2 }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <>
    <p className={`h${depth+1}`} onClick={() => {toggle()}}>{heading}</p>
    <ListGroup className={classnames("collapse", {"show": !collapsed})} key={`lg-${steps[0].id}`}>
      {steps.map((step) => (
        <ListGroupItem key={`lgi-${step.id}`}>
         {0 === step.children.length && (
              <CheckBox step={step} key={`cb-${step.id}`} />
          )}
          {step.children.length > 0 && (
              <CheckList heading={step.label} steps={step.children} depth={depth+1} key={`cl-${step.id}`} />
          )}
        </ListGroupItem>
      ))}
      </ListGroup>
    </>
  );
};

export default CheckList;
