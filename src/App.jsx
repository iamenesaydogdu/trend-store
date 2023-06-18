import { useState } from "react";
import Cart from "./components/Cart/ Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShow(true);
  };

  const HideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };
  return (

      <CartProvider> 
      {cartIsShow && <Cart onClose={HideCartHandler} />}

      <Header onShowCart={ShowCartHandler} />
      <Hero />
      <Products />
      </CartProvider>
  );
}

export default App;
