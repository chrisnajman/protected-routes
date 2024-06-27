import { NavLink, Link } from "react-router-dom"
import { LOGGEDIN_KEY } from "../utils/localStorageKeys"

function fakeLogoutUser() {
  localStorage.removeItem(LOGGEDIN_KEY)
}

function Nav() {
  return (
    <nav className="site-navigation">
      <ul>
        <li>
          <NavLink
            to="."
            aria-current="page"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            aria-current="page"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="vans"
            aria-current="page"
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="host"
            aria-current="page"
          >
            Host
          </NavLink>
        </li>
        <li className="login">
          <NavLink
            to="login"
            aria-current="page"
          >
            Login
          </NavLink>
        </li>
        <li>
          <Link
            to="login"
            onClick={fakeLogoutUser}
          >
            XX
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
