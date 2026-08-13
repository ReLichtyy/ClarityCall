import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const projectUrl = new URL("../", import.meta.url)

test("the application exposes the home, appointment form, appointments, and team routes", async () => {
  const main = await readFile(new URL("src/main.jsx", projectUrl), "utf8")

  assert.match(main, /<Route path="\/" element={<App\s*\/>}>/)
  assert.match(main, /<Route index element={<HomePage\s*\/>}/)
  assert.match(main, /<Route path="AgendarCita" element={<NuevaCitaPage\s*\/>}/)
  assert.match(main, /<Route path="citas" element={<CitasPage\s*\/>}/)
  assert.match(main, /<Route path="team" element={<TeamPage\s*\/>}/)
  assert.doesNotMatch(main, /path="citas\/nueva"/)
})

test("navigation links point to the configured routes", async () => {
  const [navbar, homePage] = await Promise.all([
    readFile(new URL("src/components/Navbar.jsx", projectUrl), "utf8"),
    readFile(new URL("src/pages/HomePage.jsx", projectUrl), "utf8"),
  ])

  assert.match(navbar, /to="\/"/)
  assert.match(navbar, /to="\/citas"/)
  assert.match(navbar, /to="\/team"/)
  assert.match(navbar, /to="\/AgendarCita"/)
  assert.match(homePage, /to="\/citas"/)
  assert.match(homePage, /to="\/AgendarCita"/)
  assert.doesNotMatch(homePage, /to={[`'"]*events/)
})
