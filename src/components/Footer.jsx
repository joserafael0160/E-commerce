import "./Footer.css"

export function Footer ({ filters }) {
  return (
    <footer className="footer">
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}