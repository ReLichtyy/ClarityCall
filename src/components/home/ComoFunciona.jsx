import PropTypes from "prop-types"

import { Container } from "@/components/layout/Container"

const PASOS = [
  {
    numero: "01",
    titulo: "Define tu bloqueo",
    detalle:
      "Escribes la decisión que tienes atascada y el contexto: stack, plazo y qué ya intentaste.",
  },
  {
    numero: "02",
    titulo: "Encuentra experiencia",
    detalle:
      "Filtras por especialidad y eliges a quien haya trabajado en ese terreno.",
  },
  {
    numero: "03",
    titulo: "Decide qué hacer",
    detalle:
      "Sales con una recomendación concreta y los pasos para ejecutarla.",
  },
]

/**
 * La numeración es una secuencia real, no adorno: no se puede encontrar
 * experiencia antes de haber definido el bloqueo. Por eso los pasos van
 * unidos por un conector continuo y no separados en tarjetas sueltas.
 */
export function ComoFunciona({ id = "como-funciona" }) {
  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-titulo`}
      className="border-b border-border-subtle py-20 focus:outline-none sm:py-28"
    >
      <Container>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
          Cómo funciona
        </p>

        <h2
          id={`${id}-titulo`}
          className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          De una duda a un plan claro.
        </h2>

        <ol className="mt-14 grid gap-y-12 sm:grid-cols-3 sm:gap-x-10">
          {PASOS.map((paso, indice) => {
            const esUltimo = indice === PASOS.length - 1

            return (
              <li key={paso.numero} className="relative pl-9 sm:pl-0 sm:pt-14">
                {/* Conector: vertical en móvil, horizontal en escritorio. */}
                {!esUltimo && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[7px] top-7 h-[calc(100%+1.5rem)] w-px bg-border-default sm:left-5 sm:-right-10 sm:top-[7px] sm:h-px sm:w-auto"
                  />
                )}

                {/* Nodo. */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background sm:top-0"
                />

                <p className="font-mono text-sm font-medium text-primary">
                  {paso.numero}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {paso.titulo}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
                  {paso.detalle}
                </p>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

ComoFunciona.propTypes = {
  id: PropTypes.string,
}
