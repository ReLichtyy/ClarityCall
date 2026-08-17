export const especialidadesIniciales = [
    {
        nombre: "Front End",
        descripcion: "Interfaces web, accesibilidad, rendimiento y calidad de componentes.",
    },
    {
        nombre: "Product Engineer/Business Analyst",
        descripcion: "Descubrimiento de producto, requerimientos y alineación entre negocio y tecnología.",
    },
    {
        nombre: "Senior Tech Lead",
        descripcion: "Arquitectura, decisiones técnicas, escalabilidad y liderazgo de equipos de software.",
    },
    {
        nombre: "Ciberseguridad",
        descripcion: "Evaluación de riesgos, seguridad de aplicaciones y fortalecimiento de sistemas.",
    },
] as const;

export const usuariosIniciales = [
    {
        nombre: "Elena", primerApellido: "Mora", segundoApellido: "Vargas",
        correo: "empleado.demo@clarity.local", telefono: "87000001", rol: "Empleado",
        especialidadNombre: "Front End", codigoEmpleado: "EMP-FE-001",
        descripcionPerfil: "Mentora Front End especializada en React, accesibilidad y rendimiento web.",
    },
    {
        nombre: "Mateo", primerApellido: "Vega", segundoApellido: "Campos",
        correo: "product.demo@clarity.local", telefono: "87000004", rol: "Empleado",
        especialidadNombre: "Product Engineer/Business Analyst", codigoEmpleado: "EMP-PE-001",
        descripcionPerfil: "Product Engineer enfocado en convertir necesidades de negocio en soluciones entregables.",
    },
    {
        nombre: "Sofía", primerApellido: "Jiménez", segundoApellido: "Araya",
        correo: "techlead.demo@clarity.local", telefono: "87000005", rol: "Empleado",
        especialidadNombre: "Senior Tech Lead", codigoEmpleado: "EMP-TL-001",
        descripcionPerfil: "Tech Lead especializada en arquitectura evolutiva y decisiones técnicas de alto impacto.",
    },
    {
        nombre: "Diego", primerApellido: "Salas", segundoApellido: "Quesada",
        correo: "security.demo@clarity.local", telefono: "87000006", rol: "Empleado",
        especialidadNombre: "Ciberseguridad", codigoEmpleado: "EMP-CS-001",
        descripcionPerfil: "Consultor de seguridad de aplicaciones, análisis de vulnerabilidades y mitigación de riesgos.",
    },
    {
        nombre: "Ana", primerApellido: "Rojas", segundoApellido: "Solano",
        correo: "ana.demo@clarity.local", telefono: "87000002", rol: "Cliente",
        especialidadNombre: null, codigoEmpleado: null, descripcionPerfil: null,
    },
    {
        nombre: "Luis", primerApellido: "Castro", segundoApellido: null,
        correo: "luis.demo@clarity.local", telefono: "87000003", rol: "Cliente",
        especialidadNombre: null, codigoEmpleado: null, descripcionPerfil: null,
    },
] as const;

export const serviciosIniciales = [
    {
        tipoSesion: "Code Review Front End", modalidad: "Virtual",
        nombre: "Code Review Front End - Virtual",
        descripcion: "Revisión en vivo de componentes, accesibilidad, rendimiento y mantenibilidad del código Front End.",
        precioBase: 32000, duracionMinutos: 60, imagen: "mentoria-front-end.png",
        especialidadNombre: "Front End",
    },
    {
        tipoSesion: "Code Review Front End", modalidad: "Presencial",
        nombre: "Code Review Front End - Presencial",
        descripcion: "Revisión presencial de componentes, accesibilidad, rendimiento y mantenibilidad del código Front End.",
        precioBase: 38000, duracionMinutos: 60, imagen: "mentoria-front-end.png",
        especialidadNombre: "Front End",
    },
    {
        tipoSesion: "Definición de requerimientos", modalidad: "Virtual",
        nombre: "Definición de requerimientos - Virtual",
        descripcion: "Sesión para convertir objetivos de negocio en requerimientos claros, priorizados y verificables.",
        precioBase: 36000, duracionMinutos: 75, imagen: "mentoria-product-engineering.png",
        especialidadNombre: "Product Engineer/Business Analyst",
    },
    {
        tipoSesion: "Definición de requerimientos", modalidad: "Presencial",
        nombre: "Definición de requerimientos - Presencial",
        descripcion: "Taller presencial para alinear objetivos, alcance, dependencias y criterios de aceptación del producto.",
        precioBase: 42000, duracionMinutos: 90, imagen: "mentoria-product-engineering.png",
        especialidadNombre: "Product Engineer/Business Analyst",
    },
    {
        tipoSesion: "Auditoría de arquitectura", modalidad: "Virtual",
        nombre: "Auditoría de arquitectura - Virtual",
        descripcion: "Evaluación remota de arquitectura, límites de dominio, escalabilidad y deuda técnica prioritaria.",
        precioBase: 48000, duracionMinutos: 90, imagen: "mentoria-tech-lead.png",
        especialidadNombre: "Senior Tech Lead",
    },
    {
        tipoSesion: "Auditoría de arquitectura", modalidad: "Presencial",
        nombre: "Auditoría de arquitectura - Presencial",
        descripcion: "Taller presencial de arquitectura con revisión de decisiones, riesgos y plan técnico de evolución.",
        precioBase: 56000, duracionMinutos: 120, imagen: "mentoria-tech-lead.png",
        especialidadNombre: "Senior Tech Lead",
    },
    {
        tipoSesion: "Pentest básico", modalidad: "Virtual",
        nombre: "Pentest básico - Virtual",
        descripcion: "Revisión guiada de superficie de ataque, controles básicos y vulnerabilidades comunes de la aplicación.",
        precioBase: 45000, duracionMinutos: 90, imagen: "mentoria-ciberseguridad.png",
        especialidadNombre: "Ciberseguridad",
    },
    {
        tipoSesion: "Pentest básico", modalidad: "Presencial",
        nombre: "Pentest básico - Presencial",
        descripcion: "Evaluación presencial inicial de exposición, configuración, controles y acciones de mitigación.",
        precioBase: 52000, duracionMinutos: 120, imagen: "mentoria-ciberseguridad.png",
        especialidadNombre: "Ciberseguridad",
    },
] as const;

export const serviciosMedicosObsoletos = [
    "Consulta general", "Terapia física", "Masaje terapéutico",
] as const;

export const horariosIniciales = [1, 2, 3, 4, 5, 6, 7].map((numeroDia) => ({
    numeroDia, horaInicio: "08:00", horaFin: "18:00",
}));

export const citasIniciales = [
    {
        clienteCorreo: "ana.demo@clarity.local", empleadoCorreo: "empleado.demo@clarity.local",
        servicioNombre: "Code Review Front End - Virtual", estadoNombre: "Pendiente",
        fecha: "2026-09-15", horaInicio: "09:00", horaFin: "10:00",
        observaciones: "Revisar estructura de componentes, accesibilidad y rendimiento de la aplicación.",
    },
    {
        clienteCorreo: "luis.demo@clarity.local", empleadoCorreo: "product.demo@clarity.local",
        servicioNombre: "Definición de requerimientos - Presencial", estadoNombre: "Confirmada",
        fecha: "2026-09-16", horaInicio: "10:00", horaFin: "11:30",
        observaciones: "Alinear alcance, historias de usuario y criterios de aceptación del MVP.",
    },
    {
        clienteCorreo: "ana.demo@clarity.local", empleadoCorreo: "techlead.demo@clarity.local",
        servicioNombre: "Auditoría de arquitectura - Virtual", estadoNombre: "Finalizada",
        fecha: "2026-09-17", horaInicio: "14:00", horaFin: "15:30",
        observaciones: "Evaluar límites de dominio, observabilidad y estrategia de escalabilidad.",
    },
    {
        clienteCorreo: "luis.demo@clarity.local", empleadoCorreo: "security.demo@clarity.local",
        servicioNombre: "Pentest básico - Presencial", estadoNombre: "Confirmada",
        fecha: "2026-09-18", horaInicio: "11:00", horaFin: "13:00",
        observaciones: "Revisar autenticación, permisos y exposición de endpoints críticos.",
    },
] as const;
