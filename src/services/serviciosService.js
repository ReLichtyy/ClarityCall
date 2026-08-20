const DEFAULT_API_URL = "http://localhost:3000"

function normalizeBaseUrl(url) {
  return String(url || DEFAULT_API_URL).replace(/\/+$/, "")
}

export const SERVICIOS_API_URL = normalizeBaseUrl(
  import.meta.env?.VITE_API_URL || DEFAULT_API_URL,
)

export class ServiciosApiError extends Error {
  constructor(message, code, status = null, options = {}) {
    super(message, options)
    this.name = "ServiciosApiError"
    this.code = code
    this.status = status
  }
}

async function extraerMensaje(response, mensajePorDefecto) {
  try {
    const data = await response.json()

    // Ante un 400 de validación el API devuelve el detalle por campo en
    // validationErrors y deja en message un genérico ("Datos de entrada
    // inválidos"). Se prefiere el detalle, que sí le dice al usuario qué
    // corregir.
    if (Array.isArray(data?.validationErrors) && data.validationErrors.length > 0) {
      return data.validationErrors
        .map((item) => item?.message)
        .filter(Boolean)
        .join(" ")
    }

    return data?.message || mensajePorDefecto
  } catch {
    return mensajePorDefecto
  }
}

/**
 * POST /servicios
 *
 * createServicioSchema es strict: solo acepta nombre, descripcion,
 * precioBase, duracionMinutos, especialidadId e imagen. Cualquier campo
 * extra devuelve 400.
 *
 * Respuestas de negocio que conviene distinguir:
 *   409 -> "Ya existe un servicio con ese nombre"
 *   400 -> "La especialidad indicada no existe" / "se encuentra inactiva"
 */
export async function crearServicio(datos, options = {}) {
  let response

  try {
    response = await fetch(`${SERVICIOS_API_URL}/servicios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(datos),
      signal: options.signal,
    })
  } catch (error) {
    if (error?.name === "AbortError") throw error
    throw new ServiciosApiError(
      "No se pudo conectar con la API de servicios.",
      "NETWORK_ERROR",
      null,
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new ServiciosApiError(
      await extraerMensaje(response, "No se pudo crear el servicio."),
      response.status === 409 ? "NOMBRE_DUPLICADO" : "HTTP_ERROR",
      response.status,
    )
  }

  let payload
  try {
    payload = await response.json()
  } catch (error) {
    throw new ServiciosApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
      { cause: error },
    )
  }

  if (!payload?.success || !payload.data) {
    throw new ServiciosApiError(
      "La API devolvió una respuesta inválida.",
      "INVALID_RESPONSE",
      response.status,
    )
  }

  return payload.data
}

export const IMAGEN_TIPOS_PERMITIDOS = ["image/jpeg", "image/png", "image/webp"]
export const IMAGEN_TAMANO_MAXIMO = 2 * 1024 * 1024

/**
 * POST /images/upload
 *
 * Multipart con el archivo en el campo "image". El API guarda el archivo
 * y devuelve el nombre generado, que es lo que se almacena en
 * servicio.imagen (no una URL completa).
 *
 * Atención: este endpoint NO usa la envoltura { success, data } del
 * resto del API. Responde { message, fileName } directamente.
 */
export async function subirImagen(archivo, options = {}) {
  if (!IMAGEN_TIPOS_PERMITIDOS.includes(archivo?.type)) {
    throw new ServiciosApiError(
      "Solo se permiten imágenes JPG, PNG o WEBP.",
      "IMAGEN_TIPO_INVALIDO",
    )
  }

  if (archivo.size > IMAGEN_TAMANO_MAXIMO) {
    throw new ServiciosApiError(
      "La imagen no debe superar los 2 MB.",
      "IMAGEN_DEMASIADO_GRANDE",
    )
  }

  const formData = new FormData()
  formData.append("image", archivo)

  let response

  try {
    // Sin cabecera Content-Type: el navegador debe fijar el boundary.
    response = await fetch(`${SERVICIOS_API_URL}/images/upload`, {
      method: "POST",
      body: formData,
      signal: options.signal,
    })
  } catch (error) {
    if (error?.name === "AbortError") throw error
    throw new ServiciosApiError(
      "No se pudo conectar con la API para subir la imagen.",
      "NETWORK_ERROR",
      null,
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new ServiciosApiError(
      await extraerMensaje(response, "No se pudo subir la imagen."),
      "HTTP_ERROR",
      response.status,
    )
  }

  let payload
  try {
    payload = await response.json()
  } catch (error) {
    throw new ServiciosApiError(
      "La API devolvió una respuesta inválida al subir la imagen.",
      "INVALID_RESPONSE",
      response.status,
      { cause: error },
    )
  }

  if (!payload?.fileName) {
    throw new ServiciosApiError(
      "La API no devolvió el nombre del archivo subido.",
      "INVALID_RESPONSE",
      response.status,
    )
  }

  return payload.fileName
}
