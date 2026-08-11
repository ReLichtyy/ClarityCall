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

export async function createCita(citaData, options = {}) {
  let response

  try {
    response = await fetch(`${API_URL}/citas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(citaData),
      signal: options.signal,
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
      "No se pudo crear la cita.",
      "HTTP_ERROR",
      response.status,
    )
  }

  try {
    const payload = await response.json()
    if (!payload?.success || !payload.data) {
      throw new CitasApiError(
        "La API devolvió una respuesta inválida.",
        "INVALID_RESPONSE",
      )
    }
    return payload.data
  } catch (error) {
    throw new CitasApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
      { cause: error },
    )
  }
}

export async function updateCita(id, eventData) {
    try {
        const response = await fetch(`${API_URL}/events/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
        if (!response.ok) {
            const data = await response.json()
            console.error("========== ERROR API UPDATE ==========")
            console.error(data)
            console.error(data.detail?.stack)
            console.error("======================================")

            throw new Error(
                JSON.stringify(data, null, 2)
            )
        }
        return await response.json()
    } catch {
        throw new Error("No se pudo actualizar la cita.")
    }
}

export async function deleteCita(id) {
    /*
    IMPORTANTE:
    Esta función queda como referencia para cuando el API tenga DELETE.
    Ejemplo real:
    const response = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        throw new Error("No se pudo eliminar el evento.")
    }
    return await response.json()
    */
    console.log("Simulación de eliminación del evento con id:", id)
}

