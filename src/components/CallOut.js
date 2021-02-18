import React from "react";

const CallOut = ({ text, show }) => {

  if (show) {
    return <span className="callout">{text}</span>;
  } else {
      // return <i className="callout-icon fa fa-comment" />;
      return <span class="material-icons">message</span>
  }
}
export default CallOut;
