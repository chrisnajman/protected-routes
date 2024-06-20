import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { FaCircleArrowRight } from "react-icons/fa6"

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = useState([])

  const typeFilter = searchParams.get("type")

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

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans

  const vanList = displayedVans.map((van) => {
    return (
      <li key={van.id}>
        <Link
          className="link-button"
          to={van.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
          aria-label={`View details for ${van.name}, 
                             priced at £${van.price} per day`}
        >
          <p>{van.name}</p>
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

          <ul className="van-footer">
            <li>
              <span className="visually-hidden">Price: </span>£{van.price}/day
            </li>
            <li>
              <span className="visually-hidden">Type: </span>
              <span className={`van-type ${van.type}`}>{van.type}</span>
            </li>
          </ul>
          <FaCircleArrowRight aria-hidden="true" />
        </Link>
      </li>
    )
  })

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }
  return (
    <div className="vans-container  list-container content-container">
      <h1>Explore our van options</h1>
      <form className="van-list-filters">
        <h2 className="visually-hidden">Filter by type:</h2>
        <button
          type="button"
          onClick={() => handleFilterChange("type", "simple")}
          className={`simple ${typeFilter === "simple" ? "selected" : ""}`}
        >
          Simple
        </button>
        <button
          type="button"
          onClick={() => handleFilterChange("type", "luxury")}
          className={`luxury ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          Luxury
        </button>
        <button
          type="button"
          onClick={() => handleFilterChange("type", "rugged")}
          className={`rugged ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          Rugged
        </button>

        <button
          type="button"
          className="clear-filters"
          onClick={() => handleFilterChange("type", null)}
          disabled={typeFilter ? false : true}
        >
          Clear filter
        </button>
      </form>
      {vans.length > 0 ? (
        <ul className="van-list">{vanList}</ul>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  )
}

export default Vans
