import { z } from "zod"

// Espeja registerClienteSchema del API. El Backend valida igual, pero el
// enunciado exige que las validaciones se vean en la interfaz.
export const registroSchema = z.object({
    nombre: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres.")
        .max(100, "El nombre no debe superar 100 caracteres."),
    primerApellido: z
        .string()
        .min(2, "El primer apellido debe tener al menos 2 caracteres.")
        .max(100, "El primer apellido no debe superar 100 caracteres."),
    segundoApellido: z
        .string()
        .max(100, "El segundo apellido no debe superar 100 caracteres.")
        .refine((value) => value === "" || value.trim().length >= 2, {
            message: "El segundo apellido debe tener al menos 2 caracteres."
        }),
    correo: z
        .string()
        .min(1, "El correo es obligatorio.")
        .email("El correo no tiene un formato válido.")
        .max(150, "El correo no debe superar 150 caracteres."),
    telefono: z
        .string()
        .refine((value) => value === "" || (value.trim().length >= 8 && value.trim().length <= 25), {
            message: "El teléfono debe tener entre 8 y 25 caracteres."
        })
        .refine((value) => value === "" || /^[0-9+\-()\s]+$/.test(value.trim()), {
            message: "El teléfono contiene caracteres no permitidos."
        }),
    password: z
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
        .max(100, "La contraseña no debe superar 100 caracteres.")
        .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula.")
        .regex(/[a-z]/, "La contraseña debe contener al menos una letra minúscula.")
        .regex(/[0-9]/, "La contraseña debe contener al menos un número.")
})
