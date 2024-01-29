import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/Cart/store";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducer/Cart/type";

export const MainContext = createContext(null);

export function MainContextContainer({ children }) {
  const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  };

  
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state?.cartItems);

  const addToCart = (el) => dispatch({ type: ADD_TO_CART, payload: el });

  const removeFromCart = (id)=> dispatch({type: REMOVE_FROM_CART, payload: id})

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
  }, [state.cartItems])

  return (
    <MainContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
