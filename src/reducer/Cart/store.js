import { ADD_TO_CART, REMOVE_FROM_CART } from "./type";

export function cartReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    {
                        ...action.payload
                    }
                ]
            }
        case REMOVE_FROM_CART:
           return {
            ...state,
            cartItems: state.cartItems.filter(el => el.id !== action.payload)
           }
        default:
            console.log("default");
    }
}