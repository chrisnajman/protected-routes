import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { loginUser } from "../api"

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const message = useLoaderData()

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")
    setError(null)
    loginUser(loginFormData)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => setStatus("idle"))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <div className="login-container content-container">
      <h1>Log in to your account</h1>
      <ul>
        {message && <li>{message}</li>}
        {error && <li>{error.message}</li>}
      </ul>
      <form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <div>
          <div className="login-input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              value={loginFormData.email}
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              value={loginFormData.password}
            />
          </div>
        </div>
        <button
          type="submit"
          className="link-button"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  )
}

export default Login
