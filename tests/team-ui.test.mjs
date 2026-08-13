import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const projectUrl = new URL("../", import.meta.url)

test("TeamPage loads specialties and professors with accessible states", async () => {
  const source = await readFile(new URL("src/pages/TeamPage.jsx", projectUrl), "utf8")

  assert.match(source, /getEspecialidades/)
  assert.match(source, /getProfesores/)
  assert.match(source, /Promise\.all/)
  assert.match(source, /Cargando profesores/)
  assert.match(source, /role="status"/)
  assert.match(source, /aria-live="polite"/)
  assert.match(source, /role="alert"/)
  assert.match(source, /Reintentar/)
  assert.match(source, /role="group"/)
  assert.match(source, /aria-pressed=/)
})

test("TeamPage presents professor identity, specialty, and services", async () => {
  const source = await readFile(new URL("src/pages/TeamPage.jsx", projectUrl), "utf8")

  assert.match(source, /profesor\.usuario/)
  assert.match(source, /profesor\.especialidad/)
  assert.match(source, /profesor\.servicios/)
})
