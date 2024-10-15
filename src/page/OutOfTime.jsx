import React from "react";
import Header from "../molecules/Header";
import { AttentionSchedule } from "../molecules/AttentionSchedule.jsx";
import { Paragraph } from "../atoms/Parragraph.jsx";

import otImage from "../assets/images/ilustracion-medico.svg";

import "../Styles/OutOfTime.css";

const OutOfTime = () => {
  return (
    <>
      <div className="out-of-time">
        <Header type={1} text={"¡Bienvenidos!"} />
        <figure className="ot-image-cont">
          <img
            src={otImage}
            alt="Ilustración de un médico"
            className="ot-image"
          />
        </figure>
        <Paragraph
          text={`Gracias por contactarnos, \nen este momento no podemos atenderte`}
          className={"ot-paragraph"}
          linesNumber={2}
        />
        <AttentionSchedule />
      </div>
    </>
  );
};

export { OutOfTime };
