const DEFAULT_API_URL = "http://localhost:3000"

function normalizeBaseUrl(url) {
  return String(url || DEFAULT_API_URL).replace(/\/+$/, "")
}

export const TEAM_API_URL = normalizeBaseUrl(
  import.meta.env?.VITE_API_URL || DEFAULT_API_URL,
)

export class DirectorioApiError extends Error {
  constructor(message, code, status = null, options = {}) {
    super(message, options)
    this.name = "DirectorioApiError"
    this.code = code
    this.status = status
  }
}

async function requestCollection(path, resourceName, {
  baseUrl = TEAM_API_URL,
  fetchImpl = globalThis.fetch,
  signal,
} = {}, validateItem = () => true, { tolerante = false } = {}) {
  let response

  try {
    response = await fetchImpl(`${normalizeBaseUrl(baseUrl)}${path}`, {
      headers: { Accept: "application/json" },
      signal,
    })
  } catch (error) {
    if (error?.name === "AbortError") throw error
    throw new DirectorioApiError(
      "No se pudo conectar con el directorio del equipo.",
      "NETWORK_ERROR",
      null,
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new DirectorioApiError(
      `No se pudieron cargar ${resourceName}.`,
      "HTTP_ERROR",
      response.status,
    )
  }

  let payload
  try {
    payload = await response.json()
  } catch (error) {
    throw new DirectorioApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
      { cause: error },
    )
  }

  if (!payload?.success || !Array.isArray(payload.data)) {
    throw new DirectorioApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
    )
  }

  // En modo tolerante una entrada incompleta se descarta en lugar de
  // derribar la sección completa: la landing debe seguir en pie aunque
  // un registro del seed venga a medias.
  if (tolerante) {
    return payload.data.filter(validateItem)
  }

  if (!payload.data.every(validateItem)) {
    throw new DirectorioApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
    )
  }

  return payload.data
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function isId(value) {
  return Number.isInteger(value) && value > 0
}

function isNamedRecord(value) {
  return isRecord(value) && isId(value.id) && typeof value.nombre === "string"
}

function isEspecialidad(value) {
  return (
    isNamedRecord(value) &&
    (value.activo === undefined || typeof value.activo === "boolean")
  )
}

/**
 * Mínimo imprescindible para pintar una tarjeta de mentor:
 * identificador y nombre de la persona. Todo lo demás
 * (especialidad, descripción, servicios) se renderiza solo si viene,
 * porque el seed puede tener registros a medias.
 */
function isProfesor(value) {
  return (
    isRecord(value) &&
    isId(value.id) &&
    isRecord(value.usuario) &&
    typeof value.usuario.nombre === "string" &&
    typeof value.usuario.primerApellido === "string"
  )
}

export function getEspecialidades(options = {}) {
  return requestCollection(
    "/especialidades",
    "las especialidades",
    options,
    isEspecialidad,
  )
}

export function getProfesores(options = {}) {
  return requestCollection(
    "/empleados/activos",
    "los mentores",
    options,
    isProfesor,
    { tolerante: true },
  )
}

/**
 * GET /empleados/:id
 *
 * Devuelve un único mentor. Se usa en /mentores/:id.
 */
export async function getProfesorPorId(id, {
  baseUrl = TEAM_API_URL,
  fetchImpl = globalThis.fetch,
  signal,
} = {}) {
  let response

  try {
    response = await fetchImpl(
      `${normalizeBaseUrl(baseUrl)}/empleados/${encodeURIComponent(id)}`,
      { headers: { Accept: "application/json" }, signal },
    )
  } catch (error) {
    if (error?.name === "AbortError") throw error
    throw new DirectorioApiError(
      "No se pudo conectar con el directorio del equipo.",
      "NETWORK_ERROR",
      null,
      { cause: error },
    )
  }

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new DirectorioApiError(
      "No se pudo cargar el mentor.",
      "HTTP_ERROR",
      response.status,
    )
  }

  let payload
  try {
    payload = await response.json()
  } catch (error) {
    throw new DirectorioApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
      { cause: error },
    )
  }

  if (!payload?.success || !isProfesor(payload.data)) {
    return null
  }

  return payload.data
}
