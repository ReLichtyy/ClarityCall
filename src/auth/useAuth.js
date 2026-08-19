import { useContext } from "react"

import { AuthContext } from "./AuthContext"

/**
 * Acceso al contexto de autenticación.
 *
 * Expone user, token, loading, login, logout, isAuthenticated y hasRole.
 * Falla de forma explícita si se usa fuera del AuthProvider, que era
 * justamente el síntoma difícil de rastrear cuando main.jsx no envolvía
 * la aplicación.
 */
export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error(
            "useAuth debe usarse dentro de un AuthProvider."
        )
    }

    return context
}
