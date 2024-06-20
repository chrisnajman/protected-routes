import { redirect } from "react-router-dom"

// export async function requireAuth() {
//   const isLoggedIn = false
//   const response = redirect("/login")

//   if (!isLoggedIn) {
//     return Object.defineProperty(response, "body", { value: true })
//   }

//   return null
// }

export async function requireAuth() {
  const isLoggedIn = false

  if (!isLoggedIn) {
    const response = redirect("/login")
    Object.defineProperty(response, "body", { value: true })
    throw response
  }

  return null
}
