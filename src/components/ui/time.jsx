import { AlertCircle, CalendarDays, Clock } from "lucide-react"

import { Input } from "@/components/ui/input"

function FieldError({ id, message }) {
  if (!message) return null

  return (
    <p id={id} className="flex items-center gap-1 text-xs text-danger">
      <AlertCircle className="h-3 w-3" aria-hidden="true" />
      {message}
    </p>
  )
}

export function DatePickerTime({
  date,
  time,
  onChange,
  dateError,
  timeError,
  disabled = false,
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <label
          htmlFor="fecha"
          className="flex items-center gap-2 text-sm font-medium text-text-secondary"
        >
          <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
          Fecha
        </label>
        <Input
          id="fecha"
          name="fecha"
          type="date"
          value={date}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={Boolean(dateError)}
          aria-describedby={dateError ? "fecha-error" : undefined}
          className={dateError ? "border-danger" : ""}
        />
        <FieldError id="fecha-error" message={dateError} />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="hora"
          className="flex items-center gap-2 text-sm font-medium text-text-secondary"
        >
          <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
          Hora
        </label>
        <Input
          id="hora"
          name="hora"
          type="time"
          value={time}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={Boolean(timeError)}
          aria-describedby={timeError ? "hora-error" : undefined}
          className={timeError ? "border-danger" : ""}
        />
        <FieldError id="hora-error" message={timeError} />
      </div>
    </div>
  )
}
