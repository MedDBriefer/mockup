import React from "react";

const CallOut = ({ text, ste }) => {
  switch (ste) {
    case "HIDDEN":
      return <i className="callout-icon fa fa-comment" />;
    default:
      return <span className="callout">{text}</span>;
  }
};
export default CallOut;
