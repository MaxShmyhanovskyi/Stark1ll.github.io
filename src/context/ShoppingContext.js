import { menu } from "../constans";
import React from "react";

export default React.createContext({
  products: menu,
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
