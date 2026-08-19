import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { CitaList } from "@/components/CitaList"
import { PageHeader } from "@/components/PageHeader"
import { SearchBar } from "@/components/SearchBar"
import { citaMatchesSearch } from "@/lib/citaFormatters"
import { CitasApiError, getCitas } from "@/services/citasService"
import { PageContainer } from "@/components/layout/Container"

function getUserMessage(error) {
  if (error instanceof CitasApiError) return error.message
  return "Ocurrió un error inesperado al cargar las citas."
}

export function CitasPage() {
  const [citas, setCitas] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadCitas() {
      setLoading(true)
      setError(null)

      try {
        setCitas(await getCitas({ signal: controller.signal }))
      } catch (requestError) {
        if (requestError?.name !== "AbortError") {
          console.error("No se pudieron cargar las citas", requestError)
          setError(getUserMessage(requestError))
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadCitas()
    return () => controller.abort()
  }, [reloadKey])

  const filteredCitas = citas.filter((cita) => citaMatchesSearch(cita, search))

  return (
    <PageContainer as="section" aria-labelledby="citas-title">
      <PageHeader
        title="Citas"
        description={filteredCitas.length}
        isBadge
      />

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Buscar por servicio, empleado, cliente o estado"
      />

      {loading && (
        <p className="rounded-xl border border-border-subtle bg-surface p-6 text-center text-text-secondary">
          Cargando citas…
        </p>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-danger/30 bg-danger-subtle p-6 text-center" role="alert">
          <p className="mb-4 text-danger">{error}</p>
          <Button onClick={() => setReloadKey((key) => key + 1)}>
            Reintentar
          </Button>
        </div>
      )}

      {!loading && !error && filteredCitas.length === 0 && (
        <p className="rounded-xl border border-border-subtle bg-surface p-6 text-center text-text-muted">
          No hay citas que coincidan con la búsqueda.
        </p>
      )}

      {!loading && !error && filteredCitas.length > 0 && (
        <CitaList citas={filteredCitas} />
      )}
    </PageContainer>
  )
}
