import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const CartButton = ({ onButtonClick }) => {
  const cartCtx = useContext(CartContext);
  const CartItemsNo = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onButtonClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {CartItemsNo} </span>
    </button>
  );
};

export default CartButton;
