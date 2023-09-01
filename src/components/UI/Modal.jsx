import { createPortal } from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";

const Bachdrop = (props) => {
  const { onClose } = props;
  return <div className={classes.backdrop} onClick={onClose}></div>;
};
const ModalOverlay = ({children}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {children} </div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  const { children, onClose } = props;
  return (
    <Fragment>
      {createPortal(<Bachdrop onClose={onClose} />, portalEl)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </Fragment>
  );
};

export default Modal;
