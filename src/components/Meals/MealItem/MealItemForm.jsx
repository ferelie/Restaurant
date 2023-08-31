import classes from "./MealItemForm.module.css";
import Input from "../../UI/ Input";
const MealItemForm = ({id}) => {
  return (
    <form action="" className={classes.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
