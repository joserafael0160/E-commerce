import { createContext, useReducer } from "react"
import { cartInitialState, cartReducer } from "../reducers/cart.js"
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: "ADD_TO_CART",
    payload: product 
  })

  const removeFromCart = product => dispatch({
    type: "REMOVE_FROM_CART",
    payload: product 
  })

  const restToCart = product => dispatch({
    type: "REST_TO_CART",
    payload: product 
  })

  const clearCart = () => dispatch({
    type: "CLEAR_CART",
  })

  return { state, addToCart, removeFromCart, restToCart, clearCart }
}
// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, restToCart, clearCart } = useCartReducer()

  return  (
    <CartContext.Provider value = {{ cart: state, addToCart, removeFromCart, restToCart, clearCart}}>{children}</CartContext.Provider>
  )
}