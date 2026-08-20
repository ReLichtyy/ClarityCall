import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"
import { Image } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { FormError } from "@/components/FormError"
import { PageContainer } from "@/components/layout/Container"
import { servicioSchema } from "@/schemas/servicioSchema"
import { crearServicio, subirImagen } from "@/services/serviciosService"
import { getEspecialidades } from "@/services/teamService"
import { slugify } from "@/lib/slug"

export function CrearServicioPage() {
  const [especialidades, setEspecialidades] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [vistaPrevia, setVistaPrevia] = useState(null)
  const [creado, setCreado] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(servicioSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
      precioBase: "",
      duracionMinutos: "",
      especialidadId: "",
      imagen: undefined
    }
  })

  useEffect(() => {
    async function cargarEspecialidades() {
      setLoading(true)
      setError(null)

      try {
        const datos = await getEspecialidades()
        setEspecialidades(datos.filter((item) => item.activo !== false))
      } catch (fallo) {
        setError("No se pudieron cargar las especialidades.")
      } finally {
        setLoading(false)
      }
    }

    cargarEspecialidades()
  }, [])

  useEffect(() => {
    return () => {
      if (vistaPrevia) {
        URL.revokeObjectURL(vistaPrevia)
      }
    }
  }, [vistaPrevia])

  function handleImageChange(event) {
    const file = event.target.files?.[0]

    if (!file) {
      setVistaPrevia(null)
      return
    }

    setVistaPrevia(URL.createObjectURL(file))
  }

  async function handleValidSubmit(formData) {
    try {
      const nombreArchivo = await subirImagen(formData.imagen[0])

      const servicio = await crearServicio({
        nombre: formData.nombre.trim(),
        descripcion: formData.descripcion.trim(),
        precioBase: formData.precioBase,
        duracionMinutos: formData.duracionMinutos,
        especialidadId: formData.especialidadId,
        imagen: nombreArchivo
      })

      toast.success(`Servicio "${servicio.nombre}" creado correctamente.`)
      setCreado(servicio)
      reset()
      setVistaPrevia(null)
    } catch (fallo) {
      toast.error(fallo.message || "No se pudo crear el servicio.")
    }
  }

  function handleClearForm() {
    reset()
    setVistaPrevia(null)
    setCreado(null)
  }

  if (loading) {
    return (
      <PageContainer>
        <p className="py-16 text-center text-text-secondary">
          Cargando especialidades...
        </p>
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <p className="py-16 text-center text-danger" role="alert">
          {error}
        </p>
      </PageContainer>
    )
  }

  const especialidadCreada = creado
    ? especialidades.find((item) => item.id === creado.especialidadId)
    : null

  return (
    <PageContainer as="section" aria-labelledby="crear-servicio-titulo">
      <h1
        id="crear-servicio-titulo"
        className="mb-2 text-3xl font-bold tracking-tight text-foreground"
      >
        Crear servicio
      </h1>

      <p className="mb-8 text-text-secondary">
        Registra un tipo de sesión y asócialo a una especialidad.
      </p>

      {creado && especialidadCreada && (
        <p className="mb-6 rounded-xl border border-success/30 bg-success-subtle p-4 text-sm text-success">
          Servicio &laquo;{creado.nombre}&raquo; creado.{" "}
          <Link
            to={`/especialidades/${slugify(especialidadCreada.nombre)}`}
            className="font-medium underline"
          >
            Verlo en {especialidadCreada.nombre}
          </Link>
        </p>
      )}

      <Card className="border-border-subtle">
        <CardHeader>
          <CardTitle className="text-2xl">Datos del servicio</CardTitle>
          <CardDescription>
            Complete la información principal del servicio.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(handleValidSubmit)}>
          <CardContent className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
                Nombre del servicio
              </label>

              <Input
                id="nombre"
                placeholder="Ej: Revisión de arquitectura - Virtual"
                className={errors.nombre ? "border-destructive" : ""}
                {...register("nombre")}
              />

              <FormError message={errors.nombre?.message} />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="descripcion" className="mb-2 block text-sm font-medium">
                Descripción
              </label>

              <Textarea
                id="descripcion"
                rows={4}
                placeholder="Qué incluye la sesión y con qué sale la persona."
                className={errors.descripcion ? "border-destructive" : ""}
                {...register("descripcion")}
              />

              <FormError message={errors.descripcion?.message} />
            </div>

            <div>
              <label htmlFor="precioBase" className="mb-2 block text-sm font-medium">
                Precio base
              </label>

              <Input
                id="precioBase"
                type="number"
                min="1"
                step="0.01"
                placeholder="Ej: 35000"
                className={errors.precioBase ? "border-destructive" : ""}
                {...register("precioBase")}
              />

              <FormError message={errors.precioBase?.message} />
            </div>

            <div>
              <label
                htmlFor="duracionMinutos"
                className="mb-2 block text-sm font-medium"
              >
                Duración (minutos)
              </label>

              <Input
                id="duracionMinutos"
                type="number"
                min="15"
                max="480"
                step="15"
                placeholder="Ej: 60"
                className={errors.duracionMinutos ? "border-destructive" : ""}
                {...register("duracionMinutos")}
              />

              <FormError message={errors.duracionMinutos?.message} />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="especialidadId"
                className="mb-2 block text-sm font-medium"
              >
                Especialidad
              </label>

              <select
                id="especialidadId"
                className={`flex h-10 w-full rounded-lg border bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ${
                  errors.especialidadId ? "border-destructive" : "border-input"
                }`}
                {...register("especialidadId")}
              >
                <option value="">Seleccione una especialidad</option>
                {especialidades.map((especialidad) => (
                  <option key={especialidad.id} value={especialidad.id}>
                    {especialidad.nombre}
                  </option>
                ))}
              </select>

              <FormError message={errors.especialidadId?.message} />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="imagen" className="mb-2 block text-sm font-medium">
                Imagen del servicio
              </label>

              <div
                className={`grid gap-4 rounded-xl border border-dashed bg-surface p-4 md:grid-cols-[220px_1fr] ${
                  errors.imagen ? "border-destructive" : "border-border-default"
                }`}
              >
                <div className="flex h-40 items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-background">
                  {vistaPrevia ? (
                    <img
                      src={vistaPrevia}
                      alt="Vista previa del servicio"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-center text-text-muted">
                      <Image className="mb-2 h-10 w-10" />
                      <span className="text-sm font-medium">Vista previa</span>
                      <span className="text-xs">Sin imagen seleccionada</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center gap-3">
                  <div>
                    <Input
                      id="imagen"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="hidden"
                      {...register("imagen", { onChange: handleImageChange })}
                    />

                    <label
                      htmlFor="imagen"
                      className="inline-flex cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Seleccionar imagen
                    </label>
                  </div>

                  <p className="text-xs text-text-muted">
                    Formatos permitidos: PNG, JPG o WEBP. Máximo 2 MB.
                  </p>

                  <FormError message={errors.imagen?.message} />
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col-reverse gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" onClick={handleClearForm}>
              Limpiar
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrar servicio"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </PageContainer>
  )
}
