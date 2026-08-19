import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { PageContainer } from "@/components/layout/Container"
import { EstadoSeccion } from "@/components/EstadoSeccion"
import { DirectorioApiError, getEspecialidades } from "@/services/teamService"
import { slugify } from "@/lib/slug"

function mensajeDeError(error) {
  if (error instanceof DirectorioApiError) return error.message
  return "Ocurrió un error inesperado al cargar las especialidades."
}

function contarMentores(especialidad) {
  if (!Array.isArray(especialidad?.empleados)) return 0
  return especialidad.empleados.filter((item) => item?.activo !== false).length
}

function SkeletonEspecialidades() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, indice) => (
        <Card key={indice} className="border-border-subtle bg-surface">
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function EspecialidadesPage() {
  const [especialidades, setEspecialidades] = useState([])
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
        setEspecialidades(datos.filter((item) => item?.activo !== false))
      } catch (fallo) {
        if (fallo?.name !== "AbortError") {
          console.error("No se pudieron cargar las especialidades", fallo)
          setError(mensajeDeError(fallo))
        }
      } finally {
        if (!controlador.signal.aborted) setCargando(false)
      }
    }

    cargar()
    return () => controlador.abort()
  }, [intento])

  return (
    <PageContainer as="section" aria-labelledby="especialidades-titulo">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
        Catálogo
      </p>

      <h1
        id="especialidades-titulo"
        className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        Especialidades
      </h1>

      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-text-secondary">
        Elige el terreno de tu bloqueo. Cada especialidad reúne a los mentores
        que trabajan en ella.
      </p>

      <div className="mt-12">
        <EstadoSeccion
          cargando={cargando}
          error={error}
          vacio={especialidades.length === 0}
          skeleton={<SkeletonEspecialidades />}
          mensajeVacio="Todavía no hay especialidades publicadas."
          onReintentar={() => setIntento((valor) => valor + 1)}
        >
          <ul className="grid gap-6 sm:grid-cols-2">
            {especialidades.map((especialidad) => {
              const mentores = contarMentores(especialidad)

              return (
                <li key={especialidad.id}>
                  <Card className="h-full border-border-subtle bg-surface transition-colors hover:bg-surface-hover">
                    <CardHeader>
                      <h2 className="text-lg font-semibold text-foreground">
                        <Link
                          to={`/especialidades/${slugify(especialidad.nombre)}`}
                          className="rounded-lg transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                          {especialidad.nombre}
                        </Link>
                      </h2>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {especialidad.descripcion ||
                          "Sin descripción publicada por ahora."}
                      </p>

                      <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-text-muted">
                        {mentores === 1
                          ? "1 mentor disponible"
                          : `${mentores} mentores disponibles`}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              )
            })}
          </ul>
        </EstadoSeccion>
      </div>
    </PageContainer>
  )
}
