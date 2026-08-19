/**
 * Datos iniciales de ClarityCall.
 *
 * Plataforma de agendamiento de sesiones de consultoría en tecnología.
 *
 * IMPORTANTE: los correos, los códigos de empleado, los nombres de las
 * especialidades y los nombres de los ocho servicios originales se
 * conservan exactamente como estaban. Este archivo solo AGREGA lo que
 * faltaba para cumplir los mínimos del enunciado, de modo que el seeder
 * pueda ejecutarse sobre una base ya poblada sin duplicar registros ni
 * romper referencias existentes.
 *
 * Cobertura de los mínimos:
 *
 *   Especialidades .............. 4   (mínimo 3)
 *   Profesionales ............... 4   (mínimo 3)
 *   Clientes .................... 4   (mínimo 2)
 *   Servicios ................... 16  (8 originales + 8 nuevos)
 *   Servicios por profesional ... 4-5 (mínimo 3, máximo 5)
 *   Servicios adicionales ....... 9   (mínimo 8)
 *   Restricciones ............... 9   (2 generales, 4 de empleado,
 *                                      2 parciales, 1 de día completo)
 *   Citas ....................... 13  (4 pendientes, 4 confirmadas,
 *                                      3 finalizadas, 2 canceladas)
 *
 * Notas de diseño:
 *
 * - La modalidad (Virtual / Presencial) no existe como campo en el API.
 *   Se modela como servicios separados, con la modalidad en el nombre,
 *   tal como ya lo hacían los servicios originales.
 * - Las citas finalizadas y una de las canceladas usan fechas pasadas.
 *   El seeder escribe con Prisma directo, así que no le aplica la
 *   validación de fecha futura del DTO de citas.
 * - Ninguna cita se traslapa con otra del mismo profesional ni cae dentro
 *   de una restricción activa.
 */

/* ------------------------------------------------------------------ */
/* Especialidades                                                      */
/* ------------------------------------------------------------------ */

export const especialidadesIniciales = [
    {
        nombre: "Front End",
        descripcion:
            "Interfaces web, accesibilidad, rendimiento y calidad de componentes.",
    },
    {
        nombre: "Product Engineer/Business Analyst",
        descripcion:
            "Descubrimiento de producto, requerimientos y alineación entre negocio y tecnología.",
    },
    {
        nombre: "Senior Tech Lead",
        descripcion:
            "Arquitectura, decisiones técnicas, escalabilidad y liderazgo de equipos de software.",
    },
    {
        nombre: "Ciberseguridad",
        descripcion:
            "Evaluación de riesgos, seguridad de aplicaciones y fortalecimiento de sistemas.",
    },
] as const;

/* ------------------------------------------------------------------ */
/* Usuarios                                                            */
/* ------------------------------------------------------------------ */

/**
 * Los seis primeros conservan su correo original. Se agregan dos clientes
 * para poder repartir mejor las trece citas.
 */
export const usuariosIniciales = [
    {
        nombre: "Elena",
        primerApellido: "Mora",
        segundoApellido: "Vargas",
        correo: "empleado.demo@clarity.local",
        telefono: "87000001",
        rol: "Empleado",
        especialidadNombre: "Front End",
        codigoEmpleado: "EMP-FE-001",
        descripcionPerfil:
            "Mentora Front End especializada en React, accesibilidad y rendimiento web.",
    },
    {
        nombre: "Mateo",
        primerApellido: "Vega",
        segundoApellido: "Campos",
        correo: "product.demo@clarity.local",
        telefono: "87000004",
        rol: "Empleado",
        especialidadNombre: "Product Engineer/Business Analyst",
        codigoEmpleado: "EMP-PE-001",
        descripcionPerfil:
            "Product Engineer enfocado en convertir necesidades de negocio en soluciones entregables.",
    },
    {
        nombre: "Sofía",
        primerApellido: "Jiménez",
        segundoApellido: "Araya",
        correo: "techlead.demo@clarity.local",
        telefono: "87000005",
        rol: "Empleado",
        especialidadNombre: "Senior Tech Lead",
        codigoEmpleado: "EMP-TL-001",
        descripcionPerfil:
            "Tech Lead especializada en arquitectura evolutiva y decisiones técnicas de alto impacto.",
    },
    {
        nombre: "Diego",
        primerApellido: "Salas",
        segundoApellido: "Quesada",
        correo: "security.demo@clarity.local",
        telefono: "87000006",
        rol: "Empleado",
        especialidadNombre: "Ciberseguridad",
        codigoEmpleado: "EMP-CS-001",
        descripcionPerfil:
            "Consultor de seguridad de aplicaciones, análisis de vulnerabilidades y mitigación de riesgos.",
    },
    {
        nombre: "Ana",
        primerApellido: "Rojas",
        segundoApellido: "Solano",
        correo: "ana.demo@clarity.local",
        telefono: "87000002",
        rol: "Cliente",
        especialidadNombre: null,
        codigoEmpleado: null,
        descripcionPerfil: null,
    },
    {
        nombre: "Luis",
        primerApellido: "Castro",
        segundoApellido: null,
        correo: "luis.demo@clarity.local",
        telefono: "87000003",
        rol: "Cliente",
        especialidadNombre: null,
        codigoEmpleado: null,
        descripcionPerfil: null,
    },
    {
        nombre: "Carolina",
        primerApellido: "Núñez",
        segundoApellido: "Brenes",
        correo: "carolina.demo@clarity.local",
        telefono: "87000007",
        rol: "Cliente",
        especialidadNombre: null,
        codigoEmpleado: null,
        descripcionPerfil: null,
    },
    {
        nombre: "Andrés",
        primerApellido: "Fallas",
        segundoApellido: "Ureña",
        correo: "andres.demo@clarity.local",
        telefono: "87000008",
        rol: "Cliente",
        especialidadNombre: null,
        codigoEmpleado: null,
        descripcionPerfil: null,
    },
] as const;

/* ------------------------------------------------------------------ */
/* Servicios                                                           */
/* ------------------------------------------------------------------ */

/**
 * Los ocho primeros son los originales, sin cambios en nombre, precio,
 * duración ni imagen. Los ocho siguientes son nuevos y existen para que
 * cada profesional alcance el mínimo de tres servicios asignados.
 */
export const serviciosIniciales = [
    // --- Front End (originales) ---
    {
        tipoSesion: "Code Review Front End",
        modalidad: "Virtual",
        nombre: "Code Review Front End - Virtual",
        descripcion:
            "Revisión en vivo de componentes, accesibilidad, rendimiento y mantenibilidad del código Front End.",
        precioBase: 32000,
        duracionMinutos: 60,
        imagen: "mentoria-front-end.png",
        especialidadNombre: "Front End",
    },
    {
        tipoSesion: "Code Review Front End",
        modalidad: "Presencial",
        nombre: "Code Review Front End - Presencial",
        descripcion:
            "Revisión presencial de componentes, accesibilidad, rendimiento y mantenibilidad del código Front End.",
        precioBase: 38000,
        duracionMinutos: 60,
        imagen: "mentoria-front-end.png",
        especialidadNombre: "Front End",
    },

    // --- Front End (nuevos) ---
    {
        tipoSesion: "Auditoría de accesibilidad",
        modalidad: "Virtual",
        nombre: "Auditoría de accesibilidad - Virtual",
        descripcion:
            "Evaluación de contraste, navegación por teclado, semántica y compatibilidad con lectores de pantalla.",
        precioBase: 35000,
        duracionMinutos: 60,
        imagen: "mentoria-front-end.png",
        especialidadNombre: "Front End",
    },
    {
        tipoSesion: "Auditoría de accesibilidad",
        modalidad: "Presencial",
        nombre: "Auditoría de accesibilidad - Presencial",
        descripcion:
            "Auditoría presencial de accesibilidad con pruebas asistidas y plan de corrección priorizado.",
        precioBase: 43000,
        duracionMinutos: 90,
        imagen: "mentoria-front-end.png",
        especialidadNombre: "Front End",
    },

    // --- Product Engineer / Business Analyst (originales) ---
    {
        tipoSesion: "Definición de requerimientos",
        modalidad: "Virtual",
        nombre: "Definición de requerimientos - Virtual",
        descripcion:
            "Sesión para convertir objetivos de negocio en requerimientos claros, priorizados y verificables.",
        precioBase: 36000,
        duracionMinutos: 75,
        imagen: "mentoria-product-engineering.png",
        especialidadNombre: "Product Engineer/Business Analyst",
    },
    {
        tipoSesion: "Definición de requerimientos",
        modalidad: "Presencial",
        nombre: "Definición de requerimientos - Presencial",
        descripcion:
            "Taller presencial para alinear objetivos, alcance, dependencias y criterios de aceptación del producto.",
        precioBase: 42000,
        duracionMinutos: 90,
        imagen: "mentoria-product-engineering.png",
        especialidadNombre: "Product Engineer/Business Analyst",
    },

    // --- Product Engineer / Business Analyst (nuevos) ---
    {
        tipoSesion: "Priorización de backlog",
        modalidad: "Virtual",
        nombre: "Priorización de backlog - Virtual",
        descripcion:
            "Ordenamiento del backlog por valor, riesgo y esfuerzo, con criterios explícitos de decisión.",
        precioBase: 30000,
        duracionMinutos: 45,
        imagen: "mentoria-product-engineering.png",
        especialidadNombre: "Product Engineer/Business Analyst",
    },
    {
        tipoSesion: "Priorización de backlog",
        modalidad: "Presencial",
        nombre: "Priorización de backlog - Presencial",
        descripcion:
            "Sesión presencial de priorización con el equipo completo y acuerdo sobre el siguiente incremento.",
        precioBase: 37000,
        duracionMinutos: 60,
        imagen: "mentoria-product-engineering.png",
        especialidadNombre: "Product Engineer/Business Analyst",
    },

    // --- Senior Tech Lead (originales) ---
    {
        tipoSesion: "Auditoría de arquitectura",
        modalidad: "Virtual",
        nombre: "Auditoría de arquitectura - Virtual",
        descripcion:
            "Evaluación remota de arquitectura, límites de dominio, escalabilidad y deuda técnica prioritaria.",
        precioBase: 48000,
        duracionMinutos: 90,
        imagen: "mentoria-tech-lead.png",
        especialidadNombre: "Senior Tech Lead",
    },
    {
        tipoSesion: "Auditoría de arquitectura",
        modalidad: "Presencial",
        nombre: "Auditoría de arquitectura - Presencial",
        descripcion:
            "Taller presencial de arquitectura con revisión de decisiones, riesgos y plan técnico de evolución.",
        precioBase: 56000,
        duracionMinutos: 120,
        imagen: "mentoria-tech-lead.png",
        especialidadNombre: "Senior Tech Lead",
    },

    // --- Senior Tech Lead (nuevos) ---
    {
        tipoSesion: "Mentoría de liderazgo técnico",
        modalidad: "Virtual",
        nombre: "Mentoría de liderazgo técnico - Virtual",
        descripcion:
            "Acompañamiento para tech leads: delegación, revisión de código, conflictos y decisiones difíciles.",
        precioBase: 40000,
        duracionMinutos: 60,
        imagen: "mentoria-tech-lead.png",
        especialidadNombre: "Senior Tech Lead",
    },
    {
        tipoSesion: "Mentoría de liderazgo técnico",
        modalidad: "Presencial",
        nombre: "Mentoría de liderazgo técnico - Presencial",
        descripcion:
            "Sesión presencial de liderazgo técnico con observación del equipo y recomendaciones concretas.",
        precioBase: 47000,
        duracionMinutos: 60,
        imagen: "mentoria-tech-lead.png",
        especialidadNombre: "Senior Tech Lead",
    },

    // --- Ciberseguridad (originales) ---
    {
        tipoSesion: "Pentest básico",
        modalidad: "Virtual",
        nombre: "Pentest básico - Virtual",
        descripcion:
            "Revisión guiada de superficie de ataque, controles básicos y vulnerabilidades comunes de la aplicación.",
        precioBase: 45000,
        duracionMinutos: 90,
        imagen: "mentoria-ciberseguridad.png",
        especialidadNombre: "Ciberseguridad",
    },
    {
        tipoSesion: "Pentest básico",
        modalidad: "Presencial",
        nombre: "Pentest básico - Presencial",
        descripcion:
            "Evaluación presencial inicial de exposición, configuración, controles y acciones de mitigación.",
        precioBase: 52000,
        duracionMinutos: 120,
        imagen: "mentoria-ciberseguridad.png",
        especialidadNombre: "Ciberseguridad",
    },

    // --- Ciberseguridad (nuevos) ---
    {
        tipoSesion: "Revisión de autenticación y permisos",
        modalidad: "Virtual",
        nombre: "Revisión de autenticación y permisos - Virtual",
        descripcion:
            "Análisis del modelo de sesión, tokens, roles y control de acceso a endpoints sensibles.",
        precioBase: 42000,
        duracionMinutos: 60,
        imagen: "mentoria-ciberseguridad.png",
        especialidadNombre: "Ciberseguridad",
    },
    {
        tipoSesion: "Revisión de autenticación y permisos",
        modalidad: "Presencial",
        nombre: "Revisión de autenticación y permisos - Presencial",
        descripcion:
            "Revisión presencial del control de acceso con pruebas sobre el ambiente real del cliente.",
        precioBase: 50000,
        duracionMinutos: 90,
        imagen: "mentoria-ciberseguridad.png",
        especialidadNombre: "Ciberseguridad",
    },
] as const;

/**
 * Servicios que cada profesional puede atender.
 *
 * Elena tiene un servicio de otra especialidad para demostrar la
 * asignación cruzada desde el formulario de empleados. Ninguno supera
 * el máximo de cinco.
 *
 * Los servicios que NO aparecen aquí sirven para demostrar el rechazo por
 * servicio no asignado al profesional durante el registro de una cita.
 */
export const serviciosPorEmpleado = [
    {
        empleadoCorreo: "empleado.demo@clarity.local",
        serviciosNombres: [
            "Code Review Front End - Virtual",
            "Code Review Front End - Presencial",
            "Auditoría de accesibilidad - Virtual",
            "Auditoría de accesibilidad - Presencial",
            "Priorización de backlog - Virtual",
        ],
    },
    {
        empleadoCorreo: "product.demo@clarity.local",
        serviciosNombres: [
            "Definición de requerimientos - Virtual",
            "Definición de requerimientos - Presencial",
            "Priorización de backlog - Virtual",
            "Priorización de backlog - Presencial",
        ],
    },
    {
        empleadoCorreo: "techlead.demo@clarity.local",
        serviciosNombres: [
            "Auditoría de arquitectura - Virtual",
            "Auditoría de arquitectura - Presencial",
            "Mentoría de liderazgo técnico - Virtual",
            "Mentoría de liderazgo técnico - Presencial",
        ],
    },
    {
        empleadoCorreo: "security.demo@clarity.local",
        serviciosNombres: [
            "Pentest básico - Virtual",
            "Pentest básico - Presencial",
            "Revisión de autenticación y permisos - Virtual",
            "Revisión de autenticación y permisos - Presencial",
        ],
    },
] as const;

/* ------------------------------------------------------------------ */
/* Servicios adicionales                                               */
/* ------------------------------------------------------------------ */

/**
 * Los adicionales incrementan el costo total de la cita,
 * pero no modifican su duración ni su hora de finalización.
 */
export const adicionalesIniciales = [
    {
        nombre: "Reporte escrito de la sesión",
        descripcion:
            "Documento con hallazgos, recomendaciones y próximos pasos, entregado en 48 horas.",
        precio: 15000,
    },
    {
        nombre: "Grabación de la sesión",
        descripcion:
            "Grabación en video de la sesión completa, disponible por 90 días.",
        precio: 10000,
    },
    {
        nombre: "Seguimiento por Slack (1 semana)",
        descripcion:
            "Canal compartido durante siete días para dudas puntuales posteriores a la sesión.",
        precio: 20000,
    },
    {
        nombre: "Traducción simultánea",
        descripcion:
            "Intérprete español-inglés durante toda la sesión, para equipos distribuidos.",
        precio: 25000,
    },
    {
        nombre: "Resumen ejecutivo para stakeholders",
        descripcion:
            "Versión de una página con el impacto de negocio, dirigida a quien toma decisiones.",
        precio: 18000,
    },
    {
        nombre: "Plan de acción priorizado",
        descripcion:
            "Lista ordenada de tareas con esfuerzo estimado y criterio de priorización explícito.",
        precio: 22000,
    },
    {
        nombre: "Sesión de seguimiento de 30 minutos",
        descripcion:
            "Llamada corta dentro del mes siguiente para revisar avances y ajustar el plan.",
        precio: 28000,
    },
    {
        nombre: "Revisión asincrónica de pull requests",
        descripcion:
            "Revisión escrita de hasta cinco pull requests durante la semana posterior a la sesión.",
        precio: 24000,
    },
    {
        nombre: "Documentación técnica de decisiones",
        descripcion:
            "Registro formal de las decisiones tomadas, con contexto, alternativas y consecuencias.",
        precio: 19000,
    },
] as const;

/* ------------------------------------------------------------------ */
/* Horarios de atención                                                */
/* ------------------------------------------------------------------ */

/**
 * Horario general compartido por todos los profesionales.
 *
 * El domingo queda inactivo a propósito: permite demostrar que el sistema
 * impide crear citas en un día sin atención. El sábado tiene jornada
 * reducida.
 */
export const horariosIniciales = [
    { numeroDia: 1, horaInicio: "08:00", horaFin: "18:00", activo: true },
    { numeroDia: 2, horaInicio: "08:00", horaFin: "18:00", activo: true },
    { numeroDia: 3, horaInicio: "08:00", horaFin: "18:00", activo: true },
    { numeroDia: 4, horaInicio: "08:00", horaFin: "18:00", activo: true },
    { numeroDia: 5, horaInicio: "08:00", horaFin: "18:00", activo: true },
    { numeroDia: 6, horaInicio: "09:00", horaFin: "13:00", activo: true },
    { numeroDia: 7, horaInicio: "08:00", horaFin: "18:00", activo: false },
] as const;

/* ------------------------------------------------------------------ */
/* Restricciones de horario                                            */
/* ------------------------------------------------------------------ */

/**
 * empleadoCorreo en null significa que la restricción aplica a toda la
 * plataforma. todoElDia en true ignora horaInicio y horaFin.
 *
 * Ninguna fecha coincide con una cita existente, y todas caen en días
 * hábiles del horario de atención para que el bloqueo sea demostrable.
 */
export const restriccionesIniciales = [
    // Generales del establecimiento
    {
        tipoNombre: "General del establecimiento",
        empleadoCorreo: null,
        fecha: "2026-10-12",
        horaInicio: null,
        horaFin: null,
        todoElDia: true,
        motivo: "Feriado nacional: Día de las Culturas",
    },
    {
        tipoNombre: "General del establecimiento",
        empleadoCorreo: null,
        fecha: "2026-12-24",
        horaInicio: "12:00",
        horaFin: "18:00",
        todoElDia: false,
        motivo: "Cierre especial de fin de año",
    },

    // Día completo
    {
        tipoNombre: "Día completo",
        empleadoCorreo: null,
        fecha: "2026-11-02",
        horaInicio: null,
        horaFin: null,
        todoElDia: true,
        motivo: "Mantenimiento programado de la plataforma",
    },

    // Parciales por horas
    {
        tipoNombre: "Parcial por horas",
        empleadoCorreo: null,
        fecha: "2026-09-22",
        horaInicio: "12:00",
        horaFin: "13:00",
        todoElDia: false,
        motivo: "Reunión general del equipo de consultores",
    },
    {
        tipoNombre: "Parcial por horas",
        empleadoCorreo: null,
        fecha: "2026-10-06",
        horaInicio: "08:00",
        horaFin: "10:00",
        todoElDia: false,
        motivo: "Capacitación interna sobre la plataforma",
    },

    // Específicas de empleado
    {
        tipoNombre: "Específica de empleado",
        empleadoCorreo: "empleado.demo@clarity.local",
        fecha: "2026-09-17",
        horaInicio: "09:00",
        horaFin: "11:00",
        todoElDia: false,
        motivo: "Capacitación de accesibilidad web",
    },
    {
        tipoNombre: "Específica de empleado",
        empleadoCorreo: "product.demo@clarity.local",
        fecha: "2026-09-18",
        horaInicio: "13:00",
        horaFin: "15:00",
        todoElDia: false,
        motivo: "Cita médica",
    },
    {
        tipoNombre: "Específica de empleado",
        empleadoCorreo: "techlead.demo@clarity.local",
        fecha: "2026-09-21",
        horaInicio: "08:00",
        horaFin: "10:00",
        todoElDia: false,
        motivo: "Reunión interna de arquitectura",
    },
    {
        tipoNombre: "Específica de empleado",
        empleadoCorreo: "security.demo@clarity.local",
        fecha: "2026-09-23",
        horaInicio: null,
        horaFin: null,
        todoElDia: true,
        motivo: "Vacaciones",
    },
] as const;

/* ------------------------------------------------------------------ */
/* Citas                                                               */
/* ------------------------------------------------------------------ */

/**
 * Las cuatro primeras son las citas originales, con el mismo cliente,
 * profesional, servicio, fecha y hora, para que el upsert del seeder las
 * reconozca y no genere duplicados.
 *
 * Distribución final: 4 pendientes, 4 confirmadas, 3 finalizadas y
 * 2 canceladas, repartidas entre los cuatro profesionales.
 *
 * La duración, el precio del servicio y el costo total se derivan del
 * servicio y de los adicionales al ejecutar el seeder.
 */
export const citasIniciales = [
    // ---------------- Originales ----------------
    {
        clienteCorreo: "ana.demo@clarity.local",
        empleadoCorreo: "empleado.demo@clarity.local",
        servicioNombre: "Code Review Front End - Virtual",
        estadoNombre: "Pendiente",
        fecha: "2026-09-15",
        horaInicio: "09:00",
        horaFin: "10:00",
        adicionalesNombres: ["Grabación de la sesión"],
        observaciones:
            "Revisar estructura de componentes, accesibilidad y rendimiento de la aplicación.",
        motivoCancelacion: null,
    },
    {
        clienteCorreo: "luis.demo@clarity.local",
        empleadoCorreo: "product.demo@clarity.local",
        servicioNombre: "Definición de requerimientos - Presencial",
        estadoNombre: "Confirmada",
        fecha: "2026-09-16",
        horaInicio: "10:00",
        horaFin: "11:30",
        adicionalesNombres: [
            "Reporte escrito de la sesión",
            "Plan de acción priorizado",
        ],
        observaciones:
            "Alinear alcance, historias de usuario y criterios de aceptación del MVP.",
        motivoCancelacion: null,
    },
    {
        clienteCorreo: "ana.demo@clarity.local",
        empleadoCorreo: "techlead.demo@clarity.local",
        servicioNombre: "Auditoría de arquitectura - Virtual",
        estadoNombre: "Finalizada",
        fecha: "2026-09-17",
        horaInicio: "14:00",
        horaFin: "15:30",
        adicionalesNombres: ["Documentación técnica de decisiones"],
        observaciones:
            "Evaluar límites de dominio, observabilidad y estrategia de escalabilidad.",
        motivoCancelacion: null,
    },
    {
        clienteCorreo: "luis.demo@clarity.local",
        empleadoCorreo: "security.demo@clarity.local",
        servicioNombre: "Pentest básico - Presencial",
        estadoNombre: "Confirmada",
        fecha: "2026-09-18",
        horaInicio: "11:00",
        horaFin: "13:00",
        adicionalesNombres: ["Reporte escrito de la sesión"],
        observaciones:
            "Revisar autenticación, permisos y exposición de endpoints críticos.",
        motivoCancelacion: null,
    },

    // ---------------- Pendientes adicionales ----------------
    {
        clienteCorreo: "carolina.demo@clarity.local",
        empleadoCorreo: "empleado.demo@clarity.local",
        servicioNombre: "Auditoría de accesibilidad - Virtual",
        estadoNombre: "Pendiente",
        fecha: "2026-09-16",
        horaInicio: "09:00",
        horaFin: "10:00",
        adicionalesNombres: [],
        observaciones:
            "Auditar el formulario de contratación reportado por un usuario con lector de pantalla.",
        motivoCancelacion: null,
    },
    {
        clienteCorreo: "andres.demo@clarity.local",
        empleadoCorreo: "product.demo@clarity.local",
        servicioNombre: "Priorización de backlog - Virtual",
        estadoNombre: "Pendiente",
        fecha: "2026-09-22",
        horaInicio: "09:00",
        horaFin: "09:45",
        adicionalesNombres: ["Resumen ejecutivo para stakeholders"],
        observaciones:
            "Ordenar el backlog del primer incremento antes de la reunión con inversionistas.",
        motivoCancelacion: null,
    },
    {
        clienteCorreo: "luis.demo@clarity.local",
        empleadoCorreo: "techlead.demo@clarity.local",
        servicioNombre: "Mentoría de liderazgo técnico - Virtual",
        estadoNombre: "Pendiente",
        fecha: "2026-09-21",
        horaInicio: "10:00",
        horaFin: "11:00",
        adicionalesNombres: ["Seguimiento por Slack (1 semana)"],
        observaciones:
            "Primera sesión de acompañamiento tras asumir el rol de líder técnico.",
        motivoCancelacion: null,
    },

    // ---------------- Confirmadas adicionales ----------------
    {
        clienteCorreo: "carolina.demo@clarity.local",
        empleadoCorreo: "techlead.demo@clarity.local",
        servicioNombre: "Auditoría de arquitectura - Presencial",
        estadoNombre: "Confirmada",
        fecha: "2026-09-24",
        horaInicio: "09:00",
        horaFin: "11:00",
        adicionalesNombres: [
            "Plan de acción priorizado",
            "Grabación de la sesión",
        ],
        observaciones:
            "Definir si conviene separar el monolito antes del próximo trimestre.",
        motivoCancelacion: null,
    },
    {
        clienteCorreo: "andres.demo@clarity.local",
        empleadoCorreo: "security.demo@clarity.local",
        servicioNombre: "Revisión de autenticación y permisos - Virtual",
        estadoNombre: "Confirmada",
        fecha: "2026-09-25",
        horaInicio: "11:00",
        horaFin: "12:00",
        adicionalesNombres: ["Revisión asincrónica de pull requests"],
        observaciones:
            "Revisar el modelo de roles después del incidente de accesos del mes pasado.",
        motivoCancelacion: null,
    },

    // ---------------- Finalizadas adicionales ----------------
    {
        clienteCorreo: "ana.demo@clarity.local",
        empleadoCorreo: "empleado.demo@clarity.local",
        servicioNombre: "Code Review Front End - Presencial",
        estadoNombre: "Finalizada",
        fecha: "2026-08-03",
        horaInicio: "13:00",
        horaFin: "14:00",
        adicionalesNombres: ["Reporte escrito de la sesión"],
        observaciones:
            "Revisión del portal de clientes. Se entregaron catorce hallazgos priorizados.",
        motivoCancelacion: null,
    },
    {
        clienteCorreo: "luis.demo@clarity.local",
        empleadoCorreo: "security.demo@clarity.local",
        servicioNombre: "Pentest básico - Virtual",
        estadoNombre: "Finalizada",
        fecha: "2026-08-05",
        horaInicio: "09:00",
        horaFin: "10:30",
        adicionalesNombres: [],
        observaciones:
            "Se detectaron dos vulnerabilidades de severidad media, ya corregidas por el equipo.",
        motivoCancelacion: null,
    },

    // ---------------- Canceladas ----------------
    {
        clienteCorreo: "andres.demo@clarity.local",
        empleadoCorreo: "product.demo@clarity.local",
        servicioNombre: "Definición de requerimientos - Virtual",
        estadoNombre: "Cancelada",
        fecha: "2026-08-12",
        horaInicio: "10:00",
        horaFin: "11:15",
        adicionalesNombres: [],
        observaciones:
            "Levantamiento inicial del flujo de despachos con el equipo de operaciones.",
        motivoCancelacion:
            "El cliente reprogramó la sesión para el siguiente trimestre.",
    },
    {
        clienteCorreo: "carolina.demo@clarity.local",
        empleadoCorreo: "security.demo@clarity.local",
        servicioNombre: "Pentest básico - Virtual",
        estadoNombre: "Cancelada",
        fecha: "2026-09-24",
        horaInicio: "15:00",
        horaFin: "16:30",
        adicionalesNombres: ["Reporte escrito de la sesión"],
        observaciones:
            "Revisión de seguridad previa a la auditoría externa.",
        motivoCancelacion:
            "Conflicto de agenda del cliente. Se coordinará una nueva fecha.",
    },
] as const;


