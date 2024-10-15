import React from "react";
import "../Styles/Loader.css";

const Loader = ({ className }) => {
  return <span className={className ? className : "loader"}></span>;
};

export default Loader;
