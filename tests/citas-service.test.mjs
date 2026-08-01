import assert from "node:assert/strict"
import test from "node:test"

import {
  CitasApiError,
  getCitaById,
  getCitas,
} from "../src/services/citasService.js"

test("getCitas requests the citas endpoint and returns its data", async () => {
  let requestedUrl
  const citas = [{ id: 7, servicio: { nombre: "Consultoría" } }]
  const fetchImpl = async (url, options) => {
    requestedUrl = url
    assert.equal(options.headers.Accept, "application/json")
    return new Response(JSON.stringify({ success: true, data: citas }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  }

  const result = await getCitas({
    baseUrl: "http://localhost:3000/",
    fetchImpl,
  })

  assert.equal(requestedUrl, "http://localhost:3000/citas")
  assert.deepEqual(result, citas)
})

test("getCitaById encodes the identifier", async () => {
  let requestedUrl
  const fetchImpl = async (url) => {
    requestedUrl = url
    return new Response(JSON.stringify({ success: true, data: { id: 12 } }))
  }

  await getCitaById("12/extra", {
    baseUrl: "http://localhost:3000",
    fetchImpl,
  })

  assert.equal(requestedUrl, "http://localhost:3000/citas/12%2Fextra")
})

test("the service exposes the HTTP status without leaking response details", async () => {
  const fetchImpl = async () =>
    new Response("database connection details", { status: 503 })

  await assert.rejects(
    () => getCitas({ baseUrl: "http://localhost:3000", fetchImpl }),
    (error) => {
      assert.ok(error instanceof CitasApiError)
      assert.equal(error.code, "HTTP_ERROR")
      assert.equal(error.status, 503)
      assert.equal(error.message, "No se pudieron cargar las citas.")
      assert.doesNotMatch(error.message, /database/i)
      return true
    },
  )
})

test("the service rejects malformed successful responses", async () => {
  const fetchImpl = async () =>
    new Response(JSON.stringify({ success: true, data: null }), { status: 200 })

  await assert.rejects(
    () => getCitas({ baseUrl: "http://localhost:3000", fetchImpl }),
    (error) => error instanceof CitasApiError && error.code === "INVALID_RESPONSE",
  )
})
