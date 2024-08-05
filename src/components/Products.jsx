import "./Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx"
import PropTypes from "prop-types"
import { useCart } from "../hooks/useCart.js"
export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {
          products.map(product =>   {
            const isProductionInCart = checkProductInCart(product)
            return (
              <li key={product.id}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                />
                <div>
                  <strong>{product.title}</strong> 
                  <div className="price">
                    ${product.price}
                  </div>
                </div>
                <div>
                  <button style={{
                    borderColor: isProductionInCart ? "#f33" : "#66b"
                  }} onClick={() => {
                    isProductionInCart
                      ? removeFromCart(product)
                      : addToCart(product)

                    
                  }}>
                    {
                      isProductionInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

Products.propTypes = {
  products: PropTypes.array,
}