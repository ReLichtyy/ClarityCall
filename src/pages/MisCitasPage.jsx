import { useEffect, useState } from "react"

import { PageContainer } from "@/components/layout/Container"
import { CitaList } from "@/components/CitaList"
import { PageHeader } from "@/components/PageHeader"
import { getCitasPorCliente } from "@/services/citasService"
import { useAuth } from "@/auth/useAuth"

/**
 * Citas del cliente autenticado.
 *
 * La matriz de permisos del enunciado dice que el Cliente solo consulta
 * las propias, por eso se usa GET /citas/cliente/:clienteId y no el
 * listado general, que es de Administrador y Empleado.
 */
export function MisCitasPage() {
  const { user } = useAuth()

  const [citas, setCitas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!user?.id) return

    async function cargarCitas() {
      setLoading(true)
      setError(null)

      try {
        setCitas(await getCitasPorCliente(user.id))
      } catch (fallo) {
        console.error("No se pudieron cargar las citas", fallo)
        setError("No se pudieron cargar tus citas.")
      } finally {
        setLoading(false)
      }
    }

    cargarCitas()
  }, [user])

  if (loading) {
    return (
      <PageContainer>
        <p className="py-16 text-center text-text-secondary">
          Cargando tus citas...
        </p>
      </PageContainer>
    )
  }

  return (
    <PageContainer as="section" aria-labelledby="mis-citas-titulo">
      <PageHeader
        title="Mis citas"
        description="Las sesiones que tienes agendadas"
      />

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-danger/30 bg-danger-subtle p-6 text-center text-danger"
        >
          {error}
        </p>
      )}

      {!error && citas.length === 0 && (
        <p className="rounded-xl border border-border-subtle bg-surface p-6 text-center text-text-muted">
          Todavía no tienes citas agendadas.
        </p>
      )}

      {!error && citas.length > 0 && <CitaList citas={citas} />}
    </PageContainer>
  )
}
