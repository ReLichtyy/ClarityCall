import assert from "node:assert/strict"
import test from "node:test"

import {
  citaMatchesSearch,
  formatCrc,
  formatFecha,
  formatHora,
  getNombreCompleto,
} from "../src/lib/citaFormatters.js"

test("formatHora acepta valores TIME devueltos por el API", () => {
  assert.equal(formatHora("09:00:00"), "09:00")
  assert.equal(formatHora("14:30"), "14:30")
})

test("formatHora mantiene compatibilidad con fechas ISO", () => {
  assert.equal(formatHora("1970-01-01T18:45:00.000Z"), "18:45")
})

test("formatHora informa cuando el valor está vacío o no es válido", () => {
  assert.equal(formatHora(null), "Hora no disponible")
  assert.equal(formatHora(""), "Hora no disponible")
  assert.equal(formatHora("hora-invalida"), "Hora no disponible")
})

test("formatFecha presenta fechas en español y tolera valores inválidos", () => {
  assert.equal(formatFecha("2026-09-15"), "15 de septiembre de 2026")
  assert.equal(formatFecha("fecha-invalida"), "Fecha no disponible")
})

test("formatCrc presenta colones y tolera montos inválidos", () => {
  assert.match(formatCrc(12500), /₡12[\s\u00a0]500,00/)
  assert.equal(formatCrc("monto-invalido"), "Monto no disponible")
})

test("getNombreCompleto omite apellidos ausentes", () => {
  assert.equal(
    getNombreCompleto({ nombre: "Luis", primerApellido: "Castro" }),
    "Luis Castro",
  )
  assert.equal(getNombreCompleto(null), "Sin asignar")
})

test("citaMatchesSearch busca sin distinguir mayúsculas ni tildes", () => {
  const cita = {
    servicio: { nombre: "Auditoría de arquitectura - Virtual" },
    empleado: { usuario: { nombre: "Sofía", primerApellido: "Jiménez" } },
    cliente: { nombre: "Ana", primerApellido: "Rojas" },
    estadoCita: { nombre: "Finalizada" },
  }

  assert.equal(citaMatchesSearch(cita, "auditoria"), true)
  assert.equal(citaMatchesSearch(cita, "SOFIA"), true)
  assert.equal(citaMatchesSearch(cita, "pendiente"), false)
  assert.equal(citaMatchesSearch(cita, ""), true)
})
