import React from "react";
export const Input = ({
  value,
  placeholder,
  type = "text",
  onChange,
  onkeyup,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onkeyup}
    />
  );
};
