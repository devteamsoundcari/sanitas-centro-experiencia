import React from "react";
import { VideoIcon } from "./VideoIcon.jsx";
import Loader from "./Loader.jsx";
import "../Styles/Button2.css";

const Button2 = ({
  variant,
  value,
  type,
  onClick,
  disabled,
  className,
  loader,
  loaderBtn,
}) => {
  let style = {
    fill: "#FFFFFF",
  };

  const typeVariant = () => {
    switch (variant) {
      case "primary":
        if (className) {
          return "primary-button " + className;
        }
        return "primary-button";

      case "secondary":
        if (className) {
          return "secondary-button " + className;
        }
        return "secondary-button";

      case "nb-primary":
        if (className) {
          return "no-border-primary " + className;
        }
        return "no-border-primary";

      case "iconButton":
        return "primary-button";

      case "loaderButton":
        return "blue-primary-btn";

      case "modalButton":
        return "blue-primary-btn";

      case "resendOtp":
        return "otp-modal-footer-link";

      case "modalGoBackBtn":
        return "secondary-button";

      default:
        if (className) {
          return "primary-button " + className;
        }
        return "primary-button";
    }
  };

  if (variant === "resendOtp") {
    return (
      <button
        id={value}
        className={typeVariant()}
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }

  if (variant === "modalGoBackBtn") {
    return (
      <button
        id={value}
        className={typeVariant()}
        type={type ? type : "button"}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </button>
    );
  }

  if (variant === "iconButton") {
    return (
      <button
        id={value + "-main-btn"}
        type="button"
        className={typeVariant()}
        onClick={onClick}
        name="icon-btn"
      >
        {value}
        {loader ? <Loader /> : <VideoIcon estilo={style} />}
      </button>
    );
  }

  if (variant === "loaderButton") {
    return (
      <button
        id={value + "-main-btn"}
        type="submit"
        className={typeVariant()}
        onClick={onClick}
        name="loader-btn"
      >
        {value}
        {loaderBtn ? <Loader /> : null}
      </button>
    );
  }

  return (
    <button
      id={value}
      className={typeVariant()}
      type={type ? type : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export { Button2 };
