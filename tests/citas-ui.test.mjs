import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const projectUrl = new URL("../", import.meta.url)

test("the application renders the citas page instead of the events page", async () => {
  const [app, page, card, navbar] = await Promise.all([
    readFile(new URL("src/App.jsx", projectUrl), "utf8"),
    readFile(new URL("src/pages/CitasPage.jsx", projectUrl), "utf8"),
    readFile(new URL("src/components/CitaCard.jsx", projectUrl), "utf8"),
    readFile(new URL("src/components/Navbar.jsx", projectUrl), "utf8"),
  ])

  assert.match(app, /CitasPage/)
  assert.match(page, /getCitas/)
  assert.match(card, /cita\.servicio/)
  assert.match(navbar, /Clarity[\s\S]*Call/)
  assert.doesNotMatch([app, page, card, navbar].join("\n"), /EventsPage|\/events/)
})
