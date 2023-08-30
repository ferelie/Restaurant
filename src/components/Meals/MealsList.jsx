import { Fragment } from "react";
import DUMMY_MEALS from "./dummyList";

const MealsList = () => {

  const listOfMeals = DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>)

  return (
    <Fragment>
      <ul> {listOfMeals} </ul>
    </Fragment>
  );
};

export default MealsList;
