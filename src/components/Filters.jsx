import { useState, useId } from "react"
import "./Filters.css"
export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState =>({
      ...prevState,
      minPrice:event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className="filters">

      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type="range"  id={minPriceFilterId} min="0" max="1000" onChange={handleChangeMinPrice}/>
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="men's clothing">Men's clothing</option>
        </select>
      </div>
    </section>
  )
}