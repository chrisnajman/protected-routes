const baseUrl = "/protected-routes"

export async function getVans(id) {
  const url = id ? `${baseUrl}/api/vans/${id}` : `${baseUrl}/api/vans`
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data.vans
}

export async function getHostVans(id) {
  const url = id
    ? `${baseUrl}/api/host/host-vans/${id}`
    : `${baseUrl}/api/host/host-vans`
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data.vans
}
