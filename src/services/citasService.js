const DEFAULT_API_URL = "http://localhost:3000"

function normalizeBaseUrl(url) {
  return String(url || DEFAULT_API_URL).replace(/\/+$/, "")
}

export const API_URL = normalizeBaseUrl(
  import.meta.env?.VITE_API_URL || DEFAULT_API_URL,
)

export class CitasApiError extends Error {
  constructor(message, code, status = null, options = {}) {
    super(message, options)
    this.name = "CitasApiError"
    this.code = code
    this.status = status
  }
}

async function requestCitas(path, {
  baseUrl = API_URL,
  fetchImpl = globalThis.fetch,
  signal,
} = {}) {
  let response

  try {
    response = await fetchImpl(`${normalizeBaseUrl(baseUrl)}${path}`, {
      headers: { Accept: "application/json" },
      signal,
    })
  } catch (error) {
    if (error?.name === "AbortError") throw error
    throw new CitasApiError(
      "No se pudo conectar con la API de citas.",
      "NETWORK_ERROR",
      null,
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new CitasApiError(
      "No se pudieron cargar las citas.",
      "HTTP_ERROR",
      response.status,
    )
  }

  try {
    return await response.json()
  } catch (error) {
    throw new CitasApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
      { cause: error },
    )
  }
}

export async function getCitas(options = {}) {
  const payload = await requestCitas("/citas", options)

  if (!payload?.success || !Array.isArray(payload.data)) {
    throw new CitasApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
    )
  }

  return payload.data
}

export async function getCitaById(id, options = {}) {
  const payload = await requestCitas(`/citas/${encodeURIComponent(id)}`, options)

  if (!payload?.success || !payload.data || typeof payload.data !== "object") {
    throw new CitasApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
    )
  }

  return payload.data
}
