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

/**
 * Extrae el mensaje de error del API.
 *
 * El API responde { success: false, message } tanto en errores de
 * negocio como de validación.
 */
async function extraerMensaje(response, mensajePorDefecto) {
  try {
    const data = await response.json()
    return data?.message || mensajePorDefecto
  } catch {
    return mensajePorDefecto
  }
}

async function leerPayload(response) {
  try {
    return await response.json()
  } catch {
    return null
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

/**
 * GET /citas/cliente/:clienteId
 *
 * El Cliente solo puede consultar sus propias citas, según la matriz de
 * permisos del enunciado.
 */
export async function getCitasPorCliente(clienteId, options = {}) {
  const payload = await requestCitas(
    `/citas/cliente/${encodeURIComponent(clienteId)}`,
    options,
  )

  if (!payload?.success || !Array.isArray(payload.data)) {
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

/**
 * PUT /citas/:id
 *
 * El esquema updateCitaSchema es strict y exige TODOS estos campos:
 * clienteId, empleadoId, servicioId, fecha, horaInicio, horaFin,
 * duracionMinutos, precioServicio, costoAdicionales, costoTotal,
 * observaciones y adicionalIds.
 *
 * No permite estadoCitaId ni creadoPorUsuarioId: el estado se cambia
 * con PATCH /citas/:id/estado y la cancelación con PATCH /citas/:id/cancelar.
 */
export async function updateCita(id, citaData, options = {}) {
  let response

  try {
    response = await fetch(`${API_URL}/citas/${encodeURIComponent(id)}`, {
      method: "PUT",
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
      await extraerMensaje(response, "No se pudo actualizar la cita."),
      "HTTP_ERROR",
      response.status,
    )
  }

  const payload = await leerPayload(response)

  if (!payload?.success || !payload.data) {
    throw new CitasApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
    )
  }

  return payload.data
}

/**
 * PATCH /citas/:id/cancelar
 *
 * El API no expone DELETE de citas: la baja es lógica y se hace
 * cancelando. El motivo es obligatorio y debe tener entre 5 y 255
 * caracteres (cancelarCitaSchema).
 */
export async function cancelarCita(id, motivoCancelacion, options = {}) {
  const motivo = String(motivoCancelacion ?? "").trim()

  if (motivo.length < 5 || motivo.length > 255) {
    throw new CitasApiError(
      "El motivo de cancelación debe tener entre 5 y 255 caracteres.",
      "VALIDATION_ERROR",
    )
  }

  let response

  try {
    response = await fetch(
      `${API_URL}/citas/${encodeURIComponent(id)}/cancelar`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ motivoCancelacion: motivo }),
        signal: options.signal,
      },
    )
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
      await extraerMensaje(response, "No se pudo cancelar la cita."),
      "HTTP_ERROR",
      response.status,
    )
  }

  const payload = await leerPayload(response)

  if (!payload?.success || !payload.data) {
    throw new CitasApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
    )
  }

  return payload.data
}
