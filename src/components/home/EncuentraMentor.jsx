import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Container } from "@/components/layout/Container"
import { EstadoSeccion } from "@/components/EstadoSeccion"
import { MentorCard } from "@/components/home/MentorCard"
import { DirectorioApiError, getProfesores } from "@/services/teamService"

const MENTORES_DESTACADOS = 3

function mensajeDeError(error) {
  if (error instanceof DirectorioApiError) return error.message
  return "Ocurrió un error inesperado al cargar los mentores."
}

function SkeletonMentores() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: MENTORES_DESTACADOS }).map((_, indice) => (
        <Card key={indice} className="border-border-subtle bg-surface">
          <CardHeader>
            <Skeleton className="mb-3 h-5 w-28 rounded-4xl" />
            <Skeleton className="h-6 w-40" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function EncuentraMentor() {
  const [mentores, setMentores] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    const controlador = new AbortController()

    async function cargar() {
      setCargando(true)
      setError(null)

      try {
        const datos = await getProfesores({ signal: controlador.signal })
        setMentores(datos.slice(0, MENTORES_DESTACADOS))
      } catch (fallo) {
        if (fallo?.name !== "AbortError") {
          console.error("No se pudieron cargar los mentores", fallo)
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
    <section
      aria-labelledby="mentores-titulo"
      className="border-b border-border-subtle py-20 sm:py-28"
    >
      <Container>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
          Directorio
        </p>

        <h2
          id="mentores-titulo"
          className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Encuentra un mentor.
        </h2>

        <div className="mt-12">
          <EstadoSeccion
            cargando={cargando}
            error={error}
            vacio={mentores.length === 0}
            skeleton={<SkeletonMentores />}
            mensajeVacio="Todavía no hay mentores publicados en el directorio."
            onReintentar={() => setIntento((valor) => valor + 1)}
          >
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mentores.map((mentor) => (
                <li key={mentor.id}>
                  <MentorCard mentor={mentor} />
                </li>
              ))}
            </ul>
          </EstadoSeccion>
        </div>

        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/especialidades" className="group">
              Ver especialidades
              <ArrowRight
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
