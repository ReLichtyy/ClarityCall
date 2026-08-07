import { PageHeader } from "@/components/PageHeader"
import { FormularioCita } from "@/components/FormularioCita"

export function NuevaCitaPage() {
  return (
    <section aria-labelledby="nueva-cita-title">
      <PageHeader
        title="Nueva Cita"
        description="Completa el formulario para agendar una nueva cita"
      />
      
      <FormularioCita />
    </section>
  )
}
