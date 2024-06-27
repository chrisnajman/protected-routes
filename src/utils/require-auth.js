import { redirect } from "react-router-dom"
import { LOGGEDIN_KEY } from "./localStorageKeys"

// Define your basename here
const basename = "/protected-routes"

export async function requireAuth(request) {
  let pathname = new URL(request.url).pathname

  // Remove the basename from the pathname
  if (pathname.startsWith(basename)) {
    pathname = pathname.slice(basename.length)
  }

  const isLoggedIn = localStorage.getItem(LOGGEDIN_KEY)

  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    )
    Object.defineProperty(response, "body", { value: true })
    throw response
  }

  return null
}

// import { redirect } from "react-router-dom"
// import { LOGGEDIN_KEY } from "./localStorageKeys"

// export async function requireAuth(request) {
//   const pathname = new URL(request.url).pathname

//   const isLoggedIn = localStorage.getItem(LOGGEDIN_KEY)

//   if (!isLoggedIn) {
//     const response = redirect(
//       `/login?message=You must log in first.&redirectTo=${pathname}`
//     )
//     Object.defineProperty(response, "body", { value: true })
//     throw response
//   }

//   return null
// }
