import React from "react";
import "../Styles/Input.css";

const Input = ({
  type,
  label,
  placeHolder,
  options,
  reference,
  name,
  accept,
  id,
  value,
  onChange,
  checked,
  setChecked,
  className,
  docTypeError,
  numberDocError,
  serviceTypeError,
  children,
  disabled,
  onBlur,
  onKeyDown,
  dataValue,
}) => {
  if (!id) {
    id = label
      .toLowerCase()
      .replace(/ /g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  if (!value) {
    value = "";
  }

  if (!name) {
    name = "default-input";
  }

  if (!label) {
    label = "Default label";
  } /*else {
    var name = label
      .toLowerCase()
      .replace(/ /g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }*/

  const handleType = (type) => {
    if (type === "text" || type === "number" || type === "email") {
      return (
        <input
          type={type}
          placeholder={placeHolder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={className}
          disabled={disabled}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          required
        />
      );
    }
    if (type === "select") {
      return (
        <select
          name={name}
          id={id}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
          data-value={dataValue}
        >
          {label}
          <option value="">Selecciona una opción</option>
          {options.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      );
    }
    if (type === "checkbox") {
      return (
        <input
          type={type}
          onClick={() => setChecked(!checked)}
          name={name}
          onChange={onChange}
        />
      );
    }
    if (type === "cellphone") {
      return (
        <input
          type="text"
          onChange={onChange}
          placeholder={placeHolder}
          id={id}
          name={name}
          inputMode="numeric"
          className={className}
          pattern="/^[0-9]*$/"
          maxLength={10}
        />
      );
    }
    if (type === "file") {
      return (
        <>
          <span className="file-input-appeareance">{children}</span>
          <input
            type="file"
            onChange={onChange}
            placeholder={placeHolder}
            id={id}
            name={name}
            accept={accept}
            className={className}
          />
        </>
      );
    }
  };

  if (type === "text-disabled") {
    return (
      <>
        <label htmlFor="name-disabled">Nombre completo:</label>
        <input
          type="text"
          placeholder={placeHolder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={className}
          disabled
        />
      </>
    );
  }

  if (type === "otp") {
    return (
      <div className="otp-input-box">
        <input
          type="text"
          className={`otp-input-number ${className ? className : ""}`}
          maxLength={1}
          ref={reference}
          onChange={onChange}
          placeholder="-"
          id={id}
          name={name}
          pattern="/^[0-9]*$/"
        />
      </div>
    );
  }

  if (type === "colsanitasRadioBtn") {
    return (
      <label>
        <input
          type="radio"
          name={name ? name : "colsanitas-radio-btn"}
          id="colsanitas-radio-btn"
          className="colsanitas-radio-btn"
          onChange={onChange}
          checked={checked}
          value={value}
        />
        <p className="colsanitas-radio-btn-label">{label}</p>
      </label>
    );
  }

  if (type === "submit") {
    return (
      <input
        type="submit"
        className="colsanitas-submit"
        id="colsanitas-submit"
        value={label}
      />
    );
  }

  return (
    <div className={className ? `inputBox ${className}` : "inputBox"}>
      <label
        className={
          docTypeError || numberDocError || serviceTypeError
            ? "errorInput"
            : null
        }
      >
        {label}
        <span className="mandatory">*</span>
      </label>
      {handleType(type)}
    </div>
  );
};

export { Input };
