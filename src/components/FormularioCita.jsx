import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { DatePickerTime } from "@/components/ui/time"
import { Calendar, User, Briefcase, AlertCircle, CheckCircle } from "lucide-react"

const CATEGORIAS = {
  servicio: {
    titulo: "Información del Servicio",
    icono: Briefcase,
    campos: ["servicio", "duracion"]
  },
  cliente: {
    titulo: "Información del Cliente",
    icono: User,
    campos: ["cliente", "telefono", "email"]
  },
  fecha: {
    titulo: "Fecha y Hora",
    icono: Calendar,
    campos: ["fecha", "hora"]
  }
}

const ESTADOS = [
  { value: "pendiente", label: "Pendiente", color: "warning" },
  { value: "confirmada", label: "Confirmada", color: "success" },
  { value: "completada", label: "Completada", color: "info" },
  { value: "cancelada", label: "Cancelada", color: "danger" }
]

export function FormularioCita() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    servicio: "",
    duracion: "",
    cliente: "",
    telefono: "",
    email: "",
    fecha: "",
    hora: "",
    estado: "pendiente",
    notas: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.servicio.trim()) newErrors.servicio = "El servicio es requerido"
    if (!formData.cliente.trim()) newErrors.cliente = "El cliente es requerido"
    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es requerido"
    if (!formData.fecha) newErrors.fecha = "La fecha es requerida"
    if (!formData.hora) newErrors.hora = "La hora es requerida"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const { createCita } = await import("@/services/citasService")
      await createCita(formData)
      navigate("/citas")
    } catch (error) {
      console.error("Error al crear cita:", error)
      setSubmitError(error.message || "No se pudo crear la cita. Intente nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderCampo = (nombreCampo, placeholder, tipo = "text") => (
    <div className="space-y-2">
      <label htmlFor={nombreCampo} className="block text-sm font-medium text-text-secondary">
        {placeholder}
      </label>
      <Input
        id={nombreCampo}
        name={nombreCampo}
        type={tipo}
        value={formData[nombreCampo]}
        onChange={handleChange}
        placeholder={placeholder}
        className={errors[nombreCampo] ? "border-danger" : ""}
      />
      {errors[nombreCampo] && (
        <p className="text-xs text-danger flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {errors[nombreCampo]}
        </p>
      )}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <div className="rounded-xl border border-danger/30 bg-danger-subtle p-4" role="alert">
          <p className="text-sm text-danger">{submitError}</p>
        </div>
      )}

      {Object.entries(CATEGORIAS).map(([key, categoria]) => {
        const Icon = categoria.icono
        return (
          <Card key={key} className="p-6 border border-border-subtle bg-surface">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary-subtle">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{categoria.titulo}</h3>
            </div>
            
            {key === "fecha" ? (
              <DatePickerTime
                date={formData.fecha}
                time={formData.hora}
                onChange={handleChange}
                dateError={errors.fecha}
                timeError={errors.hora}
                disabled={isSubmitting}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoria.campos.map(campo => {
                  const placeholders = {
                    servicio: "Nombre del servicio",
                    duracion: "Duración (ej: 30 min)",
                    cliente: "Nombre del cliente",
                    telefono: "Teléfono",
                    email: "Correo electrónico"
                  }
                  const tipos = {
                    email: "email",
                    telefono: "tel"
                  }
                  return (
                    <div key={campo}>
                      {renderCampo(campo, placeholders[campo], tipos[campo] || "text")}
                    </div>
                  )
                })}
              </div>
            )}
          </Card>
        )
      })}

      <Card className="p-6 border border-border-subtle bg-surface">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-info-subtle">
            <CheckCircle className="w-5 h-5 text-info" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">Estado y Notas</h3>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="estado" className="block text-sm font-medium text-text-secondary">
              Estado de la cita
            </label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-border-default bg-surface-elevated text-text-primary focus:outline-none focus:border-focus"
            >
              {ESTADOS.map(estado => (
                <option key={estado.value} value={estado.value}>
                  {estado.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="notas" className="block text-sm font-medium text-text-secondary">
              Notas adicionales (opcional)
            </label>
            <textarea
              id="notas"
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Agrega cualquier nota importante sobre la cita..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-border-default bg-surface-elevated text-text-primary focus:outline-none focus:border-focus resize-none"
            />
          </div>
        </div>
      </Card>

      <div className="flex gap-3 justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/citas")}
          disabled={isSubmitting}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-[120px]"
        >
          {isSubmitting ? "Creando..." : "Crear Cita"}
        </Button>
      </div>
    </form>
  )
}
