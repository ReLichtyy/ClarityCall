import { Link } from "react-router-dom"
import { ShieldAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/auth/useAuth"

export function UnauthorizePage() {
  const { user } = useAuth()
  const rol = user?.rol?.nombre

  return (
    <section
      aria-labelledby="unauthorized-title"
      className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-16 text-center"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-danger-subtle">
        <ShieldAlert className="h-7 w-7 text-danger" />
      </div>

      <h1
        id="unauthorized-title"
        className="mb-3 text-3xl font-extrabold tracking-tight text-foreground"
      >
        Acceso denegado
      </h1>

      <p className="mb-8 text-text-secondary">
        No tienes permisos para ver esta sección
        {rol ? ` con el rol ${rol}.` : "."}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link to="/">Volver al inicio</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/citas">Ver mis citas</Link>
        </Button>
      </div>
    </section>
  )
}
