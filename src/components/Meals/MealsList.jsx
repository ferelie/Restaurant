import classes from "./mealsList.module.css";
import DUMMY_MEALS from "./dummyList";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MealsList = () => {
  const listOfMeals = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} id={meal.id} meal={meal} />
  ));

  return (
    <div className={classes.meals}>
      <Card>
        <ul> {listOfMeals} </ul>
      </Card>
    </div>
  );
};

export default MealsList;
