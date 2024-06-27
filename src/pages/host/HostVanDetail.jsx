import {} from "react"
import { Link, Outlet, useLoaderData } from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6"
import HostVanDetailNav from "../../components/HostVanDetailNav"
import { requireAuth } from "../../utils/require-auth"
import { getHostVans } from "../../api.js"

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params, request }) {
  await requireAuth(request)
  return getHostVans(params.id)
}

function HostVanDetail() {
  const van = useLoaderData()

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
    </div>
  )
}

export default HostVanDetail
