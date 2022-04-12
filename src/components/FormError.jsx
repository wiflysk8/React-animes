import React from "react";
import "./FormError.css";

const FormError = ({ error }) => {
  return (
    <div>
      {error && (
        <>{error.type === "required" && <p className="c-error">This field is required !</p>}</>
      )}
    </div>
  );
};

export default FormError;
