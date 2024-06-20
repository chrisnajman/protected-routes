import { useRouteError } from "react-router-dom"
export default function Error() {
  const error = useRouteError()

  return (
    <div>
      <h1>{error.message}</h1>

      <ul>
        <li>{error.status}</li>
        <li>{error.statusText}</li>
      </ul>
    </div>
  )
}
