import { Navigate, Outlet } from "react-router-dom"

import { useAuth } from "./useAuth"

export function RoleRoute({ allowedRoles, children }) {
    const { loading, hasRole } = useAuth()

    if (loading) {
        return null
    }

    if (!hasRole(allowedRoles)) {
        return <Navigate to="/unauthorized" replace />
    }

    return children ?? <Outlet />
}