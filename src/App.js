import { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [carIsShown, setCarIsShown] = useState(false);

  const showCartHandler = () => {
    setCarIsShown(true);
  };

  const hideCartHandler = () => {
    setCarIsShown(false);
  };

  return (
    <CartProvider>
      <Header onCartButton={showCartHandler} />
      {carIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <MealsSummary />
        <MealsList />
      </main>
    </CartProvider>
  );
}

export default App;
