import "./Footer.css"
import PropTypes from "react"
export function Footer ({ filters }) {
  return (
    <footer className="footer">
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}

Footer.propTypes = {
  filters: PropTypes.func
}