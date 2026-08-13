import { useEffect, useState } from "react"
import { BookOpen, Mail, UserRound } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DirectorioApiError,
  getEspecialidades,
  getProfesores,
} from "@/services/teamService"

function getProfessorName(usuario = {}) {
  return [usuario.nombre, usuario.primerApellido, usuario.segundoApellido]
    .filter(Boolean)
    .join(" ")
}

function getInitials(usuario = {}) {
  return [usuario.nombre, usuario.primerApellido]
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "CC"
}

function getUserMessage(error) {
  if (error instanceof DirectorioApiError) return error.message
  return "Ocurrió un error inesperado al cargar el equipo."
}

export function TeamPage() {
  const [especialidades, setEspecialidades] = useState([])
  const [profesores, setProfesores] = useState([])
  const [selectedSpecialty, setSelectedSpecialty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadTeam() {
      setLoading(true)
      setError(null)

      try {
        const [specialtiesData, professorsData] = await Promise.all([
          getEspecialidades({ signal: controller.signal }),
          getProfesores({ signal: controller.signal }),
        ])
        setEspecialidades(specialtiesData.filter((item) => item.activo !== false))
        setProfesores(professorsData)
      } catch (requestError) {
        if (requestError?.name !== "AbortError") {
          setError(getUserMessage(requestError))
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadTeam()
    return () => controller.abort()
  }, [reloadKey])

  const filteredProfessors = selectedSpecialty === null
    ? profesores
    : profesores.filter(
        (profesor) => profesor.especialidadId === selectedSpecialty,
      )

  return (
    <section className="py-8" aria-labelledby="team-title">
      <div className="mb-10 max-w-2xl">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
          Nuestro equipo
        </Badge>
        <h1 id="team-title" className="mb-3 text-4xl font-bold tracking-tight">
          Profesores que enseñan con claridad
        </h1>
        <p className="text-lg text-text-secondary">
          Conoce a los especialistas que te acompañarán y explora las áreas en
          las que pueden ayudarte.
        </p>
      </div>

      {loading && (
        <p
          className="rounded-xl border border-border-subtle bg-surface p-8 text-center text-text-secondary"
          role="status"
          aria-live="polite"
        >
          Cargando profesores…
        </p>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-danger/30 bg-danger-subtle p-8 text-center" role="alert">
          <p className="mb-4 text-danger">{error}</p>
          <Button onClick={() => setReloadKey((key) => key + 1)}>
            Reintentar
          </Button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div
            className="mb-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar por especialidad"
          >
            <Button
              variant={selectedSpecialty === null ? "default" : "outline"}
              aria-pressed={selectedSpecialty === null}
              onClick={() => setSelectedSpecialty(null)}
            >
              Todas
            </Button>
            {especialidades.map((especialidad) => (
              <Button
                key={especialidad.id}
                variant={selectedSpecialty === especialidad.id ? "default" : "outline"}
                aria-pressed={selectedSpecialty === especialidad.id}
                onClick={() => setSelectedSpecialty(especialidad.id)}
              >
                {especialidad.nombre}
              </Button>
            ))}
          </div>

          {filteredProfessors.length === 0 ? (
            <p className="rounded-xl border border-border-subtle bg-surface p-8 text-center text-text-muted">
              No hay profesores disponibles para esta especialidad.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProfessors.map((profesor) => (
                <Card key={profesor.id} className="border border-border-subtle bg-surface transition-colors hover:bg-surface-hover">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-subtle text-lg font-bold text-primary" aria-hidden="true">
                      {getInitials(profesor.usuario)}
                    </div>
                    <CardTitle className="text-xl">
                      {getProfessorName(profesor.usuario) || "Profesor Clarity"}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-primary">
                      <UserRound className="h-4 w-4" aria-hidden="true" />
                      {profesor.especialidad?.nombre || "Especialista"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profesor.descripcion && (
                      <p className="text-text-secondary">{profesor.descripcion}</p>
                    )}

                    {profesor.servicios?.length > 0 && (
                      <div>
                        <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                          <BookOpen className="h-4 w-4" aria-hidden="true" />
                          Cursos y servicios
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {profesor.servicios.map((servicio) => (
                            <Badge key={servicio.id} variant="secondary">
                              {servicio.nombre}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {profesor.usuario?.correo && (
                      <a className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary" href={`mailto:${profesor.usuario.correo}`}>
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        {profesor.usuario.correo}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}
