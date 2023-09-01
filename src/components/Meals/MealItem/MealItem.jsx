import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${meal.price.toFixed(2)}`;
  
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3> {meal.name} </h3>
        <div className={classes.description}> {meal.description} </div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>

      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
