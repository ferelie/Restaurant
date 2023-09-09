import React, { useState, useEffect } from "react";
import classes from "./mealsList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fireBaseError, setFireBaseError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
        const res = await fetch(
          "https://restaurant-b7605-default-rtdb.firebaseio.com/meals.json"
          );
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const resData = await res.json();
  
        const loadedMeals = [];
  
        for (const key in resData) {
          loadedMeals.push({
            id: key,
            name: resData[key].name,
            description: resData[key].description,
            price: resData[key].price,
          });
        }
  
        setMeals(loadedMeals);
        setIsLoading(false);
    };
    
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setFireBaseError(error.message);
    } );

  }, []);
  
  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (fireBaseError) {
    return (
      <section className={classes.error}>
        <p>{fireBaseError}</p>
      </section>
    );
  }

  const listOfMeals = meals.map((meal) => (
    <MealItem key={meal.id} id={meal.id} meal={meal} />
    ));
    
  return (
    <div className={classes.meals}>
      {!isLoading && (
        <Card>
          <ul> {listOfMeals} </ul>
        </Card>
      )}
    </div>
  );
};

export default MealsList;
