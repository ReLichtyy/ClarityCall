import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const projectUrl = new URL("../", import.meta.url)

test("the global theme exposes the Clarity Call color palette", async () => {
  const css = await readFile(new URL("src/index.css", projectUrl), "utf8")
  const expectedTokens = {
    background: "#070812",
    sidebar: "#10101A",
    surface: "#0D1520",
    "surface-elevated": "#111829",
    "surface-hover": "#162335",
    "surface-active": "#192444",
    "border-subtle": "#182434",
    "border-default": "#243247",
    "border-strong": "#344765",
    "border-focus": "#5BBCFF",
    "text-primary": "#F3F6FA",
    "text-secondary": "#A6B1C2",
    "text-muted": "#6F7091",
    "text-disabled": "#465367",
    primary: "#5BBCFF",
    success: "#46CD9A",
    warning: "#E28B48",
    danger: "#F07178",
    info: "#6BA7FF",
  }

  for (const [token, value] of Object.entries(expectedTokens)) {
    assert.match(css, new RegExp(`--${token}:\\s*${value}`, "i"))
  }
})

test("application states use semantic theme colors", async () => {
  const files = [
    "src/components/Footer.jsx",
    "src/pages/CitasPage.jsx",
  ]
  const contents = await Promise.all(
    files.map((file) => readFile(new URL(file, projectUrl), "utf8")),
  )
  const source = contents.join("\n")

  assert.doesNotMatch(
    source,
    /(?:bg|text|border)-(?:gray|red|white|black)-\d{2,3}|text-white/,
  )
})
