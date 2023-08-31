import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";

function App() {
  const [carIsShown, setCarIsShown] = useState(false);

  const showCartHandler = () => {
    setCarIsShown(true);
  };

  const hideCartHandler = () => {
    setCarIsShown(false);
  };

  return (
    <Fragment>
      <Header onCartButton={showCartHandler} />
      {carIsShown && <Cart onClose={hideCartHandler}/>}
      <main>
        <MealsSummary />
        <MealsList />
      </main>
    </Fragment>
  );
}

export default App;
