import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ArrowDown, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"

/**
 * Constelación de fondo. Los nodos se concentran en los tercios laterales
 * para no restarle protagonismo al texto, que ocupa el centro.
 *
 * Es el mismo lenguaje de nodo y línea que la sección "Cómo funciona"
 * resuelve luego en una secuencia legible: aquí la red está insinuada,
 * ahí queda ordenada.
 */
const NODOS = [
  { cx: 90, cy: 120 }, { cx: 210, cy: 250 }, { cx: 140, cy: 400 },
  { cx: 300, cy: 90 }, { cx: 255, cy: 500 }, { cx: 40, cy: 300 },
  { cx: 1110, cy: 140 }, { cx: 990, cy: 260 }, { cx: 1060, cy: 420 },
  { cx: 900, cy: 100 }, { cx: 945, cy: 520 }, { cx: 1160, cy: 320 },
]

const ARISTAS = [
  [0, 1], [1, 2], [0, 3], [2, 4], [5, 1], [5, 2],
  [6, 7], [7, 8], [6, 9], [8, 10], [11, 7], [11, 8],
]

function Constelacion() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-primary"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.14">
        {ARISTAS.map(([desde, hasta]) => (
          <line
            key={`${desde}-${hasta}`}
            x1={NODOS[desde].cx}
            y1={NODOS[desde].cy}
            x2={NODOS[hasta].cx}
            y2={NODOS[hasta].cy}
          />
        ))}
      </g>
      <g fill="currentColor" opacity="0.3">
        {NODOS.map((nodo) => (
          <circle key={`${nodo.cx}-${nodo.cy}`} cx={nodo.cx} cy={nodo.cy} r="2.5" />
        ))}
      </g>
    </svg>
  )
}

export function Hero({ idSiguienteSeccion = "como-funciona" }) {
  function irASiguiente(evento) {
    evento.preventDefault()
    const destino = document.getElementById(idSiguienteSeccion)
    if (!destino) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    destino.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
    destino.focus({ preventScroll: true })
  }

  return (
    <section className="relative isolate overflow-hidden border-b border-border-subtle">
      <Constelacion />

      <Container className="relative flex min-h-[78vh] flex-col items-center justify-center py-20 text-center sm:py-28">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted sm:text-xs">
          Mentoría 1:1 para developers
        </p>

        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Convierte bloqueos técnicos en decisiones claras.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
          Reserva una sesión con alguien que ya tomó esa decisión en producción.
          Un solo tema por sesión, y una decisión escrita al final.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link to="/team" className="group">
              Explorar mentores
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href={`#${idSiguienteSeccion}`} onClick={irASiguiente}>
              Cómo funciona
            </a>
          </Button>
        </div>

        <a
          href={`#${idSiguienteSeccion}`}
          onClick={irASiguiente}
          className="mt-16 inline-flex flex-col items-center gap-2 rounded-lg px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span>Seguir</span>
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </Container>
    </section>
  )
}

Hero.propTypes = {
  idSiguienteSeccion: PropTypes.string,
}
