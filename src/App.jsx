import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { products } from "./mocks/products.json"
import { IS_DEVELOPMENT } from "./config"
import { useFilters } from "./hooks/useFilters"
function App() {
  
  const { filters, filterProducts } = useFilters(products)

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  )
} 

export default App
