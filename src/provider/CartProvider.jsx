import { useReducer } from "react";
import { CartContext } from "../contexts";
import { cartReducer } from "../reducers/cartReducers";

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};