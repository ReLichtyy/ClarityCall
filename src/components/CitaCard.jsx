import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  Code2,
  Clock3,
  Timer,
  UserRound,
} from "lucide-react"

import {
  formatCrc,
  formatFecha,
  formatHora,
  getNombreCompleto,
} from "@/lib/citaFormatters"
import { API_URL } from "@/services/citasService"

function getImageUrl(imageName) {
  if (!imageName) return null
  const safeFileName = String(imageName).split(/[\\/]/).pop()
  return `${API_URL}/images/${encodeURIComponent(safeFileName)}`
}

function getStatusClasses(status) {
  const normalizedStatus = status?.toLowerCase()
  if (normalizedStatus === "confirmada") return "bg-success-subtle text-success"
  if (normalizedStatus === "cancelada") return "bg-danger-subtle text-danger"
  if (normalizedStatus === "finalizada") return "bg-info-subtle text-info"
  return "bg-warning-subtle text-warning"
}

export function CitaCard({ cita }) {
  const serviceName = cita.servicio?.nombre || "Servicio sin nombre"
  const employeeName = getNombreCompleto(cita.empleado?.usuario)
  const clientName = getNombreCompleto(cita.cliente)
  const status = cita.estadoCita?.nombre || "Pendiente"
  const imageUrl = getImageUrl(cita.servicio?.imagen)
  const specialty = cita.empleado?.especialidad?.nombre || "Mentoría de software"
  const duration = Number(cita.duracionMinutos || cita.servicio?.duracionMinutos)

  return (
    <Card className="group relative overflow-hidden border-border-default bg-surface text-card-foreground transition-all duration-300 hover:border-border-focus/60 hover:bg-surface-elevated hover:shadow-xl">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70" />

      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-surface-elevated">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Servicio: ${serviceName}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-primary"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <Code2 className="h-14 w-14" aria-hidden="true" />
          </div>
        )}
        <Badge className={`absolute right-3 top-3 border-0 ${getStatusClasses(status)}`}>
          {status}
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
          {serviceName}
        </CardTitle>
        <p className="text-sm text-text-secondary">
          {formatFecha(cita.fecha)}
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs font-medium text-primary">
          <BriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{specialty}</span>
        </div>
      </CardHeader>

      <CardContent className="grid gap-3 text-sm text-text-secondary">
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>{formatHora(cita.horaInicio)} – {formatHora(cita.horaFin)}</span>
        </div>
        {Number.isFinite(duration) && duration > 0 && (
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>{duration} minutos</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <UserRound className="h-4 w-4 text-secondary" aria-hidden="true" />
          <span className="line-clamp-1">Atiende: {employeeName}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-info" aria-hidden="true" />
          <span className="line-clamp-1">Cliente: {clientName}</span>
        </div>
        <div className="flex items-center gap-2 font-medium text-text-primary">
          <CircleDollarSign className="h-4 w-4 text-success" aria-hidden="true" />
          <span>{formatCrc(cita.costoTotal)}</span>
        </div>
      </CardContent>

      <CardFooter className="mt-auto pt-4">
        <Button
          variant="ghost"
          className="group/btn w-full bg-secondary-subtle text-secondary transition-all hover:bg-surface-active hover:text-text-primary"
        >
          <span className="font-semibold">Ver detalle</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
