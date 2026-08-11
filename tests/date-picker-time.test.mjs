import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const projectUrl = new URL("../", import.meta.url)

test("the appointment form uses the controlled date and time component", async () => {
  const form = await readFile(
    new URL("src/components/FormularioCita.jsx", projectUrl),
    "utf8",
  )

  assert.match(form, /import { DatePickerTime }/)
  assert.match(form, /<DatePickerTime/)
  assert.match(form, /date={formData\.fecha}/)
  assert.match(form, /time={formData\.hora}/)
  assert.match(form, /onChange={handleChange}/)
})

test("the date and time component exposes labeled controlled inputs and errors", async () => {
  const component = await readFile(
    new URL("src/components/ui/time.jsx", projectUrl),
    "utf8",
  )

  assert.match(component, /htmlFor="fecha"/)
  assert.match(component, /name="fecha"/)
  assert.match(component, /type="date"/)
  assert.match(component, /value={date}/)
  assert.match(component, /htmlFor="hora"/)
  assert.match(component, /name="hora"/)
  assert.match(component, /type="time"/)
  assert.match(component, /value={time}/)
  assert.match(component, /aria-invalid={Boolean\(dateError\)}/)
  assert.match(component, /aria-invalid={Boolean\(timeError\)}/)
})
