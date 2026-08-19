import { Container } from "@/components/layout/Container"

const PILARES = [
  {
    titulo: "Contexto",
    detalle:
      "Compartes repo, stack y restricciones antes de la sesión. El mentor no llega en frío.",
  },
  {
    titulo: "Experiencia",
    detalle:
      "Quien te atiende ya tomó esa decisión en producción y vivió las consecuencias.",
  },
  {
    titulo: "Enfoque",
    detalle:
      "Un único problema por sesión. No es una revisión general de tu arquitectura.",
  },
  {
    titulo: "Acción",
    detalle:
      "Terminas con una decisión escrita, no con una lista de opciones.",
  },
]

/**
 * Cuatro columnas separadas por filetes finos. Sin iconos: la palabra
 * ya nombra el concepto y un icono solo repetiría lo mismo con ruido.
 */
export function PilaresValor() {
  return (
    <section
      aria-labelledby="pilares-titulo"
      className="border-b border-border-subtle py-20 sm:py-28"
    >
      <Container>
        <h2
          id="pilares-titulo"
          className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          No es solo una videollamada.
        </h2>

        <dl className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((pilar) => (
            <div
              key={pilar.titulo}
              className="border-border-subtle sm:px-6 sm:first:pl-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                {pilar.titulo}
              </dt>
              <dd className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
                {pilar.detalle}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
