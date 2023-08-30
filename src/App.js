import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";

function App() {
  return (
    <Fragment>
      <Header />

      <MealsSummary />

      <MealsList />
    </Fragment>
  );
}

export default App;
