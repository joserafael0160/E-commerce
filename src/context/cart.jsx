import { createContext, useState } from "react"

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if(productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  const clearCart = () => {
    setCart([])
  }

  return  (
    <CartContext.Provider value = {{ cart, addToCart, clearCart}}>{children}</CartContext.Provider>
  )
}