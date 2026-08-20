import PropTypes from "prop-types"
import { Button } from "@/components/ui/button"

/**
 * Envoltorio de los tres estados obligatorios de una sección que
 * consume el API: cargando, error y vacío.
 *
 * El error queda contenido aquí dentro: si el API está apagado, solo
 * degrada esta franja y el resto de la página sigue en pie. Nunca
 * devuelve un hueco en blanco.
 */
export function EstadoSeccion({
  cargando,
  error,
  vacio,
  skeleton,
  mensajeVacio = "No hay información disponible por ahora.",
  onReintentar,
  children,
}) {
  if (cargando) {
    return skeleton ?? null
  }

  if (error) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-danger/30 bg-danger-subtle p-6 text-center"
      >
        <p className="text-sm text-danger">{error}</p>
        {onReintentar && (
          <Button variant="outline" className="mt-4" onClick={onReintentar}>
            Reintentar
          </Button>
        )}
      </div>
    )
  }

  if (vacio) {
    return (
      <p className="rounded-xl border border-border-subtle bg-surface p-6 text-center text-sm text-text-muted">
        {mensajeVacio}
      </p>
    )
  }

  return children
}

EstadoSeccion.propTypes = {
  cargando: PropTypes.bool,
  error: PropTypes.string,
  vacio: PropTypes.bool,
  skeleton: PropTypes.node,
  mensajeVacio: PropTypes.string,
  onReintentar: PropTypes.func,
  children: PropTypes.node,
}
