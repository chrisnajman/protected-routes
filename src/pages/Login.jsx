import {
  useActionData,
  useLoaderData,
  useNavigation,
  Form,
  redirect,
} from "react-router-dom"
import { loginUser } from "../api"
import { LOGGEDIN_KEY } from "../utils/localStorageKeys"

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  try {
    await loginUser({ email, password })
    localStorage.setItem(LOGGEDIN_KEY, true)
    const response = redirect("/host")
    Object.defineProperty(response, "body", { value: true })

    return response
  } catch (err) {
    return err.message
  }
}

function Login() {
  const message = useLoaderData()
  const errorMessage = useActionData()
  const submission = useNavigation()

  return (
    <div className="login-container content-container">
      <h1>Log in to your account</h1>
      <ul className="error-messages">
        {message && <li>{message}</li>}
        {errorMessage && (
          <li className="login-error-message">{errorMessage}</li>
        )}
      </ul>
      <Form
        method="post"
        className="login-form"
        replace
      >
        <div>
          <div className="login-input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="link-button"
          disabled={submission.state === "submitting"}
        >
          {submission.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  )
}

export default Login
