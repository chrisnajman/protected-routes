import { redirect } from "react-router-dom"
import { LOGGEDIN_KEY } from "./localStorageKeys"

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem(LOGGEDIN_KEY)

  if (!isLoggedIn) {
    const response = redirect(
      "/login?message=You must log in to view Host pages"
    )
    Object.defineProperty(response, "body", { value: true })
    throw response
  }

  return null
}
