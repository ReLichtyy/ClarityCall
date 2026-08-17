export const usuariosIniciales = [
    {
        nombre: "Elena",
        primerApellido: "Mora",
        segundoApellido: "Vargas",
        correo: "empleado.demo@clarity.local",
        telefono: "87000001",
        rol: "Empleado",
    },
    {
        nombre: "Ana",
        primerApellido: "Rojas",
        segundoApellido: "Solano",
        correo: "ana.demo@clarity.local",
        telefono: "87000002",
        rol: "Cliente",
    },
    {
        nombre: "Luis",
        primerApellido: "Castro",
        segundoApellido: null,
        correo: "luis.demo@clarity.local",
        telefono: "87000003",
        rol: "Cliente",
    },
] as const;

export const serviciosIniciales = [
    {
        nombre: "Consulta general",
        descripcion: "Valoración inicial y recomendación del tratamiento adecuado.",
        precioBase: 18000,
        duracionMinutos: 45,
        imagen: "image-not-found.jpg",
    },
    {
        nombre: "Terapia física",
        descripcion: "Sesión personalizada para recuperación y movilidad física.",
        precioBase: 25000,
        duracionMinutos: 60,
        imagen: "image-not-found.jpg",
    },
    {
        nombre: "Masaje terapéutico",
        descripcion: "Masaje enfocado en aliviar tensión muscular y mejorar el bienestar.",
        precioBase: 22000,
        duracionMinutos: 60,
        imagen: "image-not-found.jpg",
    },
] as const;

export const horariosIniciales = [1, 2, 3, 4, 5, 6, 7].map((numeroDia) => ({
    numeroDia,
    horaInicio: "08:00",
    horaFin: "18:00",
}));

export const citasIniciales = [
    {
        clienteCorreo: "ana.demo@clarity.local",
        empleadoCorreo: "empleado.demo@clarity.local",
        servicioNombre: "Consulta general",
        estadoNombre: "Pendiente",
        fecha: "2026-09-15",
        horaInicio: "09:00",
        horaFin: "09:45",
        observaciones: "Primera cita de valoración.",
    },
    {
        clienteCorreo: "luis.demo@clarity.local",
        empleadoCorreo: "empleado.demo@clarity.local",
        servicioNombre: "Terapia física",
        estadoNombre: "Confirmada",
        fecha: "2026-09-16",
        horaInicio: "10:00",
        horaFin: "11:00",
        observaciones: "Seguimiento de movilidad de hombro.",
    },
    {
        clienteCorreo: "ana.demo@clarity.local",
        empleadoCorreo: "empleado.demo@clarity.local",
        servicioNombre: "Masaje terapéutico",
        estadoNombre: "Finalizada",
        fecha: "2026-09-17",
        horaInicio: "14:00",
        horaFin: "15:00",
        observaciones: "Cita de demostración para la vista de historial.",
    },
] as const;
