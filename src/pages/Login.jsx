import { useState } from "react"
import { useLoaderData } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

function Login() {
  const message = useLoaderData()

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
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
      {message && <p>{message}</p>}
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
          type="button"
          className="link-button"
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
