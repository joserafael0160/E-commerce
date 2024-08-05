import { useId } from "react"
import { useFilters } from "../hooks/useFilters"
import "./Filters.css"
export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState =>({
      ...prevState,
      minPrice: event.target.value
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
        <label htmlFor={minPriceFilterId}>Min Price</label>
        <input type="range"  id={minPriceFilterId} min="0" max="1000" onChange={handleChangeMinPrice} value={filters.minPrice}/>
        <span>${filters.minPrice}</span>
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