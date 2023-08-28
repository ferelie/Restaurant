import React, { Fragment } from "react";
import headerImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Welocme to Abooz's</h1>
      </header>

      <div className={classes["main-image"]}>
        <img src={headerImg} alt="Header Img" />
      </div>
    </Fragment>
  );
};

export default Header;
