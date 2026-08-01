import assert from "node:assert/strict"
import test from "node:test"

import {
  citaMatchesSearch,
  formatCrc,
  formatFecha,
  formatHora,
  getNombreCompleto,
} from "../src/lib/citaFormatters.js"

const cita = {
  fecha: "2026-09-18T00:00:00.000Z",
  horaInicio: "1970-01-01T09:30:00.000Z",
  costoTotal: "15000.00",
  servicio: { nombre: "Consultoría técnica" },
  empleado: {
    usuario: { nombre: "Ana", primerApellido: "Mora", segundoApellido: null },
  },
  cliente: { nombre: "Joshua", primerApellido: "Vargas" },
  estadoCita: { nombre: "Confirmada" },
}

test("formats API dates and times without timezone drift", () => {
  assert.match(formatFecha(cita.fecha), /18/)
  assert.equal(formatHora(cita.horaInicio), "09:30")
})

test("formats Costa Rican colones", () => {
  assert.match(formatCrc(cita.costoTotal), /15[\s.\u00a0]?000/)
})

test("builds full names without null fragments", () => {
  assert.equal(getNombreCompleto(cita.empleado.usuario), "Ana Mora")
})

test("searches across service, employee, client, and status", () => {
  assert.equal(citaMatchesSearch(cita, "consultoria"), true)
  assert.equal(citaMatchesSearch(cita, "ana mora"), true)
  assert.equal(citaMatchesSearch(cita, "joshua"), true)
  assert.equal(citaMatchesSearch(cita, "confirmada"), true)
  assert.equal(citaMatchesSearch(cita, "odontología"), false)
})
