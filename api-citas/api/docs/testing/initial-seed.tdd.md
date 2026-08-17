# Evidencia TDD: datos iniciales

## Alcance

Carga inicial idempotente para usuarios, servicios, empleado, horarios y citas de demostración, usando una única `DATABASE_URL` para Prisma CLI y la aplicación.

## RED

- `npx tsx --test prisma/seed-data.test.ts` falló porque `prisma/seed-data.ts` todavía no existía.
- La prueba de configuración falló porque `src/config/database-url.ts` todavía no existía.

## GREEN

- `npm test`: 7 pruebas aprobadas, 0 fallidas.
- `npx prisma db seed` ejecutado dos veces contra `ClarityCall` sin duplicar registros.
- Conteo final: 5 usuarios, 3 servicios, 1 empleado, 7 horarios y 3 citas.

## Verificación de integración

- La ruta `GET /citas` respondió HTTP 200 con las 3 citas y sus relaciones.
- La compilación completa conserva errores preexistentes en `src/utils/enum-mappers.ts`, por imports de enums que no existen en el cliente Prisma generado; no forman parte de esta carga inicial.
