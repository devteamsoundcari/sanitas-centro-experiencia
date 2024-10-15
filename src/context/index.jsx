import React from "react";
import { HolidayCalculator } from "./HolidayCalculator";
import { Client } from "./client.js";
import { departamentosColombia } from "./Colombia.js";

const SanitasEmpresarialContext = React.createContext();

const SanitasEmpresarialProvider = ({ children }) => {
  /** Estos son los estados base */
  const [actualDate, setActualDate] = React.useState(new Date());
  const holidayCalc = new HolidayCalculator();
  const client = new Client();
  const [docType, setDocType] = React.useState("");
  const [docTypeError, setDocTypeError] = React.useState(false);
  const [docTypeDisabled, setDocTypeDisabled] = React.useState(false);
  const [docNumber, setDocNumber] = React.useState("");
  const [docNumError, setDocNumError] = React.useState(false);
  const [cellPhone, setCellPhone] = React.useState("");
  const [cellPhoneError, setCellPhoneError] = React.useState("");
  const [enterpriseName, setEnterpriseName] = React.useState("");
  const [enterpriseNameError, setEnterpriseNameError] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [provincesList, setProvincesList] = React.useState([]);
  const [province, setProvince] = React.useState(""); // Estado para departamento en Colombia
  const [provName, setProvName] = React.useState(""); // Estado para el nombre del departamento en Colombia
  const [provinceError, setProvinceError] = React.useState(""); // Estado para departamento en Colombia
  const [citiesList, setCitiesList] = React.useState([]); // Estado para ciudades en Colombia
  const [city, setCity] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [cityError, setCityError] = React.useState("");
  const [recaptchaError, setRecaptchaError] = React.useState(false);
  const [showInputs, setShowInputs] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checkedError, setCheckedError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [formLoader, setFormLoader] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [url] = React.useState(
    "https://qa.cariai.com/epssanitasempresa/process"
  );
  const [captchaValue, setCaptchaValue] = React.useState(null);
  const [registerId, setRegisterId] = React.useState(null);

  //Estados para modales
  const [showServiceFailModal, setShowServiceFailModal] = React.useState(false);
  const [showNotEmployerModal, setShowNotEmployerModal] = React.useState(false);
  const [showContactTypeModal, setShowContactTypeModal] = React.useState(false);

  //REF Para el captcha
  const captcha = React.useRef(null);

  /** Array con los tipos de documento que puede seleccionar el usuario */
  const documentTypeList = [
    {
      id: 4,
      name: "Número de Identificación Tributaria",
      value: "4",
      stringValue: "NI",
    },
    {
      id: 1,
      name: "Cédula de Ciudadania",
      value: "1",
      stringValue: "CC",
    },
    {
      id: 2,
      name: "Cédula Extranjería",
      value: "2",
      stringValue: "CE",
    },
    {
      id: 6,
      name: "Pasaporte",
      value: "6",
      stringValue: "PA",
    },
    {
      id: 13,
      name: "Permiso Especial de permanencia",
      value: "13",
      stringValue: "PE",
    },
    {
      id: 12,
      name: "Pasaporte ONU",
      value: "12",
      stringValue: "PO",
    },
    {
      id: 9,
      name: "Carné Diplomático",
      value: "9",
      stringValue: "CD",
    },
    {
      id: 14,
      name: "Permiso por protección Temporal",
      value: "14",
      stringValue: "PT",
    },
  ];

  /** Tipos de servicio que puede seleccionar el usuario. Inicialmente sólo es un objeto, pero podrían aumentar. Mirar si esto después debe convertirse en un array */
  const [serviceType] = React.useState({ value: 1, name: "Incapacidades" });

  const [colombiaDeptos] = React.useState(departamentosColombia);

  /** Estados generales de la aplicación */
  const [actualDay, setActualDay] = React.useState(actualDate.getDay()); // Día de la semana.
  const [actualHour, setActualHour] = React.useState(actualDate.getHours()); // Hora del día.
  const [isHoliday, setIsHoliday] = React.useState(
    holidayCalc.isHoliday(actualDate)
  ); // Indica si es festivo

  // Función de consumo de servicios en controlador
  const callApi = async (
    operation,
    typeId = "",
    numId = "",
    url,
    socialReason = null,
    userName = null,
    selectedDpto = null,
    selectedCity = null,
    transactionId = null,
    cellPhone = null,
    serviceType = null
  ) => {
    let data = new FormData();
    data.append("operation", operation);
    data.append("typeDocument", typeId);
    data.append("numberDocument", numId);

    if (operation === "getCitiesFromUserDepto") {
      data.append("deptoSel", selectedDpto);
    }

    if (operation === "registerTransactionUser") {
      data.append("transactionId", transactionId);
    }

    if (operation === "userFormInfo") {
      data.append("companyName", socialReason);
      data.append("nameUser", userName);
      data.append("userCellphone", cellPhone);
      data.append("department", selectedDpto);
      data.append("cityUser", selectedCity);
      data.append("serviceType", serviceType);
    }

    let headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");

    try {
      const response = await client.postFormData(url, data, headers);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const registerTransaction = async (transactionId) => {
    const res = callApi(
      "registerTransactionUser",
      "",
      "",
      url,
      null,
      null,
      null,
      null,
      transactionId
    );
    res
      .then((data) => `Success ${data.status}`)
      .catch((error) => console.log(`Error ${error.message}`));
  };

  // Función para redireccionar del formulario al bot. Es la última función que se ejecuta
  const botRedirect = (registerId) => {
    // console.log('Registro creado a enviar al bot', registerId)
    window.location.href = `https://qa.cariai.com/epssanitas/asesorvirtualempresa?hxk=${registerId}`;
  };

  const handleSubmit = async () => {
    if (docType === "" && !docNumber.length) {
      setDocTypeError(true);
      setDocNumError(true);
      return;
    }

    if (docType === "" || (docType === "0" && docNumber === "")) {
      setDocTypeError(true);
      setDocNumError(true);
      return;
    }

    if (docType === "" || docType === 0) {
      setDocTypeError(true);
      return;
    }

    if (docNumber === "") {
      setDocNumError(true);
      return;
    }

    // valida celular, provincia y ciudad
    if (
      cellPhone.length !== 10 &&
      (province === "" || province === "0") &&
      (city === "" || city === "0")
    ) {
      setCellPhoneError(true);
      setProvinceError(true);
      setCityError(true);
      return;
    }
    // valida proviencia y ciudad
    if (
      (province === "" || province === "0") &&
      (city === "" || city === "0")
    ) {
      setProvinceError(true);
      setCityError(true);
      return;
    }

    //validadores individuales
    if (cellPhone === "") {
      setCellPhoneError(true);
      return;
    }
    if (province === "" || province === "0") {
      setProvinceError(true);
      return;
    }
    if (city === "" || city === "0") {
      setCityError(true);
      return;
    }

    if (!captcha.current.getValue()) {
      setRecaptchaError(true);
      return;
    }

    if (!checked) {
      setCheckedError(true);
      return;
    }

    const userObj = {
      socialReason: enterpriseName,
      userName: userName,
      cellPhone: cellPhone,
      provName: provName,
      cityName: cityName,
      serviceType: serviceType.name,
    };

    let operation = "userFormInfo";
    const res = callApi(
      operation,
      docType,
      docNumber,
      url,
      userObj.socialReason,
      userObj.userName,
      userObj.provName,
      userObj.cityName,
      null,
      userObj.cellPhone,
      userObj.serviceType
    );
    setLoader(true);
    res
      .then((data) => {
        // console.log('Data del submit', data)
        let submitData = data.message[0];
        setRegisterId(submitData.id);
        registerTransaction(10251);
        setTimeout(() => {
          setLoader(false);
          botRedirect(submitData.id);
        }, 5000);
      })
      .catch((error) => {
        setShowServiceFailModal(true);
        console.error(error);
      });
  };

  const normalizeText = (text) => {
    var mapaTildes = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
      ü: "u",
      Ü: "U",
      ñ: "n",
      Ñ: "N",
    };

    // Crear una expresión regular que coincida con todas las tildes y acentos
    var regexTildes = new RegExp("[áéíóúÁÉÍÓÚüÜñÑ]", "g");

    // Reemplazar todas las tildes y acentos por sus equivalentes sin tilde
    return text.replace(regexTildes, function (match) {
      return mapaTildes[match];
    });
  };

  /** Este use effect va seteando la fecha segundo a segundo para tener transparencia en fuera de horario */
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActualDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SanitasEmpresarialContext.Provider
      value={{
        docType,
        setDocType,
        docTypeError,
        setDocTypeError,
        docNumber,
        setDocNumber,
        docNumError,
        setDocNumError,
        cellPhone,
        setCellPhone,
        enterpriseName,
        setEnterpriseName,
        province,
        setProvince,
        city,
        setCity,
        documentTypeList,
        serviceType,
        actualDay,
        actualHour,
        isHoliday,
        callApi,
        colombiaDeptos,
        cellPhoneError,
        setCellPhoneError,
        enterpriseNameError,
        setEnterpriseNameError,
        provinceError,
        setProvinceError,
        cityError,
        setCityError,
        showServiceFailModal,
        setShowServiceFailModal,
        showNotEmployerModal,
        setShowNotEmployerModal,
        showInputs,
        setShowInputs,
        recaptchaError,
        setRecaptchaError,
        checked,
        setChecked,
        checkedError,
        setCheckedError,
        disabled,
        setDisabled,
        handleSubmit,
        showContactTypeModal,
        captcha,
        formLoader,
        setFormLoader,
        provincesList,
        setProvincesList,
        normalizeText,
        citiesList,
        setCitiesList,
        url,
        docTypeDisabled,
        setDocTypeDisabled,
        registerId,
        userName,
        setUserName,
        provName,
        setProvName,
        cityName,
        setCityName,
        loader,
        captchaValue,
        setCaptchaValue,
      }}
    >
      {children}
    </SanitasEmpresarialContext.Provider>
  );
};

export { SanitasEmpresarialContext, SanitasEmpresarialProvider };
