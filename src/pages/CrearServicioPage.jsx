import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { PageContainer } from "@/components/layout/Container"
import { CampoFormulario } from "@/components/form/CampoFormulario"
import { DirectorioApiError, getEspecialidades } from "@/services/teamService"
import {
  IMAGEN_TAMANO_MAXIMO,
  IMAGEN_TIPOS_PERMITIDOS,
  ServiciosApiError,
  crearServicio,
  subirImagen,
} from "@/services/serviciosService"
import { slugify } from "@/lib/slug"

const ESTADO_INICIAL = {
  nombre: "",
  descripcion: "",
  precioBase: "",
  duracionMinutos: "",
  especialidadId: "",
}

/**
 * Valida en el cliente las mismas reglas de createServicioSchema, para no
 * gastar un viaje al API en errores evidentes. El API sigue siendo la
 * autoridad: lo que aquí pase igual se revalida allá.
 */
function validar(form) {
  const errores = {}

  const nombre = form.nombre.trim()
  if (nombre.length < 3) {
    errores.nombre = "El nombre debe contener al menos 3 caracteres."
  } else if (nombre.length > 120) {
    errores.nombre = "El nombre no puede superar 120 caracteres."
  }

  const descripcion = form.descripcion.trim()
  if (descripcion.length < 10) {
    errores.descripcion = "La descripción debe contener al menos 10 caracteres."
  } else if (descripcion.length > 500) {
    errores.descripcion = "La descripción no puede superar 500 caracteres."
  }

  const precio = Number(form.precioBase)
  if (!form.precioBase.trim() || !Number.isFinite(precio)) {
    errores.precioBase = "El precio es obligatorio y debe ser numérico."
  } else if (precio <= 0) {
    errores.precioBase = "El precio debe ser mayor a cero."
  } else if (precio > 99999999.99) {
    errores.precioBase = "El precio no puede superar 99.999.999,99."
  }

  const duracion = Number(form.duracionMinutos)
  if (!form.duracionMinutos.trim() || !Number.isFinite(duracion)) {
    errores.duracionMinutos = "La duración es obligatoria y debe ser numérica."
  } else if (!Number.isInteger(duracion)) {
    errores.duracionMinutos = "La duración debe ser un número entero."
  } else if (duracion < 15) {
    errores.duracionMinutos = "La duración mínima es de 15 minutos."
  } else if (duracion > 480) {
    errores.duracionMinutos = "La duración no puede superar 480 minutos."
  }

  if (!form.especialidadId) {
    errores.especialidadId = "Selecciona una especialidad."
  }

  return errores
}

export function CrearServicioPage() {
  const [form, setForm] = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [errorGeneral, setErrorGeneral] = useState(null)
  const [creado, setCreado] = useState(null)
  const [enviando, setEnviando] = useState(false)

  const [especialidades, setEspecialidades] = useState([])
  const [cargandoEspecialidades, setCargandoEspecialidades] = useState(true)
  const [errorEspecialidades, setErrorEspecialidades] = useState(null)
  const [intento, setIntento] = useState(0)

  const [archivo, setArchivo] = useState(null)
  const [vistaPrevia, setVistaPrevia] = useState(null)
  const [errorImagen, setErrorImagen] = useState(null)
  // Si la creación falla después de subir, se reutiliza el archivo ya
  // subido en lugar de dejar otro huérfano en el servidor.
  const [imagenSubida, setImagenSubida] = useState(null)
  const inputArchivo = useRef(null)

  useEffect(() => {
    const controlador = new AbortController()

    async function cargar() {
      setCargandoEspecialidades(true)
      setErrorEspecialidades(null)

      try {
        const datos = await getEspecialidades({ signal: controlador.signal })
        setEspecialidades(datos.filter((item) => item?.activo !== false))
      } catch (fallo) {
        if (fallo?.name !== "AbortError") {
          console.error("No se pudieron cargar las especialidades", fallo)
          setErrorEspecialidades(
            fallo instanceof DirectorioApiError
              ? fallo.message
              : "No se pudieron cargar las especialidades.",
          )
        }
      } finally {
        if (!controlador.signal.aborted) setCargandoEspecialidades(false)
      }
    }

    cargar()
    return () => controlador.abort()
  }, [intento])

  // La URL temporal de la vista previa se libera al cambiarla o al salir.
  useEffect(() => {
    if (!vistaPrevia) return undefined
    return () => URL.revokeObjectURL(vistaPrevia)
  }, [vistaPrevia])

  function handleChange(evento) {
    const { name, value } = evento.target
    setForm((actual) => ({ ...actual, [name]: value }))
    setErrores((actual) => ({ ...actual, [name]: undefined }))
    setCreado(null)
  }

  function handleArchivo(evento) {
    const seleccionado = evento.target.files?.[0] ?? null
    setErrorImagen(null)
    setImagenSubida(null)
    setCreado(null)

    if (!seleccionado) {
      setArchivo(null)
      setVistaPrevia(null)
      return
    }

    if (!IMAGEN_TIPOS_PERMITIDOS.includes(seleccionado.type)) {
      setErrorImagen("Solo se permiten imágenes JPG, PNG o WEBP.")
      setArchivo(null)
      setVistaPrevia(null)
      return
    }

    if (seleccionado.size > IMAGEN_TAMANO_MAXIMO) {
      setErrorImagen("La imagen no debe superar los 2 MB.")
      setArchivo(null)
      setVistaPrevia(null)
      return
    }

    setArchivo(seleccionado)
    setVistaPrevia(URL.createObjectURL(seleccionado))
  }

  function quitarImagen() {
    setArchivo(null)
    setVistaPrevia(null)
    setImagenSubida(null)
    setErrorImagen(null)
    if (inputArchivo.current) inputArchivo.current.value = ""
  }

  function limpiarFormulario() {
    setForm(ESTADO_INICIAL)
    setErrores({})
    quitarImagen()
  }

  async function handleSubmit(evento) {
    evento.preventDefault()
    setErrorGeneral(null)
    setCreado(null)

    const encontrados = validar(form)
    if (Object.keys(encontrados).length > 0) {
      setErrores(encontrados)
      return
    }

    setErrores({})
    setEnviando(true)

    try {
      let imagen = imagenSubida

      if (archivo && !imagen) {
        imagen = await subirImagen(archivo)
        setImagenSubida(imagen)
      }

      const servicio = await crearServicio({
        nombre: form.nombre.trim(),
        descripcion: form.descripcion.trim(),
        precioBase: Number(form.precioBase),
        duracionMinutos: Number(form.duracionMinutos),
        especialidadId: Number(form.especialidadId),
        imagen: imagen ?? null,
      })

      setCreado(servicio)
      limpiarFormulario()
    } catch (fallo) {
      if (fallo instanceof ServiciosApiError && fallo.code === "NOMBRE_DUPLICADO") {
        setErrores((actual) => ({
          ...actual,
          nombre: "Ya existe un servicio con ese nombre.",
        }))
        setErrorGeneral(null)
      } else {
        console.error("No se pudo crear el servicio", fallo)
        setErrorGeneral(
          fallo?.message || "No se pudo crear el servicio.",
        )
      }
    } finally {
      setEnviando(false)
    }
  }

  const especialidadCreada = creado
    ? especialidades.find((item) => item.id === creado.especialidadId)
    : null

  return (
    <PageContainer as="section" size="narrow" aria-labelledby="crear-servicio-titulo">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
        Mantenimiento
      </p>

      <h1
        id="crear-servicio-titulo"
        className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        Crear servicio
      </h1>

      <p className="mt-4 max-w-xl text-pretty leading-relaxed text-text-secondary">
        Registra un tipo de sesión y asócialo a una especialidad. Los servicios
        activos son los que se ofrecen al reservar.
      </p>

      {creado && (
        <div
          role="status"
          className="mt-10 rounded-xl border border-success/30 bg-success-subtle p-5"
        >
          <p className="flex items-center gap-2 text-sm font-medium text-success">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Servicio «{creado.nombre}» creado correctamente.
          </p>
          {especialidadCreada && (
            <Link
              to={`/especialidades/${slugify(especialidadCreada.nombre)}`}
              className="mt-3 inline-block rounded-lg text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Verlo en {especialidadCreada.nombre}
            </Link>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
        <CampoFormulario
          id="nombre"
          etiqueta="Nombre del servicio"
          ayuda="Entre 3 y 120 caracteres. Debe ser único."
          error={errores.nombre}
          value={form.nombre}
          onChange={handleChange}
          placeholder="Revisión de arquitectura - Virtual"
          maxLength={120}
        />

        <CampoFormulario
          id="descripcion"
          as="textarea"
          etiqueta="Descripción"
          ayuda={`Entre 10 y 500 caracteres. ${form.descripcion.trim().length}/500`}
          error={errores.descripcion}
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Qué incluye la sesión y con qué sale la persona."
          maxLength={500}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <CampoFormulario
            id="precioBase"
            etiqueta="Precio base"
            ayuda="En colones, mayor a cero."
            error={errores.precioBase}
            type="number"
            inputMode="decimal"
            min="0.01"
            step="0.01"
            value={form.precioBase}
            onChange={handleChange}
            placeholder="35000"
          />

          <CampoFormulario
            id="duracionMinutos"
            etiqueta="Duración (minutos)"
            ayuda="Entre 15 y 480 minutos."
            error={errores.duracionMinutos}
            type="number"
            inputMode="numeric"
            min="15"
            max="480"
            step="15"
            value={form.duracionMinutos}
            onChange={handleChange}
            placeholder="60"
          />
        </div>

        <CampoFormulario
          id="especialidadId"
          etiqueta="Especialidad"
          error={errores.especialidadId || errorEspecialidades}
        >
          {(comunes) =>
            cargandoEspecialidades ? (
              <Skeleton className="h-8 w-full" />
            ) : errorEspecialidades ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setIntento((valor) => valor + 1)}
              >
                Reintentar carga
              </Button>
            ) : (
              <select
                {...comunes}
                value={form.especialidadId}
                onChange={handleChange}
                className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30"
              >
                <option value="">Selecciona una especialidad</option>
                {especialidades.map((especialidad) => (
                  <option key={especialidad.id} value={especialidad.id}>
                    {especialidad.nombre}
                  </option>
                ))}
              </select>
            )
          }
        </CampoFormulario>

        <div className="space-y-2">
          <span className="block text-sm font-medium text-foreground">
            Imagen <span className="font-normal text-text-muted">(opcional)</span>
          </span>

          <input
            ref={inputArchivo}
            id="imagen"
            name="imagen"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleArchivo}
            aria-describedby="imagen-ayuda"
            aria-invalid={errorImagen ? true : undefined}
            className="block w-full cursor-pointer rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-sm text-text-secondary outline-none transition-colors file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-surface-elevated file:px-3 file:py-1 file:text-sm file:font-medium file:text-foreground hover:border-border-strong focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />

          <p id="imagen-ayuda" className="text-xs text-text-muted">
            JPG, PNG o WEBP. Máximo 2 MB. Se sube al guardar el servicio.
          </p>

          {errorImagen && <p className="text-xs text-danger">{errorImagen}</p>}

          {vistaPrevia && (
            <div className="mt-3 flex items-center gap-4 rounded-xl border border-border-subtle bg-surface p-3">
              <img
                src={vistaPrevia}
                alt={`Vista previa de la imagen de ${form.nombre.trim() || "el servicio"}`}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-foreground">{archivo?.name}</p>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-text-muted">
                  {(archivo.size / 1024).toFixed(0)} KB
                  {imagenSubida ? " · ya subida" : ""}
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={quitarImagen}
                aria-label="Quitar la imagen seleccionada"
              >
                <X aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>

        {errorGeneral && (
          <p
            role="alert"
            className="rounded-xl border border-danger/30 bg-danger-subtle p-4 text-sm text-danger"
          >
            {errorGeneral}
          </p>
        )}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button type="submit" size="lg" disabled={enviando}>
            {enviando ? (
              "Guardando…"
            ) : (
              <>
                <Upload aria-hidden="true" />
                Crear servicio
              </>
            )}
          </Button>

          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={limpiarFormulario}
            disabled={enviando}
          >
            Limpiar
          </Button>
        </div>
      </form>
    </PageContainer>
  )
}
