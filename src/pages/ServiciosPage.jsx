import { useEffect, useState } from "react"
import { ArrowRight, BriefcaseBusiness, Clock3, Eye } from "lucide-react"
import { Link } from "react-router-dom"

import { useAuth } from "@/auth/useAuth"
import { EstadoSeccion } from "@/components/EstadoSeccion"
import { PageContainer } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  getServiciosActivos,
  ServiciosApiError,
} from "@/services/serviciosService"
import { getServicioImageUrl } from "@/lib/servicioImages"

const crcFormatter = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
  maximumFractionDigits: 0,
})

function getErrorMessage(error) {
  if (error instanceof ServiciosApiError) return error.message
  return "Ocurrió un error inesperado al cargar los servicios."
}

function ServiciosSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="overflow-hidden border-border-subtle bg-surface">
          <Skeleton className="h-48 w-full rounded-none" />
          <CardHeader>
            <Skeleton className="h-6 w-2/3" />
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function ServiciosPage() {
  const { hasRole } = useAuth()
  const [servicios, setServicios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadServicios() {
      setLoading(true)
      setError(null)

      try {
        setServicios(
          await getServiciosActivos({ signal: controller.signal }),
        )
      } catch (requestError) {
        if (requestError?.name !== "AbortError") {
          console.error("No se pudieron cargar los servicios", requestError)
          setError(getErrorMessage(requestError))
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadServicios()
    return () => controller.abort()
  }, [reloadKey])

  return (
    <PageContainer as="section" aria-labelledby="servicios-title">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 id="servicios-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Servicios
          </h1>
          <p className="mt-3 max-w-xl leading-relaxed text-text-secondary">
            Explora las sesiones disponibles y encuentra la mentoría adecuada para tu próximo reto.
          </p>
        </div>

        {hasRole(["Administrador"]) && (
          <Button asChild variant="outline">
            <Link to="/servicios/nuevo">Crear servicio</Link>
          </Button>
        )}
      </div>

      <div className="mt-10">
        <EstadoSeccion
          cargando={loading}
          error={error}
          vacio={servicios.length === 0}
          skeleton={<ServiciosSkeleton />}
          mensajeVacio="Todavía no hay servicios publicados."
          onReintentar={() => setReloadKey((key) => key + 1)}
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {servicios.map((servicio) => {
              const imageUrl = getServicioImageUrl(servicio.imagen)

              return (
                <li key={servicio.id}>
                  <Card className="group flex h-full flex-col overflow-hidden border-border-subtle bg-surface transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-border-focus/70 hover:bg-surface-elevated hover:shadow-xl focus-within:-translate-y-1 focus-within:border-border-focus/70 focus-within:shadow-xl">
                    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-surface-elevated">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={servicio.nombre}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        />
                      ) : (
                        <BriefcaseBusiness className="h-12 w-12 text-primary" aria-hidden="true" />
                      )}
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <CardHeader>
                      <p className="text-sm font-medium text-primary">
                        {servicio.especialidad?.nombre || "Mentoría de software"}
                      </p>
                      <CardTitle className="text-xl">{servicio.nombre}</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col">
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {servicio.descripcion || "Sesión personalizada con un mentor especializado."}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-secondary">
                        <span className="inline-flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                          {servicio.duracionMinutos} minutos
                        </span>
                        <span className="font-semibold text-foreground">
                          {crcFormatter.format(Number(servicio.precioBase) || 0)}
                        </span>
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                        <Button asChild variant="outline" className="w-full">
                          <Link to={`/servicios/${servicio.id}`}>
                            <Eye aria-hidden="true" />
                            Detalles
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" className="w-full bg-secondary-subtle text-secondary hover:bg-surface-active hover:text-text-primary">
                          <Link to={`/reservar?servicioId=${servicio.id}`}>
                            Reservar
                            <ArrowRight aria-hidden="true" />
                          </Link>
                        </Button>
                      </div>
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
