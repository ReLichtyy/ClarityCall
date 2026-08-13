import assert from "node:assert/strict"
import test from "node:test"

import {
  DirectorioApiError,
  getEspecialidades,
  getProfesores,
} from "../src/services/teamService.js"

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

test("getEspecialidades loads the specialties collection", async () => {
  let requestedUrl
  const especialidades = [{ id: 1, nombre: "Matemática" }]

  const result = await getEspecialidades({
    baseUrl: "http://localhost:3000/",
    fetchImpl: async (url, options) => {
      requestedUrl = url
      assert.equal(options.headers.Accept, "application/json")
      return jsonResponse({ success: true, data: especialidades })
    },
  })

  assert.equal(requestedUrl, "http://localhost:3000/especialidades")
  assert.deepEqual(result, especialidades)
})

test("getProfesores loads only active employees", async () => {
  let requestedUrl
  const profesores = [{
    id: 4,
    especialidadId: 1,
    usuario: { nombre: "Ana" },
    especialidad: { id: 1, nombre: "Matemática" },
    servicios: [],
  }]

  const result = await getProfesores({
    baseUrl: "http://localhost:3000",
    fetchImpl: async (url) => {
      requestedUrl = url
      return jsonResponse({ success: true, data: profesores })
    },
  })

  assert.equal(requestedUrl, "http://localhost:3000/empleados/activos")
  assert.deepEqual(result, profesores)
})

test("team services reject malformed API payloads", async () => {
  await assert.rejects(
    () => getProfesores({ fetchImpl: async () => jsonResponse({ data: null }) }),
    (error) =>
      error instanceof DirectorioApiError &&
      error.code === "INVALID_RESPONSE",
  )
})

test("team services reject malformed nested professor data", async () => {
  await assert.rejects(
    () =>
      getProfesores({
        fetchImpl: async () =>
          jsonResponse({ success: true, data: [{ id: 1, usuario: null }] }),
      }),
    (error) =>
      error instanceof DirectorioApiError &&
      error.code === "INVALID_RESPONSE",
  )
})

test("team services preserve HTTP status and expose a safe message", async () => {
  await assert.rejects(
    () =>
      getEspecialidades({
        fetchImpl: async () => new Response("database details", { status: 503 }),
      }),
    (error) => {
      assert.ok(error instanceof DirectorioApiError)
      assert.equal(error.code, "HTTP_ERROR")
      assert.equal(error.status, 503)
      assert.doesNotMatch(error.message, /database/i)
      return true
    },
  )
})
