import { useState, useEffect } from "react"
import { useParams, Link, Outlet } from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6"
import HostVanDetailNav from "../../components/HostVanDetailNav"

function HostVanDetail() {
  const params = useParams()

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
  return (
    <div className="hosts-container  content-container host-van-detail van-detail-container">
      <div className="back-links">
        <Link
          className="back-link"
          to=".."
          relative="path"
        >
          <FaCircleArrowLeft />
          <span>
            <span className="visually-hidden">Back to </span>Host Vans list
          </span>
        </Link>
      </div>

      {van ? (
        <>
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
          <h1>{van.name}</h1>
          <HostVanDetailNav />
          {<Outlet context={{ van }} />}
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

export default HostVanDetail
