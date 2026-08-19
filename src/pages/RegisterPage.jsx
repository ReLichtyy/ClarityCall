import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/PageHeader"
import { registerUser } from "@/services/authService"
import { useAuth } from "@/auth/useAuth"

const ESTADO_INICIAL = {
  nombre: "",
  primerApellido: "",
  segundoApellido: "",
  correo: "",
  telefono: "",
  password: "",
}

/**
 * Valida en el cliente las mismas reglas de registerClienteSchema
 * para no gastar un viaje al API en errores evidentes.
 */
function validar(form) {
  if (form.nombre.trim().length < 2) {
    return "El nombre debe contener al menos 2 caracteres."
  }

  if (form.primerApellido.trim().length < 2) {
    return "El primer apellido debe contener al menos 2 caracteres."
  }

  const segundoApellido = form.segundoApellido.trim()
  if (segundoApellido && segundoApellido.length < 2) {
    return "El segundo apellido debe contener al menos 2 caracteres."
  }

  if (!form.correo.trim()) {
    return "El correo electrónico es obligatorio."
  }

  const telefono = form.telefono.trim()
  if (telefono) {
    if (telefono.length < 8 || telefono.length > 25) {
      return "El teléfono debe contener entre 8 y 25 caracteres."
    }
    if (!/^[0-9+\-()\s]+$/.test(telefono)) {
      return "El teléfono contiene caracteres no permitidos."
    }
  }

  if (form.password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres."
  }
  if (!/[A-Z]/.test(form.password)) {
    return "La contraseña debe contener al menos una letra mayúscula."
  }
  if (!/[a-z]/.test(form.password)) {
    return "La contraseña debe contener al menos una letra minúscula."
  }
  if (!/[0-9]/.test(form.password)) {
    return "La contraseña debe contener al menos un número."
  }

  return null
}

export function RegisterPage() {
  const { isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState(ESTADO_INICIAL)
  const [error, setError] = useState(null)
  const [enviando, setEnviando] = useState(false)

  if (!loading && isAuthenticated) {
    return <Navigate to="/citas" replace />
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((actual) => ({ ...actual, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const mensajeValidacion = validar(form)
    if (mensajeValidacion) {
      setError(mensajeValidacion)
      return
    }

    setError(null)
    setEnviando(true)

    try {
      // El esquema del API es strict: los campos opcionales viajan
      // como null, nunca como cadena vacía.
      await registerUser({
        nombre: form.nombre.trim(),
        primerApellido: form.primerApellido.trim(),
        segundoApellido: form.segundoApellido.trim() || null,
        correo: form.correo.trim().toLowerCase(),
        telefono: form.telefono.trim() || null,
        password: form.password,
      })

      navigate("/login", {
        replace: true,
        state: { mensaje: "Cuenta creada correctamente. Ya puedes iniciar sesión." },
      })
    } catch (registerError) {
      setError(registerError.message || "No se pudo registrar el usuario.")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section aria-labelledby="register-title" className="mx-auto w-full max-w-md px-4 py-12 sm:py-16">
      <PageHeader
        title="Crear cuenta"
        description="Regístrate para reservar sesiones con nuestros profesionales"
      />

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-foreground">
            Nombre
          </label>
          <Input
            id="nombre"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ana"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="primerApellido" className="text-sm font-medium text-foreground">
            Primer apellido
          </label>
          <Input
            id="primerApellido"
            name="primerApellido"
            required
            value={form.primerApellido}
            onChange={handleChange}
            placeholder="Rojas"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="segundoApellido" className="text-sm font-medium text-foreground">
            Segundo apellido{" "}
            <span className="font-normal text-text-muted">(opcional)</span>
          </label>
          <Input
            id="segundoApellido"
            name="segundoApellido"
            value={form.segundoApellido}
            onChange={handleChange}
            placeholder="Mora"
          />
        </div>

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
            value={form.correo}
            onChange={handleChange}
            placeholder="persona@ejemplo.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="telefono" className="text-sm font-medium text-foreground">
            Teléfono <span className="font-normal text-text-muted">(opcional)</span>
          </label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            placeholder="8888-8888"
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
            autoComplete="new-password"
            required
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          <p className="text-xs text-text-muted">
            Mínimo 8 caracteres, con al menos una mayúscula, una minúscula y un número.
          </p>
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
          {enviando ? "Creando cuenta…" : "Crear cuenta"}
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
