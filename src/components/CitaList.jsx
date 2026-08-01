import { CitaCard } from "./CitaCard"

export function CitaList({ citas }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {citas.map((cita) => (
        <CitaCard key={cita.id} cita={cita} />
      ))}
    </div>
  )
}
