import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaCircleArrowRight } from "react-icons/fa6"

function HostVans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    async function getVans() {
      try {
        const res = await fetch("/api/vans")
        const vansData = await res.json()
        setVans(vansData.vans)
      } catch (error) {
        console.log(error)
      }
    }
    getVans()
  }, [])

  // hostId 123 or 456 or 789
  const hostVanId = "123"
  const vanList = vans
    .filter((van) => van.hostId === hostVanId)
    .map((van) => {
      return (
        <li key={van.id}>
          <Link
            className="link-button"
            to={van.id}
            aria-label={`View details for ${van.name}, 
                             priced at £${van.price} per day`}
          >
            <picture>
              <source
                srcSet={van.imageUrlWebp}
                type="image/webp"
              />
              <img
                className="van-image"
                src={van.imageUrlPng}
                alt={`The ${van.name} van`}
                loading="lazy"
                width="881"
                height="881"
              />
            </picture>
            <div>
              <p>{van.name}</p>
              <ul className="van-footer">
                <li>
                  <span className="visually-hidden">Price: </span>£{van.price}
                  /day
                </li>
              </ul>
              <FaCircleArrowRight aria-hidden="true" />
            </div>
          </Link>
        </li>
      )
    })
  return (
    <div className="hosts-container  content-container host-vans-container list-container">
      <h1>Your Listed Vans</h1>
      {vans.length > 0 ? (
        <ul className="van-list">{vanList}</ul>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  )
}

export default HostVans
