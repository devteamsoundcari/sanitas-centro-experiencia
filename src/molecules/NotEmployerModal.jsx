import React, { useContext } from "react";
import { SanitasEmpresarialContext } from "../context";
import { Modal } from "./Modal";
import InfoCircle from "../assets/images/info-circle.svg";
import { Button2 } from "../atoms/Button2";
import { Paragraph } from "../atoms/Parragraph";
import "../Styles/NotEmployerModal.css";

const NotEmployerModal = () => {
  const { setShowNotEmployerModal } = useContext(SanitasEmpresarialContext);

  return (
    <Modal className={"overlay"}>
      <div className="base-modal">
        <div className="modal-header">
          <img src={InfoCircle} alt="símbolo informativo" />
          <h2>Empleador ingresado no existe</h2>
        </div>
        <div className="underline"></div>
        <Paragraph
          text={
            "Apreciado empleador, no tenemos registro de sus datos en \nnuestro sistema de información, para registrarse debe \ndirigirse a:"
          }
          linesNumber={3}
        />
        <a
          className="modal-link"
          href="www.epssanitas.com/oficinavirtualempleadores"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.epssanitas.com/oficinavirtualempleadores
        </a>
        <div className="underline"></div>

        <div className="modal-footer">
          <Button2
            variant={"nb-primary"}
            value={"Entendido"}
            className={"modal-btn-send"}
            onClick={() => setShowNotEmployerModal(false)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default NotEmployerModal;
