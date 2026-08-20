import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/Container"
import { useAuth } from "@/auth/useAuth"

const PASOS = [
  {
    numero: "01",
    titulo: "Elige la especialidad",
    detalle:
      "Revisa las cuatro áreas y los tipos de sesión que ofrece cada una."
  },
  {
    numero: "02",
    titulo: "Elige al profesional",
    detalle:
      "Cada perfil muestra su especialidad y las sesiones que puede atender."
  },
  {
    numero: "03",
    titulo: "Solicita la sesión",
    detalle:
      "Un administrador registra la cita y confirma la fecha y hora contigo."
  },
  {
    numero: "04",
    titulo: "Sigue tu cita",
    detalle:
      "Desde «Mis citas» consultas el estado y cancelas si aún está pendiente."
  }
]

/**
 * Página informativa, no un formulario de reserva.
 *
 * La matriz de permisos del enunciado no permite que el Cliente cree
 * citas: eso corresponde a Administrador y Empleado desde /citas/nueva.
 * Aquí solo se explica el proceso.
 */
export function ReservarPage() {
  const { isAuthenticated } = useAuth()

  return (
    <PageContainer as="section" aria-labelledby="reservar-titulo">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
        Cómo agendar
      </p>

      <h1
        id="reservar-titulo"
        className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        Agendar una sesión
      </h1>

      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-text-secondary">
        Las sesiones se coordinan con nuestro equipo. Este es el proceso de
        principio a fin.
      </p>

      <ol className="mt-12 space-y-px overflow-hidden rounded-xl border border-border-subtle">
        {PASOS.map((paso) => (
          <li key={paso.numero} className="flex gap-4 bg-surface px-5 py-4">
            <span className="font-mono text-sm font-medium text-primary">
              {paso.numero}
            </span>

            <span>
              <span className="block text-sm font-medium text-foreground">
                {paso.titulo}
              </span>
              <span className="mt-1 block text-sm text-text-secondary">
                {paso.detalle}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link to="/especialidades">Ver especialidades</Link>
        </Button>

        {isAuthenticated ? (
          <Button asChild size="lg" variant="outline">
            <Link to="/citas">Ver mis citas</Link>
          </Button>
        ) : (
          <Button asChild size="lg" variant="outline">
            <Link to="/registro">Crear una cuenta</Link>
          </Button>
        )}
      </div>
    </PageContainer>
  )
}
