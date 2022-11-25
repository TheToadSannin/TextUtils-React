import React from "react";

function Alert(props) {
  const capti = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && ( //here the first statement will be evaluated if the props.alert is null then nothing wil happen if props.alert isnot null then the following code eill get execute along with the arguments
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capti(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;
