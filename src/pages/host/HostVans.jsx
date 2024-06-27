import { Link, useLoaderData } from "react-router-dom"
import { FaCircleArrowRight } from "react-icons/fa6"
import { requireAuth } from "../../utils/require-auth"
import { getHostVans } from "../../api.js"

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }) {
  await requireAuth(request)
  return getHostVans()
}

function HostVans() {
  const vans = useLoaderData()

  // If this stops working, get rid of filter,
  // And reinstate default code (where hostVanId = "123") in server.js

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
      <ul className="van-list">{vanList}</ul>
    </div>
  )
}

export default HostVans
