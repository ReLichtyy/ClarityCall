const dateFormatter = new Intl.DateTimeFormat("es-CR", {
  dateStyle: "long",
  timeZone: "UTC",
})

const timeFormatter = new Intl.DateTimeFormat("es-CR", {
  hour: "2-digit",
  hour12: false,
  minute: "2-digit",
  timeZone: "UTC",
})

const crcFormatter = new Intl.NumberFormat("es-CR", {
  currency: "CRC",
  currencyDisplay: "narrowSymbol",
  style: "currency",
})

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export function formatFecha(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? "Fecha no disponible"
    : dateFormatter.format(date)
}

export function formatHora(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? "Hora no disponible"
    : timeFormatter.format(date)
}

export function formatCrc(value) {
  const amount = Number(value)
  return Number.isFinite(amount)
    ? crcFormatter.format(amount)
    : "Monto no disponible"
}

export function getNombreCompleto(usuario) {
  return [
    usuario?.nombre,
    usuario?.primerApellido,
    usuario?.segundoApellido,
  ].filter(Boolean).join(" ") || "Sin asignar"
}

export function citaMatchesSearch(cita, query) {
  const normalizedQuery = normalizeText(query)
  if (!normalizedQuery) return true

  const searchableText = normalizeText([
    cita?.servicio?.nombre,
    getNombreCompleto(cita?.empleado?.usuario),
    getNombreCompleto(cita?.cliente),
    cita?.estadoCita?.nombre,
  ].join(" "))

  return searchableText.includes(normalizedQuery)
}
