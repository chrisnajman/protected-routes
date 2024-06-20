import { NavLink, Outlet } from "react-router-dom"

function LayoutHost() {
  return (
    <>
      <nav className="site-navigation hosts-nav">
        <ul>
          <li>
            <NavLink
              to="."
              aria-current="page"
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="income"
              aria-current="page"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="host-vans"
              aria-current="page"
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              aria-current="page"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      {<Outlet />}
    </>
  )
}

export default LayoutHost
