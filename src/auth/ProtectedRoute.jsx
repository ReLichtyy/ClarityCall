import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useAuth } from "./useAuth"

export function ProtectedRoute({ children }) {
    const { loading, isAuthenticated } = useAuth()
    const location = useLocation()

    if (loading) {
        return null
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        )
    }

    return children ?? <Outlet />
}