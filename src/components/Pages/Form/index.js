import React from "react";

function Form({ children, className, ...rest }) {
  return (
    <form className={`${className}`} {...rest}>
      {children}
    </form>
  );
}

export default Form;
