import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css"
export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="camiseta"
              />
              <div>
                <strong>Iphone</strong> - $1499
              </div>

              <footer>
                <small>
                  Qty: 1
                </small>
              </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}