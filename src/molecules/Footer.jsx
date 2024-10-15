import React from "react";
import { InfoIcon } from "../atoms/InfoIcon.jsx";
import pc from "../assets/images/pc.svg";
import cellphone from "../assets/images/Cellphone.svg";
import AnaMaria from "../assets/images/AnaMaria.svg";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-cont">
      <div className="funcionalidades-cont">
        <p className="funcionalidades">
          Conoce todas las funcionalidades
          <a
            href="https://www.epssanitas.com/usuarios/web/nuevo-portal-eps/canales-de-acceso#gsc.tab=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aquí
          </a>
        </p>
      </div>
      <div className="hyperlinks">
        <div className="main-cont">
          <InfoIcon
            name="pc"
            image={pc}
            imageText="Icono computador"
            text="Oficina virtual"
            url="https://www.epssanitas.com/usuarios/web/nuevo-portal-eps/inicio?p_p_id=58&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&saveLastPath=false&_58_struts_action=%2Flogin%2Flogin#gsc.tab=0"
          />

          <InfoIcon
            name="cellphone"
            image={cellphone}
            imageText="Icono celular"
            text="App EPS Sanitas"
            url="https://play.google.com/store/apps/details?id=colsanitas.foonkiemonkey.com.co.eps&hl=es_CO&gl=US&pli=1"
          />
          {/* Recordar Cambiar la Imagen del Kiosko por la del Bot */}
          <InfoIcon
            name="chatbot"
            image={AnaMaria}
            text="Asistente Virtual Ana María"
            url="https://api.whatsapp.com/send/?phone=573202550525&text&type=phone_number&app_absent=0"
          />
        </div>
      </div>
      <div className="copyright-cont">
        <p className="copyright">© Copyright 2023 Colsanitas</p>
      </div>
    </footer>
  );
};

export default Footer;
