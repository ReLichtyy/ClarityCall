import { PageHeader } from "@/components/PageHeader"
import { FormularioCita } from "@/components/FormularioCita"
import { PageContainer } from "@/components/layout/Container"

export function NuevaCitaPage() {
  return (
    <PageContainer as="section" aria-labelledby="nueva-cita-title">
      <PageHeader
        title="Nueva Cita"
        description="Completa el formulario para agendar una nueva cita"
      />
      
      <FormularioCita />
    </PageContainer>
  )
}
