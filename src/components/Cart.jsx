import "./Cart.css"
import { CartIcon, ClearCartIcon, CrossIcon } from "./Icons";
import { useId, useState } from "react";
import { useCart } from "../hooks/useCart";
import PropTypes from "react"
function CartItem ({ image, price, title, quantity, addToCart, restToCart }) {
  return (
    <li>
      <img
        src={image}
        alt={title}
      />
      <div>
        <strong>{title}</strong>  
        <div className="price">
        ${price}
        </div>
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <div className="buttons-cart">
          <button onClick={addToCart}>+</button>
          <button onClick={restToCart}>-</button>
        </div>
      </footer>
    </li>
  )
}
CartItem.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  addToCart: PropTypes.function,
  restToCart: PropTypes.function,
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, restToCart, clearCart } = useCart()
  const [check, setCheck] = useState(false)
  
  function handleCheck() {
    setCheck(!check)
  }

  return (
    <>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <label onClick={handleCheck} htmlFor={cartCheckboxId} className="cart-button" >
        {
          check ? <CrossIcon/> : <CartIcon/>
        }
        
      </label>

      <aside className="cart">
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} addToCart={() => addToCart(product)} restToCart={() => restToCart(product)} {...product}/>
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}