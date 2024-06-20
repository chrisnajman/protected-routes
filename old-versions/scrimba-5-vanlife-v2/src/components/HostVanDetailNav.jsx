import { NavLink } from "react-router-dom"

function HostVanDetailNav() {
  return (
    <>
      <nav className="site-navigation hosts-nav hosts-sub-nav">
        <ul>
          <li>
            <NavLink
              to="."
              aria-current="page"
              end
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pricing"
              aria-current="page"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="photos"
              aria-current="page"
            >
              Photos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HostVanDetailNav
