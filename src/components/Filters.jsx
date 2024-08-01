import { useState, useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"
export function Filters() {
  const { setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    setFilters(prevState =>({
      ...prevState,
      minPrice:event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
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
          <option value="women's clothing">Women&#39;s clothing</option>
          <option value="men's clothing">Men&#39;s clothing</option>
        </select>
      </div>
    </section>
  )
}