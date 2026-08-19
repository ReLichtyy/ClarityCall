import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"

export function CtaFinal() {
  return (
    <section aria-labelledby="cta-final-titulo" className="py-20 sm:py-28">
      <Container className="text-center">
        <h2
          id="cta-final-titulo"
          className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          El próximo bloqueo no tiene que costarte una semana.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-text-secondary">
          Elige la especialidad, reserva con quien ya pasó por ahí y sal de la
          sesión con una decisión tomada.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/reservar" className="group">
              Agendar sesión
              <ArrowRight
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link to="/especialidades">Ver especialidades</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
