import "./Footer.css"
import { useFilters } from "../hooks/useFilters"
export function Footer () {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
