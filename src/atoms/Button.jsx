const Button = ({
  children,
  onClick,
  className,
  id,
  type,
  value,
  dataExamName,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={className ? className : "btn"}
      id={id ? id : "btn"}
      type={type ? type : "button"}
      value={value ? value : ""}
      data-exam-name={dataExamName ? dataExamName : ""}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  );
};

export { Button };
