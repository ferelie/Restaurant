import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = ({onButtonClick}) => {
  return (
    <button className={classes.button} onClick={onButtonClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
