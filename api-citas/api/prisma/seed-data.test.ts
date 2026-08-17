import assert from "node:assert/strict";
import test from "node:test";

import {
    citasIniciales,
    horariosIniciales,
    serviciosIniciales,
    usuariosIniciales,
} from "./seed-data";

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
