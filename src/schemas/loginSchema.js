import { z } from "zod"

export const loginSchema = z.object({
    correo: z
        .string()
        .min(1, "El correo es obligatorio.")
        .email("El correo no tiene un formato válido."),
    password: z
        .string()
        .min(1, "La contraseña es obligatoria.")
})
