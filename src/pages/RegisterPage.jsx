import { Link, Navigate, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/FormError"
import { PageHeader } from "@/components/PageHeader"
import { registroSchema } from "@/schemas/registroSchema"
import { registerUser } from "@/services/authService"
import { useAuth } from "@/auth/useAuth"

export function RegisterPage() {
  const { isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registroSchema),
    defaultValues: {
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      correo: "",
      telefono: "",
      password: ""
    }
  })

  if (!loading && isAuthenticated) {
    return <Navigate to="/" replace />
  }

  async function handleValidSubmit(formData) {
    try {
      // El esquema del API es strict y los opcionales viajan como null,
      // nunca como cadena vacía.
      await registerUser({
        nombre: formData.nombre.trim(),
        primerApellido: formData.primerApellido.trim(),
        segundoApellido: formData.segundoApellido.trim() || null,
        correo: formData.correo.trim().toLowerCase(),
        telefono: formData.telefono.trim() || null,
        password: formData.password
      })

      toast.success("Cuenta creada correctamente. Ya puedes iniciar sesión.")
      navigate("/login", { replace: true })
    } catch (error) {
      toast.error(error.message || "No se pudo registrar el usuario.")
    }
  }

  return (
    <section
      aria-labelledby="register-title"
      className="mx-auto w-full max-w-md px-4 py-12 sm:py-16"
    >
      <PageHeader
        title="Crear cuenta"
        description="Regístrate para reservar sesiones con nuestros profesionales"
      />

      <form onSubmit={handleSubmit(handleValidSubmit)} className="space-y-5">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
            Nombre
          </label>

          <Input
            id="nombre"
            placeholder="Ana"
            className={errors.nombre ? "border-destructive" : ""}
            {...register("nombre")}
          />

          <FormError message={errors.nombre?.message} />
        </div>

        <div>
          <label htmlFor="primerApellido" className="mb-2 block text-sm font-medium">
            Primer apellido
          </label>

          <Input
            id="primerApellido"
            placeholder="Rojas"
            className={errors.primerApellido ? "border-destructive" : ""}
            {...register("primerApellido")}
          />

          <FormError message={errors.primerApellido?.message} />
        </div>

        <div>
          <label htmlFor="segundoApellido" className="mb-2 block text-sm font-medium">
            Segundo apellido{" "}
            <span className="font-normal text-text-muted">(opcional)</span>
          </label>

          <Input
            id="segundoApellido"
            placeholder="Mora"
            className={errors.segundoApellido ? "border-destructive" : ""}
            {...register("segundoApellido")}
          />

          <FormError message={errors.segundoApellido?.message} />
        </div>

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
          <label htmlFor="telefono" className="mb-2 block text-sm font-medium">
            Teléfono <span className="font-normal text-text-muted">(opcional)</span>
          </label>

          <Input
            id="telefono"
            type="tel"
            placeholder="8888-8888"
            className={errors.telefono ? "border-destructive" : ""}
            {...register("telefono")}
          />

          <FormError message={errors.telefono?.message} />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Contraseña
          </label>

          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            className={errors.password ? "border-destructive" : ""}
            {...register("password")}
          />

          <p className="mt-1 text-xs text-text-muted">
            Mínimo 8 caracteres, con una mayúscula, una minúscula y un número.
          </p>

          <FormError message={errors.password?.message} />
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-text-secondary">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="font-medium text-primary hover:underline">
          Inicia sesión
        </Link>
      </p>
    </section>
  )
}
