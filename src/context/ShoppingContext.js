import { menu } from "../constans";
import React from "react";

export default React.createContext({
  products: menu,
  cart: () => JSON.parse(localStorage.getItem('updatedCart') || []), 
  addProductToCart: product => {},
  removeProductFromCart: product => {}
});
