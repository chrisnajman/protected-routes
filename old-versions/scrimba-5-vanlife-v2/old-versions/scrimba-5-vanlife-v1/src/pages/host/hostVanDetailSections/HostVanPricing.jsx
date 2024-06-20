import { useOutletContext } from "react-router-dom"

function HostVanPricing() {
  const { van } = useOutletContext()
  return (
    <section className="host-vans-section">
      <h2 className="visually-hidden">Prices</h2>
      <ul>
        <li>
          <p>&pound;{van.price}/day</p>
        </li>
      </ul>
    </section>
  )
}

export default HostVanPricing
