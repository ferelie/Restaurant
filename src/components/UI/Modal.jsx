import { createPortal } from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";

const Bachdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Bachdrop onClose={props.onClose} />, portalEl)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </Fragment>
  );
};

export default Modal;
