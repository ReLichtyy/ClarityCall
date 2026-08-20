import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/FormError"
import { PageHeader } from "@/components/PageHeader"
import { loginSchema } from "@/schemas/loginSchema"
import { useAuth } from "@/auth/useAuth"

export function LoginPage() {
  const { isAuthenticated, loading, login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      correo: "",
      password: ""
    }
  })

  const destino = location.state?.from?.pathname ?? "/"

  if (!loading && isAuthenticated) {
    return <Navigate to={destino} replace />
  }

  async function handleValidSubmit(formData) {
    try {
      await login({
        correo: formData.correo.trim().toLowerCase(),
        password: formData.password
      })
      toast.success("Sesión iniciada correctamente.")
      navigate(destino, { replace: true })
    } catch (error) {
      toast.error(error.message || "No se pudo iniciar sesión.")
    }
  }

  return (
    <section
      aria-labelledby="login-title"
      className="mx-auto w-full max-w-md px-4 py-12 sm:py-16"
    >
      <PageHeader
        title="Iniciar sesión"
        description="Accede para gestionar tus sesiones de consultoría"
      />

      <form onSubmit={handleSubmit(handleValidSubmit)} className="space-y-5">
        <div>
          <label htmlFor="correo" className="mb-2 block text-sm font-medium">
            Correo electrónico
          </label>

          <Input
            id="correo"
            type="email"
            autoComplete="email"
            placeholder="persona@ejemplo.com"
            className={errors.correo ? "border-destructive" : ""}
            {...register("correo")}
          />

          <FormError message={errors.correo?.message} />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Contraseña
          </label>

          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className={errors.password ? "border-destructive" : ""}
            {...register("password")}
          />

          <FormError message={errors.password?.message} />
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Ingresando..." : "Ingresar"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-text-secondary">
        ¿No tienes cuenta?{" "}
        <Link to="/registro" className="font-medium text-primary hover:underline">
          Regístrate
        </Link>
      </p>
    </section>
  )
}
