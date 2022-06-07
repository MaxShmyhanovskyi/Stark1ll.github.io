import React, { useReducer } from "react";
import ShoppingContext from "./ShoppingContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import { menu } from "../constans";

export const GlobalState = (props)  => {

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShoppingContext.Provider
      value={{
        products: menu,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
}


