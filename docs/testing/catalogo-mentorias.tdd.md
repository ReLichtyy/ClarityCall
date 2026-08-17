# Evidencia TDD: catálogo de mentorías

## Fuente y recorridos

Los recorridos se derivaron de la solicitud del usuario; no se recibió un archivo de plan.

- Como cliente, quiero ver citas de mentoría de software para reconocer el propósito real de Clarity Call.
- Como cliente, quiero elegir una sesión virtual o presencial sin ambigüedad.
- Como cliente, quiero ver fecha, hora, duración, precio, especialidad e imagen de cada cita.

## Ejecución

### RED

- `npm test` en el Front: 3 pruebas ejecutadas; 2 fallaron porque `formatHora` no aceptaba valores `TIME` y trataba `null` como medianoche.
- `npm test` en el API: 11 pruebas ejecutadas; 4 fallaron por la ausencia de especialidades técnicas, modalidades espejo y por la presencia del catálogo médico.

### GREEN

- `npm test` en el Front: 7/7 pruebas pasan.
- `npm test` en el API: 11/11 pruebas pasan.
- `npm run build` en el Front: build de Vite completado.
- `npx tsc --ignoreConfig --noEmit --skipLibCheck --target ES2022 --module NodeNext --moduleResolution NodeNext --esModuleInterop --types node prisma/seed.ts`: el seed modificado supera el typecheck aislado.
- `npx prisma db seed`: seed aplicado correctamente a la base local.
- Verificación HTTP de `/citas`: cuatro citas técnicas devueltas con horas válidas y las cuatro especialidades requeridas.

## Especificación de pruebas

| # | Garantía | Prueba o comando | Tipo | Resultado |
|---|---|---|---|---|
| 1 | El catálogo contiene Front End, Product Engineer/Business Analyst, Senior Tech Lead y Ciberseguridad | `prisma/seed-data.test.ts` | unidad | PASS |
| 2 | Cada tipo de sesión tiene exactamente una variante Virtual y una Presencial | `prisma/seed-data.test.ts` | unidad | PASS |
| 3 | Cada servicio posee precio, duración e imagen válida | `prisma/seed-data.test.ts` | unidad | PASS |
| 4 | Servicios y citas demo no contienen contenido médico | `prisma/seed-data.test.ts` | unidad | PASS |
| 5 | Horas `TIME`, ISO, vacías e inválidas se formatean correctamente | `tests/citaFormatters.test.mjs` | unidad | PASS |
| 6 | Fechas, colones, nombres y búsqueda siguen funcionando | `tests/citaFormatters.test.mjs` | unidad | PASS |
| 7 | Las cuatro imágenes cargan y no hay errores de consola en `/citas` | revisión visual local | integración UI | PASS |

## Cobertura y límites conocidos

- Front (`node --test --experimental-test-coverage tests/*.test.mjs`): 100% líneas, 96.30% ramas y 100% funciones en `citaFormatters.js`.
- API (`npx tsx --test --experimental-test-coverage prisma/*.test.ts src/config/*.test.ts`): 97.63% líneas, 90.63% ramas y 95% funciones en los archivos cubiertos.
- El build completo del API continúa bloqueado por referencias preexistentes a `EstadoOrden` y `Role` en `src/utils/enum-mappers.ts`; el cambio de catálogo no modifica ese archivo.
- No se crearon checkpoints Git porque los metadatos `.git` son de solo lectura en este entorno. La evidencia RED/GREEN se conserva en este documento.
