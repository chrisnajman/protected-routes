import { useState, useEffect } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6"

function VanDetail() {
  const params = useParams()
  const location = useLocation()

  const [van, setVan] = useState(null)

  useEffect(() => {
    async function getVan() {
      try {
        const res = await fetch(`/api/vans/${params.id}`)
        const vanData = await res.json()
        setVan(vanData.vans)
      } catch (error) {
        console.log(error)
      }
    }
    getVan()
  }, [params.id])

  const search = location.state?.search || ""
  const type = location.state?.type

  return (
    <div className="van-detail-container  content-container">
      <div className="back-links">
        {type && (
          <>
            <Link
              className="back-link"
              to={`..${search}`}
              relative="path"
            >
              <FaCircleArrowLeft />{" "}
              <span>
                <span className="visually-hidden">Back to </span>
                all {type} vans
              </span>
            </Link>
          </>
        )}
        <Link
          className="back-link"
          to=".."
          relative="path"
        >
          <FaCircleArrowLeft />
          <span>
            <span className="visually-hidden">Back to </span>all vans
          </span>
        </Link>
      </div>
      {van ? (
        <>
          <h1>{van.name}</h1>
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
          <p>{van.description}</p>

          <ul className="van-footer text-list">
            <li>
              <span className="visually-hidden">Price: </span>£{van.price}/day
            </li>
            <li>
              <span className="visually-hidden">Type: </span>
              <span className={`van-type ${van.type}`}>{van.type}</span>
            </li>
          </ul>
          <Link
            className="link-button cta"
            to=""
          >
            Rent this van
          </Link>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

export default VanDetail
