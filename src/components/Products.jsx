import "./Products.css"
import { AddToCartIcon } from "./Icons.jsx"
import PropTypes from "prop-types"
export function Products ({ products }) {
  return (
    <main className="products">
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              <img 
                src={product.image} 
                alt={product.title} 
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

Products.propTypes = {
  products: PropTypes.array,
}