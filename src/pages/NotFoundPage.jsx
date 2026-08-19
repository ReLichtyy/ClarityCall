import { Link } from "react-router-dom"
import { Compass } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-16 text-center"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface-elevated">
        <Compass className="h-7 w-7 text-primary" />
      </div>

      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-text-muted">
        Error 404
      </p>

      <h1
        id="not-found-title"
        className="mb-3 text-3xl font-extrabold tracking-tight text-foreground"
      >
        Página no encontrada
      </h1>

      <p className="mb-8 text-text-secondary">
        La página que buscas no existe o fue movida.
      </p>

      <Button asChild size="lg">
        <Link to="/">Volver al inicio</Link>
      </Button>
    </section>
  )
}
