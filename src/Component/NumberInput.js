import React from "react";

export const Input = ({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
  element,
  row,
  className,
  disabled,
  required,
  pattern,
  maxLength,
  minLength,
  autoComplete,
  tabIndex
}) => {
  return (
    <div className="form-group">
      {label && (
        <label
          htmlFor="formGroupExampleInput"
          className={`${className} form-label text-muted`}
        >
          {label}{" "}
        </label>
      )}
      {element === "input" ? (
        <input
          type={type}
          className={`form-control simple`}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          required={required}
          pattern={pattern}
          maxLength={maxLength}
          minLength={minLength}
          autoComplete={autoComplete}
          tabIndex={tabIndex}
        />
      ) : (
        <textarea
          className="form-control simple"
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          rows={row || 3}
          defaultValue={""}
          required={required}
        />
      )}
    </div>
  );
};