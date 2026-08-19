import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { PageContainer } from "@/components/layout/Container"
import { EstadoSeccion } from "@/components/EstadoSeccion"
import { MentorCard } from "@/components/home/MentorCard"
import { DirectorioApiError, getEspecialidades } from "@/services/teamService"
import { buscarPorSlug } from "@/lib/slug"

function mensajeDeError(error) {
  if (error instanceof DirectorioApiError) return error.message
  return "Ocurrió un error inesperado al cargar la especialidad."
}

function SkeletonDetalle() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-4 w-full max-w-xl" />
        <Skeleton className="h-4 w-2/3 max-w-md" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, indice) => (
          <Card key={indice} className="border-border-subtle bg-surface">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function EspecialidadDetallePage() {
  const { slug } = useParams()

  const [especialidad, setEspecialidad] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    const controlador = new AbortController()

    async function cargar() {
      setCargando(true)
      setError(null)

      try {
        const datos = await getEspecialidades({ signal: controlador.signal })
        // El API no expone slug, así que se resuelve comparando
        // el slug derivado del nombre de cada especialidad.
        setEspecialidad(buscarPorSlug(datos, slug))
      } catch (fallo) {
        if (fallo?.name !== "AbortError") {
          console.error("No se pudo cargar la especialidad", fallo)
          setError(mensajeDeError(fallo))
        }
      } finally {
        if (!controlador.signal.aborted) setCargando(false)
      }
    }

    cargar()
    return () => controlador.abort()
  }, [slug, intento])

  const mentores = Array.isArray(especialidad?.empleados)
    ? especialidad.empleados.filter((item) => item?.activo !== false)
    : []

  const servicios = Array.isArray(especialidad?.servicios)
    ? especialidad.servicios.filter((item) => item?.activo !== false)
    : []

  return (
    <PageContainer as="section" aria-labelledby="especialidad-titulo">
      <Link
        to="/especialidades"
        className="inline-flex items-center gap-1.5 rounded-lg font-mono text-[0.7rem] uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Especialidades
      </Link>

      <div className="mt-8">
        <EstadoSeccion
          cargando={cargando}
          error={error}
          skeleton={<SkeletonDetalle />}
          onReintentar={() => setIntento((valor) => valor + 1)}
        >
          {!especialidad ? (
            <div className="rounded-xl border border-border-subtle bg-surface p-10 text-center">
              <h1
                id="especialidad-titulo"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Especialidad no encontrada
              </h1>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
                No existe ninguna especialidad que corresponda a esta dirección.
                Puede que haya cambiado de nombre.
              </p>
              <Button asChild className="mt-6">
                <Link to="/especialidades">Ver todas las especialidades</Link>
              </Button>
            </div>
          ) : (
            <>
              <h1
                id="especialidad-titulo"
                className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                {especialidad.nombre}
              </h1>

              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-text-secondary">
                {especialidad.descripcion ||
                  "Esta especialidad todavía no tiene una descripción publicada."}
              </p>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link
                    to={`/reservar?especialidadId=${especialidad.id}`}
                    className="group"
                  >
                    Agendar sesión
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>

              {servicios.length > 0 && (
                <section aria-labelledby="servicios-titulo" className="mt-16">
                  <h2
                    id="servicios-titulo"
                    className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted"
                  >
                    Sesiones disponibles
                  </h2>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {servicios.map((servicio) => (
                      <li
                        key={servicio.id}
                        className="rounded-xl border border-border-subtle bg-surface px-4 py-3"
                      >
                        <p className="text-sm font-medium text-foreground">
                          {servicio.nombre}
                        </p>
                        {Number.isFinite(Number(servicio.duracionMinutos)) && (
                          <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-text-muted">
                            {servicio.duracionMinutos} min
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section aria-labelledby="mentores-especialidad" className="mt-16">
                <h2
                  id="mentores-especialidad"
                  className="text-xl font-semibold tracking-tight text-foreground"
                >
                  Mentores en esta especialidad
                </h2>

                <div className="mt-6">
                  {mentores.length === 0 ? (
                    <p className="rounded-xl border border-border-subtle bg-surface p-6 text-center text-sm text-text-muted">
                      Todavía no hay mentores asignados a esta especialidad.
                    </p>
                  ) : (
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {mentores.map((mentor) => (
                        <li key={mentor.id}>
                          <MentorCard mentor={mentor} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            </>
          )}
        </EstadoSeccion>
      </div>
    </PageContainer>
  )
}
