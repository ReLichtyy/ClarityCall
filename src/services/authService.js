const API_URL = import.meta.env.VITE_API_URL

/**
 * Extrae el mensaje de error que envía el API.
 *
 * El API responde { success: false, message } tanto en los errores
 * de negocio como en los de validación, así que se aprovecha ese
 * mensaje antes de caer en el texto genérico.
 */
async function extraerMensaje(response, mensajePorDefecto) {
    try {
        const data = await response.json()
        return data?.message || mensajePorDefecto
    } catch {
        return mensajePorDefecto
    }
}

/**
 * POST /usuarios/login
 *
 * Devuelve { success, message, data: { token } }.
 * El API no incluye el usuario, por eso hay que consultar el perfil aparte.
 */
export async function loginUser(credentials) {
    let response

    try {
        response = await fetch(`${API_URL}/usuarios/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
    } catch {
        throw new Error("No se pudo conectar con el servidor.")
    }

    if (!response.ok) {
        throw new Error(
            await extraerMensaje(response, "Correo o contraseña incorrectos.")
        )
    }

    return await response.json()
}

/**
 * POST /usuarios/registro
 *
 * El esquema es strict: solo acepta nombre, primerApellido,
 * segundoApellido, correo, telefono y password. Cualquier campo extra
 * hace que la petición falle con 400.
 */
export async function registerUser(userData) {
    let response

    try {
        response = await fetch(`${API_URL}/usuarios/registro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
    } catch {
        throw new Error("No se pudo conectar con el servidor.")
    }

    if (!response.ok) {
        throw new Error(
            await extraerMensaje(response, "No se pudo registrar el usuario.")
        )
    }

    return await response.json()
}

/**
 * GET /usuarios/perfil
 *
 * Ruta protegida con authenticateToken. Devuelve el usuario con
 * rol y empleado incluidos, sin passwordHash.
 */
export async function getProfile(token) {
    let response

    try {
        response = await fetch(`${API_URL}/usuarios/perfil`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch {
        throw new Error("No se pudo conectar con el servidor.")
    }

    if (!response.ok) {
        throw new Error(
            await extraerMensaje(response, "Token inválido o expirado.")
        )
    }

    return await response.json()
}
