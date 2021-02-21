import React from "react";

// import classnames from "classnames"

const CallOutIcon = ({ step, config }) => {

  // this totally works! although, you could...
  //
  // read up usage of the super handy classnames function.  I added a commented out import above
  // https://github.com/JedWatson/classnames#readme
  //
  // basically classnames let you move some of conditional stuff to determine what css classes to use within a function
  // call, rather than doing conditional stuff within the JSX
  // I often find I have lots of issues when trying to do conditional stuff in JSX, such as {config.foo && <Foo>} where
  // I seem to get parser errors, and have a hard time debugging, since everything *looks* right, but JSX has it's own
  // syntax which mixes html & javascript, I'm still trying to figure things out myself
  //
  // anyway, by defining some css class in src/styles.css such as:
  //
  // .my-css-class {
  //   color: grey;
  // }
  //
  // you could then get rid of the current return statement and replace it with the following compact representation
  //
  // return (
  //   <span
  //     className={classnames("callout-icon", "material-icons-outlined", {"my-css-class": config.isChecked(step.id)})}
  //   >
  //     message
  //   </span>
  // )
  //
  // of course, this component is quite simple, and thus the need for this is a bit contrived.
  // also readability/clarity of code is much more important than brevity/compactness,
  // so if this looks more confusing, pass on it, but you may find this technique helpful elsewhere, later on.

  return (config.isChecked(step.id))
          ?
          <span
              className="callout-icon material-icons-outlined" style={{color:'grey'}}
            >
              message
            </span>
          :
            <span
              className="callout-icon material-icons-outlined"
            >
              message
            </span>

}
export default CallOutIcon;
