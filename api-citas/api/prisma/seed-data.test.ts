import assert from "node:assert/strict";
import test from "node:test";

import {
    citasIniciales,
    especialidadesIniciales,
    horariosIniciales,
    serviciosIniciales,
    usuariosIniciales,
} from "./seed-data";

const especialidadesEsperadas = [
    "Front End",
    "Product Engineer/Business Analyst",
    "Senior Tech Lead",
    "Ciberseguridad",
];

const tiposSesionEsperados = [
    "Code Review Front End",
    "Definición de requerimientos",
    "Auditoría de arquitectura",
    "Pentest básico",
];

test("los datos iniciales tienen identificadores naturales únicos", () => {
    assert.equal(
        new Set(usuariosIniciales.map((usuario) => usuario.correo)).size,
        usuariosIniciales.length
    );
    assert.equal(
        new Set(serviciosIniciales.map((servicio) => servicio.nombre)).size,
        serviciosIniciales.length
    );
});

test("el catálogo inicial cubre las cuatro especialidades técnicas", () => {
    assert.deepEqual(
        especialidadesIniciales.map((especialidad) => especialidad.nombre),
        especialidadesEsperadas
    );

    const especialidades = new Set(
        especialidadesIniciales.map((especialidad) => especialidad.nombre)
    );
    for (const servicio of serviciosIniciales) {
        assert.ok(especialidades.has(servicio.especialidadNombre));
    }
});

test("cada tipo de sesión ofrece exactamente una opción virtual y una presencial", () => {
    for (const tipoSesion of tiposSesionEsperados) {
        const serviciosEspejo = serviciosIniciales.filter(
            (servicio) => servicio.tipoSesion === tipoSesion
        );

        assert.equal(serviciosEspejo.length, 2);
        assert.deepEqual(
            serviciosEspejo.map((servicio) => servicio.modalidad).sort(),
            ["Presencial", "Virtual"]
        );
    }
});

test("los servicios técnicos tienen precio, duración e imagen válidos", () => {
    for (const servicio of serviciosIniciales) {
        assert.ok(servicio.precioBase > 0);
        assert.ok(servicio.duracionMinutos >= 30);
        assert.match(servicio.imagen, /^[a-zA-Z0-9._-]+\.(jpg|jpeg|png|webp)$/i);
        assert.match(servicio.nombre, new RegExp(` - ${servicio.modalidad}$`));
    }
});

test("los datos de demostración no contienen servicios médicos", () => {
    const contenido = JSON.stringify({ serviciosIniciales, citasIniciales }).toLowerCase();
    for (const termino of ["terapia física", "masaje terapéutico", "tratamiento", "movilidad"])
        assert.equal(contenido.includes(termino), false);
});

test("los servicios usan nombres de imagen compatibles con la API", () => {
    for (const servicio of serviciosIniciales) {
        assert.match(servicio.imagen, /^[a-zA-Z0-9._-]+\.(jpg|jpeg|png|webp)$/i);
    }
});

test("las citas referencian usuarios y servicios definidos", () => {
    const usuarios = new Map(
        usuariosIniciales.map((usuario) => [usuario.correo, usuario])
    );
    const servicios = new Set(serviciosIniciales.map((servicio) => servicio.nombre));

    for (const cita of citasIniciales) {
        assert.equal(usuarios.get(cita.clienteCorreo)?.rol, "Cliente");
        assert.equal(usuarios.get(cita.empleadoCorreo)?.rol, "Empleado");
        assert.ok(servicios.has(cita.servicioNombre));
        assert.match(cita.fecha, /^\d{4}-\d{2}-\d{2}$/);
        assert.match(cita.horaInicio, /^([01]\d|2[0-3]):[0-5]\d$/);
        assert.match(cita.horaFin, /^([01]\d|2[0-3]):[0-5]\d$/);
        assert.ok(cita.horaInicio < cita.horaFin);
    }
});

test("los horarios iniciales cubren los siete días sin traslaparse", () => {
    assert.deepEqual(
        horariosIniciales.map((horario) => horario.numeroDia),
        [1, 2, 3, 4, 5, 6, 7]
    );

    for (const horario of horariosIniciales) {
        assert.ok(horario.horaInicio < horario.horaFin);
    }
});
