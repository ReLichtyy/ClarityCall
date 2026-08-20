import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Clock3, UserRound } from "lucide-react"
import { Link, useParams } from "react-router-dom"

import { EstadoSeccion } from "@/components/EstadoSeccion"
import { PageContainer } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { getServicioImageUrl } from "@/lib/servicioImages"
import {
  getServicioById,
  ServiciosApiError,
} from "@/services/serviciosService"

const crcFormatter = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
  maximumFractionDigits: 0,
})

function getErrorMessage(error) {
  if (error instanceof ServiciosApiError) return error.message
  return "Ocurrió un error inesperado al cargar el servicio."
}

function getNombreCompleto(usuario) {
  return [
    usuario?.nombre,
    usuario?.primerApellido,
    usuario?.segundoApellido,
  ].filter(Boolean).join(" ")
}

function DetalleSkeleton() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <Skeleton className="aspect-[3/2] w-full rounded-xl" />
      <div className="space-y-5 py-4">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-10 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-10 w-40" />
      </div>
    </div>
  )
}

export function ServicioDetallePage() {
  const { id } = useParams()
  const [servicio, setServicio] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadServicio() {
      setLoading(true)
      setError(null)

      try {
        const data = await getServicioById(id, {
          signal: controller.signal,
        })
        setServicio(data?.activo === false ? null : data)
      } catch (requestError) {
        if (requestError?.name !== "AbortError") {
          console.error("No se pudo cargar el servicio", requestError)
          setError(getErrorMessage(requestError))
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadServicio()
    return () => controller.abort()
  }, [id, reloadKey])

  const imageUrl = getServicioImageUrl(servicio?.imagen)
  const empleados = Array.isArray(servicio?.empleados)
    ? servicio.empleados.filter(
      (empleado) => empleado?.activo !== false && empleado?.usuario?.activo !== false,
    )
    : []

  return (
    <PageContainer as="section" aria-labelledby="servicio-title">
      <Link
        to="/servicios"
        className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Volver a servicios
      </Link>

      <div className="mt-8">
        <EstadoSeccion
          cargando={loading}
          error={error}
          vacio={!loading && !error && !servicio}
          skeleton={<DetalleSkeleton />}
          mensajeVacio="Este servicio no está disponible."
          onReintentar={() => setReloadKey((key) => key + 1)}
        >
          {servicio && (
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <Card className="overflow-hidden border-border-subtle bg-surface p-0">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={servicio.nombre}
                    className="aspect-[3/2] h-full w-full object-cover"
                  />
                ) : (
                  <div className="aspect-[3/2] bg-surface-elevated" />
                )}
              </Card>

              <div className="py-2 lg:py-5">
                <p className="text-sm font-medium text-primary">
                  {servicio.especialidad?.nombre || "Mentoría de software"}
                </p>
                <h1 id="servicio-title" className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {servicio.nombre}
                </h1>
                <p className="mt-5 max-w-xl leading-relaxed text-text-secondary">
                  {servicio.descripcion}
                </p>

                <div className="mt-8 flex flex-wrap gap-6 border-y border-border-subtle py-5">
                  <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
                    <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {servicio.duracionMinutos} minutos
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {crcFormatter.format(Number(servicio.precioBase) || 0)}
                  </span>
                </div>

                {empleados.length > 0 && (
                  <div className="mt-7">
                    <h2 className="text-base font-semibold text-foreground">
                      Profesionales disponibles
                    </h2>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {empleados.map((empleado) => (
                        <li key={empleado.id} className="flex items-center gap-2 text-sm text-text-secondary">
                          <UserRound className="h-4 w-4 text-primary" aria-hidden="true" />
                          {getNombreCompleto(empleado.usuario)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button asChild size="lg" className="mt-8">
                  <Link to={`/reservar?servicioId=${servicio.id}`}>
                    Ver disponibilidad
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </EstadoSeccion>
      </div>
    </PageContainer>
  )
}
