import { cn } from "@/lib/utils"

/**
 * Bloque de carga. La animación se desactiva sola bajo
 * prefers-reduced-motion por la regla global de index.css.
 */
function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn("animate-pulse rounded-lg bg-surface-elevated", className)}
      {...props}
    />
  )
}

export { Skeleton }
