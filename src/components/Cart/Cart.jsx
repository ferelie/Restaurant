import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onClose }) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item, index) => (
    <CartItem
      key={index}
      item={item}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const orderHandler = (event) => {
    setIsCheckout(true);
  };

  const displayButtons = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes["button"]} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {!isCheckout && displayButtons}
      {isCheckout && <Checkout exitHandler={onClose} />}
    </Modal>
  );
};

export default Cart;
