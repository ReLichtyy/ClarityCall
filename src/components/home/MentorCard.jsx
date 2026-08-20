import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getNombreCompleto } from "@/lib/citaFormatters"

/**
 * Tarjeta de mentor.
 *
 * Todo lo que no sea el nombre se pinta solo si viene en la respuesta:
 * el servicio de directorio ahora tolera registros parciales, así que
 * aquí no se puede asumir especialidad, descripción ni servicios.
 */
export function MentorCard({ mentor }) {
  if (!mentor?.id) return null

  const nombre = getNombreCompleto(mentor.usuario)
  const servicios = Array.isArray(mentor.servicios) ? mentor.servicios : []

  return (
    <Card className="flex h-full flex-col border-border-subtle bg-surface transition-colors hover:bg-surface-hover">
      <CardHeader>
        {mentor.especialidad?.nombre && (
          <Badge variant="secondary" className="mb-3">
            {mentor.especialidad.nombre}
          </Badge>
        )}

        <CardTitle className="text-lg text-foreground">{nombre}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        {mentor.descripcion ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-text-secondary">
            {mentor.descripcion}
          </p>
        ) : (
          <p className="text-sm italic text-text-muted">
            Este mentor todavía no ha publicado su descripción.
          </p>
        )}

        {servicios.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {servicios.slice(0, 3).map((servicio) => (
              <li
                key={servicio.id}
                className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-text-muted"
              >
                {servicio.nombre}
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter>
        <Link
          to={`/mentores/${mentor.id}`}
          className="group inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Ver perfil
          <span className="sr-only"> de {nombre}</span>
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </CardFooter>
    </Card>
  )
}

MentorCard.propTypes = {
  mentor: PropTypes.shape({
    id: PropTypes.number,
    descripcion: PropTypes.string,
    usuario: PropTypes.object,
    especialidad: PropTypes.object,
    servicios: PropTypes.array,
  }),
}
