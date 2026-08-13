import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const serviceUrl = new URL(
  "../api-citas/api/src/services/especialidad.service.ts",
  import.meta.url,
)

test("specialties never expose complete user records", async () => {
  const source = await readFile(serviceUrl, "utf8")

  assert.doesNotMatch(source, /include:\s*{\s*usuario:\s*true/)
  assert.match(source, /usuario:\s*{\s*select:/)
  assert.doesNotMatch(source, /passwordHash:\s*true/)
})
