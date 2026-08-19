/**
 * El modelo Especialidad del API no tiene campo slug: solo id, nombre,
 * descripcion y activo. Como el Backend no se puede modificar, el slug
 * se deriva del nombre aquí, en el FrontEnd.
 *
 * "Product Engineer / Business Analyst" -> "product-engineer-business-analyst"
 */
export function slugify(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/**
 * Busca en una colección el elemento cuyo nombre genera el slug indicado.
 * Devuelve null si ninguno coincide, para que la página pueda mostrar
 * un estado "no encontrada" en vez de reventar.
 */
export function buscarPorSlug(coleccion, slug) {
  if (!Array.isArray(coleccion) || !slug) return null
  const objetivo = slugify(slug)
  return coleccion.find((item) => slugify(item?.nombre) === objetivo) ?? null
}
