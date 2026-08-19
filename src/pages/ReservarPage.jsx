import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/Container"
import { getEspecialidades, getProfesorPorId } from "@/services/teamService"
import { getNombreCompleto } from "@/lib/citaFormatters"

const PASOS = [
  { clave: "especialidad", numero: "01", titulo: "Especialidad" },
  { clave: "mentor", numero: "02", titulo: "Mentor" },
  { clave: "fecha", numero: "03", titulo: "Fecha y hora" },
  { clave: "objetivo", numero: "04", titulo: "Objetivo de la sesión" },
  { clave: "confirmacion", numero: "05", titulo: "Confirmación" },
]

/**
 * Punto de entrada del flujo de reserva.
 *
 * El asistente completo se implementa después. Lo que ya funciona aquí
 * es el paso de contexto: si se llega desde una especialidad o desde un
 * mentor, esos pasos aparecen resueltos y no habrá que volver a pedirlos.
 *
 *   /reservar?especialidadId=3
 *   /reservar?especialidadId=3&empleadoId=7
 */
export function ReservarPage() {
  const [parametros] = useSearchParams()

  const especialidadId = parametros.get("especialidadId")
  const empleadoId = parametros.get("empleadoId")

  const [nombreEspecialidad, setNombreEspecialidad] = useState(null)
  const [nombreMentor, setNombreMentor] = useState(null)

  useEffect(() => {
    const controlador = new AbortController()

    async function resolverContexto() {
      // Si el nombre no se puede resolver, el paso sigue marcado como
      // recibido: el identificador es lo que importa para el flujo.
      if (especialidadId) {
        try {
          const especialidades = await getEspecialidades({
            signal: controlador.signal,
          })
          const encontrada = especialidades.find(
            (item) => String(item.id) === String(especialidadId),
          )
          if (encontrada) setNombreEspecialidad(encontrada.nombre)
        } catch {
          setNombreEspecialidad(null)
        }
      }

      if (empleadoId) {
        try {
          const mentor = await getProfesorPorId(empleadoId, {
            signal: controlador.signal,
          })
          if (mentor) setNombreMentor(getNombreCompleto(mentor.usuario))
        } catch {
          setNombreMentor(null)
        }
      }
    }

    resolverContexto()
    return () => controlador.abort()
  }, [especialidadId, empleadoId])

  const resueltos = {
    especialidad: Boolean(especialidadId),
    mentor: Boolean(empleadoId),
  }

  const detalles = {
    especialidad: nombreEspecialidad,
    mentor: nombreMentor,
  }

  return (
    <PageContainer as="section" aria-labelledby="reservar-titulo">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
        Reserva
      </p>

      <h1
        id="reservar-titulo"
        className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        Agendar sesión
      </h1>

      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-text-secondary">
        Estos son los pasos para reservar. El asistente completo llega en la
        siguiente entrega.
      </p>

      <ol className="mt-12 space-y-px overflow-hidden rounded-xl border border-border-subtle">
        {PASOS.map((paso) => {
          const resuelto = resueltos[paso.clave]
          const detalle = detalles[paso.clave]

          return (
            <li
              key={paso.clave}
              className="flex items-center gap-4 bg-surface px-5 py-4"
            >
              <span
                className={
                  resuelto
                    ? "font-mono text-sm font-medium text-primary"
                    : "font-mono text-sm font-medium text-text-muted"
                }
              >
                {paso.numero}
              </span>

              <span className="flex-1">
                <span className="block text-sm font-medium text-foreground">
                  {paso.titulo}
                </span>
                {resuelto && (
                  <span className="mt-0.5 block text-xs text-text-secondary">
                    {detalle ?? "Dato recibido desde el enlace"}
                  </span>
                )}
              </span>

              {resuelto && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-success">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Listo
                </span>
              )}
            </li>
          )
        })}
      </ol>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" variant="outline">
          <Link to="/especialidades">Elegir especialidad</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/team">Elegir mentor</Link>
        </Button>
      </div>
    </PageContainer>
  )
}
