import classes from "./MealItemForm.module.css";
import Input from "../../UI/ Input";
import React, { useRef, useState } from "react";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNo = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNo < 1 ||
      enteredAmountNo > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNo);
  };
  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id, // we need this id to refer to the specific item being chosen
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a number between 1 - 5</p>}
    </form>
  );
};

export default MealItemForm;
