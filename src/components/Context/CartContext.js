import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
   };

   return (
      <cartContext.Provider value={{ cart, addToCart }}>
         {children}
      </cartContext.Provider>
   );
};

export default CartProvider;