import { useContext } from "react";
import { SanitasEmpresarialContext } from "../context/index";
import { OutOfTime } from "../page/OutOfTime.jsx";
import { Form } from "../molecules/Form.jsx";
import Footer from "../molecules/Footer.jsx";
import Logo from "../assets/images/logo_eps_sanitas.png";
import PrincipalImage from "../assets/images/mainImg.jpg";
import "../Styles/SanitasEmpresarial.css";

const SanitasEmpresarial = () => {
  const { actualDay, actualHour, isHoliday } = useContext(
    SanitasEmpresarialContext
  );

  return (
    <div className="container">
      <figure className="logo-cont">
        <img src={Logo} alt="Logo Eps Sanitas" className="logo-eps-sanitas" />
      </figure>
      <figure className="main-img-cont">
        <img
          src={PrincipalImage}
          alt="Personas interactuando con el computador"
          className="main-image"
        />
      </figure>
      {actualDay === 0 /*No olvidar descomentar esta línea en paso a prod*/ ||
      (actualDay === 6 && actualHour < 8) ||
      (actualDay === 6 && actualHour >= 14) ||
      (actualDay !== 6 && actualHour < 8) ||
      (actualDay !== 6 && actualHour >= 23) ||
      //ANTES DE PASAR A PRODUCCIÓN VOLVER A 18
      isHoliday === true ? (
        <div className="ot-cont">
          <OutOfTime />
          <Footer />
        </div>
      ) : (
        <div className="form-container">
          <Form />
          <Footer />
        </div>
      )}
    </div>
  );
};

export { SanitasEmpresarial };
