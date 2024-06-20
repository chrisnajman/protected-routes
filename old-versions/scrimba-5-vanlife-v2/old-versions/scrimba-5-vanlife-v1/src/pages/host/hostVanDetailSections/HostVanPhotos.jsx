import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {
  const { van } = useOutletContext()
  return (
    <section className="host-vans-section">
      <h2 className="visually-hidden">Photos</h2>
      <div className="host-thumbs">
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
      </div>
    </section>
  )
}

export default HostVanPhotos
