
import { prisma } from "../src/config/prisma";
import bcrypt from "bcryptjs";
import {
    citasIniciales,
    horariosIniciales,
    serviciosIniciales,
    usuariosIniciales,
} from "./seed-data";
import {
    fechaParaDateColumn,
    horaParaTimeColumn,
} from "../src/utils/timezone";

function obtenerPasswordInicial(): string {
    const password = process.env.SEED_PASSWORD;

    if (!password || password.length < 10) {
        throw new Error(
            "SEED_PASSWORD debe estar configurada y tener al menos 10 caracteres"
        );
    }

    return password;
}

async function main() {
    console.log("Iniciando seed...");
     // Roles
    const administrador = await prisma.rol.upsert({
        where: { nombre: "Administrador" },
        update: {},
        create: {
            nombre: "Administrador",
            descripcion: "Usuario con acceso completo al sistema.",
            activo: true,
        },
    });

    const empleadoRol = await prisma.rol.upsert({
        where: { nombre: "Empleado" },
        update: {},
        create: {
            nombre: "Empleado",
            descripcion: "Usuario encargado de atender citas asignadas.",
            activo: true,
        },
    });

    const clienteRol = await prisma.rol.upsert({
        where: { nombre: "Cliente" },
        update: {},
        create: {
            nombre: "Cliente",
            descripcion: "Usuario que puede consultar sus citas y cancelarlas cuando corresponda.",
            activo: true,
        },
    });

    // Estados de cita
    await prisma.estadoCita.upsert({
        where: { nombre: "Pendiente" },
        update: {},
        create: {
            nombre: "Pendiente",
            descripcion: "Cita registrada, pendiente de confirmación.",
            bloqueaDisponibilidad: true,
            permiteCancelacionCliente: true,
            permiteEdicion: true,
            color: "amarillo",
            orden: 1,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "Confirmada" },
        update: {},
        create: {
            nombre: "Confirmada",
            descripcion: "Cita confirmada por el establecimiento.",
            bloqueaDisponibilidad: true,
            permiteCancelacionCliente: false,
            permiteEdicion: true,
            color: "azul",
            orden: 2,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "En proceso" },
        update: {},
        create: {
            nombre: "En proceso",
            descripcion: "Cita que se encuentra siendo atendida.",
            bloqueaDisponibilidad: true,
            permiteCancelacionCliente: false,
            permiteEdicion: false,
            color: "morado",
            orden: 3,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "Finalizada" },
        update: {},
        create: {
            nombre: "Finalizada",
            descripcion: "Cita atendida y finalizada.",
            bloqueaDisponibilidad: false,
            permiteCancelacionCliente: false,
            permiteEdicion: false,
            color: "verde",
            orden: 4,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "Cancelada" },
        update: {},
        create: {
            nombre: "Cancelada",
            descripcion: "Cita cancelada. No bloquea disponibilidad.",
            bloqueaDisponibilidad: false,
            permiteCancelacionCliente: false,
            permiteEdicion: false,
            color: "rojo",
            orden: 5,
            activo: true,
        },
    });

    // Días de semana
    const dias = [
        { nombre: "Lunes", numeroOrden: 1 },
        { nombre: "Martes", numeroOrden: 2 },
        { nombre: "Miércoles", numeroOrden: 3 },
        { nombre: "Jueves", numeroOrden: 4 },
        { nombre: "Viernes", numeroOrden: 5 },
        { nombre: "Sábado", numeroOrden: 6 },
        { nombre: "Domingo", numeroOrden: 7 },
    ];

    for (const dia of dias) {
        await prisma.diaSemana.upsert({
            where: { nombre: dia.nombre },
            update: {},
            create: dia,
        });
    }

    // Tipos de restricción
    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "General del establecimiento" },
        update: {},
        create: {
            nombre: "General del establecimiento",
            descripcion: "Restricción que afecta a todos los empleados del establecimiento.",
        },
    });

    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "Específica de empleado" },
        update: {},
        create: {
            nombre: "Específica de empleado",
            descripcion: "Restricción que afecta únicamente a un empleado específico.",
        },
    });

    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "Parcial por horas" },
        update: {},
        create: {
            nombre: "Parcial por horas",
            descripcion: "Restricción aplicada a un rango específico de horas.",
        },
    });

    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "Día completo" },
        update: {},
        create: {
            nombre: "Día completo",
            descripcion: "Restricción que bloquea todo el día seleccionado.",
        },
    });

    // Especialidad base
    const especialidadGeneral = await prisma.especialidad.upsert({
        where: { nombre: "General" },
        update: {},
        create: {
            nombre: "General",
            descripcion: "Especialidad base para servicios y empleados generales.",
            activo: true,
        },
    });

    // Usuario administrador
    const passwordHash = await bcrypt.hash(obtenerPasswordInicial(), 10);

    const administradorUsuario = await prisma.usuario.upsert({
        where: { correo: "admin@citas.com" },
        update: { passwordHash },
        create: {
            nombre: "Administrador",
            primerApellido: "Sistema",
            segundoApellido: null,
            correo: "admin@citas.com",
            telefono: "88888888",
            passwordHash,
            activo: true,
            rolId: administrador.id,
        },
    });

    // Servicios utilizados por las páginas de demostración
    const servicios = new Map<string, Awaited<ReturnType<typeof prisma.servicio.upsert>>>();

    for (const servicio of serviciosIniciales) {
        const servicioCreado = await prisma.servicio.upsert({
            where: { nombre: servicio.nombre },
            update: {
                descripcion: servicio.descripcion,
                precioBase: servicio.precioBase,
                duracionMinutos: servicio.duracionMinutos,
                imagen: servicio.imagen,
                activo: true,
                especialidadId: especialidadGeneral.id,
            },
            create: {
                ...servicio,
                activo: true,
                especialidadId: especialidadGeneral.id,
            },
        });
        servicios.set(servicioCreado.nombre, servicioCreado);
    }

    // Usuarios de prueba. Todos usan SEED_PASSWORD y se almacenan con bcrypt.
    const rolesPorNombre = new Map([
        [empleadoRol.nombre, empleadoRol],
        [clienteRol.nombre, clienteRol],
    ]);
    const usuarios = new Map<string, Awaited<ReturnType<typeof prisma.usuario.upsert>>>();

    for (const usuario of usuariosIniciales) {
        const rol = rolesPorNombre.get(usuario.rol);
        if (!rol) {
            throw new Error(`No existe el rol inicial ${usuario.rol}`);
        }

        const usuarioCreado = await prisma.usuario.upsert({
            where: { correo: usuario.correo },
            update: {
                nombre: usuario.nombre,
                primerApellido: usuario.primerApellido,
                segundoApellido: usuario.segundoApellido,
                telefono: usuario.telefono,
                passwordHash,
                activo: true,
                rolId: rol.id,
            },
            create: {
                nombre: usuario.nombre,
                primerApellido: usuario.primerApellido,
                segundoApellido: usuario.segundoApellido,
                correo: usuario.correo,
                telefono: usuario.telefono,
                passwordHash,
                activo: true,
                rolId: rol.id,
            },
        });
        usuarios.set(usuarioCreado.correo, usuarioCreado);
    }

    const empleadoUsuario = usuarios.get("empleado.demo@clarity.local");
    if (!empleadoUsuario) {
        throw new Error("No se pudo crear el usuario empleado de demostración");
    }

    const serviciosAsignados = [...servicios.values()].map((servicio) => ({
        id: servicio.id,
    }));
    const empleado = await prisma.empleado.upsert({
        where: { usuarioId: empleadoUsuario.id },
        update: {
            especialidadId: especialidadGeneral.id,
            codigoEmpleado: "EMP-DEMO-001",
            descripcion: "Profesional asignado a los servicios de demostración.",
            activo: true,
            servicios: { set: serviciosAsignados },
        },
        create: {
            usuarioId: empleadoUsuario.id,
            especialidadId: especialidadGeneral.id,
            codigoEmpleado: "EMP-DEMO-001",
            descripcion: "Profesional asignado a los servicios de demostración.",
            activo: true,
            servicios: { connect: serviciosAsignados },
        },
    });
    const empleados = new Map([[empleadoUsuario.correo, empleado]]);

    // Horario general de 08:00 a 18:00 para todos los días.
    for (const horario of horariosIniciales) {
        const dia = await prisma.diaSemana.findUniqueOrThrow({
            where: { numeroOrden: horario.numeroDia },
        });
        const horaInicio = horaParaTimeColumn(horario.horaInicio);
        const horaFin = horaParaTimeColumn(horario.horaFin);
        const existente = await prisma.horarioAtencion.findFirst({
            where: { diaSemanaId: dia.id, horaInicio, horaFin },
        });

        if (existente) {
            await prisma.horarioAtencion.update({
                where: { id: existente.id },
                data: { activo: true },
            });
        } else {
            await prisma.horarioAtencion.create({
                data: { diaSemanaId: dia.id, horaInicio, horaFin, activo: true },
            });
        }
    }

    // Citas visibles en CitasPage. Se busca la misma combinación antes de crear.
    for (const citaInicial of citasIniciales) {
        const cliente = usuarios.get(citaInicial.clienteCorreo);
        const empleadoCita = empleados.get(citaInicial.empleadoCorreo);
        const servicio = servicios.get(citaInicial.servicioNombre);
        if (!cliente || !empleadoCita || !servicio) {
            throw new Error("Una cita inicial referencia datos que no fueron creados");
        }

        const estado = await prisma.estadoCita.findUniqueOrThrow({
            where: { nombre: citaInicial.estadoNombre },
        });
        const fecha = fechaParaDateColumn(citaInicial.fecha);
        const horaInicio = horaParaTimeColumn(citaInicial.horaInicio);
        const horaFin = horaParaTimeColumn(citaInicial.horaFin);
        const existente = await prisma.cita.findFirst({
            where: {
                clienteId: cliente.id,
                empleadoId: empleadoCita.id,
                servicioId: servicio.id,
                fecha,
                horaInicio,
            },
        });

        const datosCita = {
            clienteId: cliente.id,
            empleadoId: empleadoCita.id,
            servicioId: servicio.id,
            estadoCitaId: estado.id,
            creadoPorUsuarioId: administradorUsuario.id,
            fecha,
            horaInicio,
            horaFin,
            duracionMinutos: servicio.duracionMinutos,
            precioServicio: servicio.precioBase,
            costoAdicionales: 0,
            costoTotal: servicio.precioBase,
            observaciones: citaInicial.observaciones,
        };

        if (existente) {
            await prisma.cita.update({
                where: { id: existente.id },
                data: datosCita,
            });
        } else {
            await prisma.cita.create({ data: datosCita });
        }
    }

    console.log("Seeder ejecutado correctamente.");
}

main()
    .catch((e) => {
        console.error("Error en seed:", e);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
