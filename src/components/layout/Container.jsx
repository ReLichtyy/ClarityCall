import { cn } from "@/lib/utils"

/**
 * Contenedor de ancho fijo para las páginas internas.
 *
 * App.jsx ya no impone ancho: cada página decide el suyo, de modo que
 * el hero pueda ir a sangre completa y el resto mantenga la medida.
 */
export function Container({ as: Etiqueta = "div", size = "default", className, children, ...props }) {
  const anchos = {
    default: "max-w-5xl",
    wide: "max-w-6xl",
    narrow: "max-w-3xl",
  }

  return (
    <Etiqueta
      className={cn("mx-auto w-full px-4 sm:px-6", anchos[size] ?? anchos.default, className)}
      {...props}
    >
      {children}
    </Etiqueta>
  )
}

/**
 * Container + separación vertical, para el cuerpo de las páginas internas.
 */
export function PageContainer({ className, children, ...props }) {
  return (
    <Container className={cn("py-10 sm:py-14", className)} {...props}>
      {children}
    </Container>
  )
}
