import { useState } from "react"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/PageHeader"
import { useAuth } from "@/auth/useAuth"

export function LoginPage() {
  const { isAuthenticated, loading, login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [enviando, setEnviando] = useState(false)

  const destino = location.state?.from?.pathname ?? "/citas"
  const mensajeExito = location.state?.mensaje ?? null

  if (!loading && isAuthenticated) {
    return <Navigate to={destino} replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError(null)
    setEnviando(true)

    try {
      await login({ correo: correo.trim().toLowerCase(), password })
      navigate(destino, { replace: true })
    } catch (loginError) {
      setError(loginError.message || "No se pudo iniciar sesión.")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section aria-labelledby="login-title" className="mx-auto w-full max-w-md px-4 py-12 sm:py-16">
      <PageHeader
        title="Iniciar sesión"
        description="Accede para gestionar tus sesiones de consultoría"
      />

      {mensajeExito && (
        <p className="mb-6 rounded-xl border border-success/30 bg-success-subtle p-4 text-sm text-success">
          {mensajeExito}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="space-y-2">
          <label htmlFor="correo" className="text-sm font-medium text-foreground">
            Correo electrónico
          </label>
          <Input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            required
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
            placeholder="persona@ejemplo.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Contraseña
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-danger/30 bg-danger-subtle p-4 text-sm text-danger"
          >
            {error}
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={enviando}>
          {enviando ? "Ingresando…" : "Ingresar"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-text-secondary">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="font-medium text-primary hover:underline">
          Regístrate
        </Link>
      </p>
    </section>
  )
}
