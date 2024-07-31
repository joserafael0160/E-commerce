import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { products } from "./mocks/products.json"
import { useState } from "react"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
function useFilters () {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category == "all" || 
          filters.category == product.category
        )
      )
    })
  }
  return  { filters, filterProducts, setFilters }
}
function App() {
  
  const { filters, filterProducts, setFilters } = useFilters(products)

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  )
} 

export default App
