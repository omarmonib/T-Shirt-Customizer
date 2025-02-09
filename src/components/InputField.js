import React from "react";

const InputField = ({ type, placeholder, value, onChange, refProp }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={refProp}
      autoComplete="off"
    />
  );
};

export default InputField;
