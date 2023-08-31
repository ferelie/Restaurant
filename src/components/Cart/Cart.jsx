import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const dummyItem = [
  { id: "c1", name: "Sushi", amount: 2, price: 4.99 },
  { id: "c2", name: "Sashimi", amount: 3, price: 9.99 },
];

const Cart = ({ onClose }) => {
  const cartItems = dummyItem.map((item) => <li>{item.name}</li>);

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
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
