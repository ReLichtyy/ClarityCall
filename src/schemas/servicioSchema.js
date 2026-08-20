import { z } from "zod"

const TAMANO_MAXIMO = 2 * 1024 * 1024 // 2 MB

const TIPOS_ACEPTADOS = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
]

// Espeja createServicioSchema del API, con una diferencia: aquí la imagen
// es obligatoria porque el enunciado dice que "cada servicio requiere una
// imagen representativa". El API la acepta nula; la interfaz no.
export const servicioSchema = z.object({
    nombre: z
        .string()
        .min(3, "El nombre debe tener al menos 3 caracteres.")
        .max(120, "El nombre no debe superar 120 caracteres."),
    descripcion: z
        .string()
        .min(10, "La descripción debe tener al menos 10 caracteres.")
        .max(500, "La descripción no debe superar 500 caracteres."),
    precioBase: z.coerce
        .number({ message: "El precio debe ser numérico." })
        .positive("El precio debe ser mayor a cero.")
        .max(99999999.99, "El precio no puede superar 99.999.999,99."),
    duracionMinutos: z.coerce
        .number({ message: "La duración debe ser numérica." })
        .int("La duración debe ser un número entero.")
        .min(15, "La duración mínima es de 15 minutos.")
        .max(480, "La duración no puede superar 480 minutos."),
    especialidadId: z.coerce
        .number()
        .int("Debe seleccionar una especialidad.")
        .min(1, "Debe seleccionar una especialidad."),
    imagen: z
        .any()
        .refine((files) => files?.length === 1, {
            message: "Debe seleccionar una imagen."
        })
        .refine((files) => files?.[0]?.size <= TAMANO_MAXIMO, {
            message: "La imagen no debe superar los 2 MB."
        })
        .refine((files) => TIPOS_ACEPTADOS.includes(files?.[0]?.type), {
            message: "Solo se permiten imágenes JPG, PNG o WEBP."
        })
})
