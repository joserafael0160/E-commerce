import "./Cart.css"
import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import { useCart } from "../hooks/useCart";
import PropTypes from "react"
function CartItem ({ image, price, title, quantity, addToCart }) {
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
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
CartItem.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  addToCart: PropTypes.func,
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <input id={cartCheckboxId} type="checkbox" hidden/>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>

      <aside className="cart">
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} addToCart={() => addToCart(product)} {...product}/>
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