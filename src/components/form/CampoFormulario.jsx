import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

/**
 * Campo de formulario con etiqueta, ayuda y error asociados por id.
 *
 * El mensaje de error se enlaza con aria-describedby y el campo se marca
 * con aria-invalid, de modo que un lector de pantalla anuncie el fallo
 * al enfocar el control.
 */
export function CampoFormulario({
  id,
  etiqueta,
  ayuda,
  error,
  opcional = false,
  as = "input",
  className,
  children,
  ...props
}) {
  const idAyuda = ayuda ? `${id}-ayuda` : undefined
  const idError = error ? `${id}-error` : undefined
  const descrito = [idAyuda, idError].filter(Boolean).join(" ") || undefined

  const comunes = {
    id,
    name: id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": descrito,
    ...props,
  }

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {etiqueta}
        {opcional && (
          <span className="ml-1 font-normal text-text-muted">(opcional)</span>
        )}
      </label>

      {children ? (
        children(comunes)
      ) : as === "textarea" ? (
        <textarea
          {...comunes}
          className="min-h-28 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30"
        />
      ) : (
        <Input {...comunes} />
      )}

      {ayuda && (
        <p id={idAyuda} className="text-xs text-text-muted">
          {ayuda}
        </p>
      )}

      {error && (
        <p id={idError} className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
