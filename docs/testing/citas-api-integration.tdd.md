# Integración del API de citas — evidencia TDD

## Comportamiento cubierto

- El frontend solicita `GET /citas` y extrae el arreglo `data`.
- Los errores HTTP y las respuestas inválidas se convierten en errores seguros para la interfaz.
- Las fechas y horas de MySQL se muestran sin desplazamientos de zona horaria.
- La búsqueda incluye servicio, empleado, cliente y estado.
- La aplicación presenta citas en lugar de los datos heredados de eventos.

## Ciclo rojo-verde

1. Las pruebas del servicio fallaron inicialmente porque `citasService.js` todavía no existía.
2. Las pruebas de interfaz fallaron inicialmente porque `CitasPage.jsx` todavía no existía.
3. Se implementaron el servicio, los formateadores y los componentes de citas.
4. Resultado final: 11 pruebas aprobadas, compilación de Vite aprobada y compilación de TypeScript del API aprobada.

## Comprobación en ejecución

- `GET http://127.0.0.1:3000/citas`: HTTP 200, `success: true`.
- `GET http://127.0.0.1:4173`: HTTP 200 con el contenedor principal de React.
