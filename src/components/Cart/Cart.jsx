import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useState, useEffect } from "react";

const dummyItem = [
  { id: "c1", name: "Sushi", amount: 2, price: 4.99 },
  { id: "c2", name: "Sashimi", amount: 3, price: 9.99 },
];

const Cart = ({ onClose }) => {
  const cartItems = dummyItem.map((item, index) => (
    <li key={index}>{item.name}</li>
  ));
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = dummyItem.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, []);

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
