import { StrictMode, useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  };

  const hideCartHandler = () => {
    setcartIsShown(false);
  };

  return (
    <StrictMode>
      <CartProvider>
        <Header onCartButton={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <main>
          <MealsSummary />
          <MealsList />
        </main>
      </CartProvider>
    </StrictMode>
  );
}

export default App;
