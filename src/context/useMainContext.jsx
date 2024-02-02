import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/Cart/store";
import { ADD_TO_CART, ADD_TO_LIKE, REMOVE_FROM_CART, REMOVE_FROM_LIKE } from "../reducer/Cart/type";


export const MainContext = createContext(null);

export function MainContextContainer({ children }) {
  const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    likeItems: JSON.parse(localStorage.getItem("likeItems")) || []
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (el) => dispatch({ type: ADD_TO_CART, payload: el });
  const addToLike = (el) => dispatch({type: ADD_TO_LIKE, payload: el})
  const removeFromCart = (id)=> dispatch({type: REMOVE_FROM_CART, payload: id})
  const removeFromLike = (id) => dispatch({type: REMOVE_FROM_LIKE, payload: id})

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
  }, [state.cartItems])

  useEffect(() => {
    localStorage.setItem("likeItems", JSON.stringify(state.likeItems))
  }, [state.likeItems])

  return (
    <MainContext.Provider
      value={{
        cartItems: state.cartItems,
        likeItems: state.likeItems,
        addToCart,
        removeFromCart,
        addToLike,
        removeFromLike
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
