import "../Styles/Modal.css";
const Modal = ({ className, children, open }) => {
  return (
    <dialog className={className ? className : "modal-window"} open={open}>
      {children}
    </dialog>
  );
};

export { Modal };
