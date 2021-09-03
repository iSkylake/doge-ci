import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, className, disabled, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
