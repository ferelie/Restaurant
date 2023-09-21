import React, { Fragment } from "react";
import headerImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = ({onCartButton}) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Welocme to Happy Delights</h1>
        <CartButton onButtonClick={onCartButton} />
      </header>

      <div className={classes["main-image"]}>
        <img src={headerImg} alt="Header Img" />
      </div>
    </Fragment>
  );
};

export default Header;
