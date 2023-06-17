import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={`form-group ${styles.container}`}>
      {label && <label>{label}</label>}
      <input type="text" className="form-control" {...props} />
    </div>
  );
}

export default InputControl;
