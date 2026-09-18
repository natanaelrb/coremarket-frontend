import { VoltarButton } from './VoltarButton.jsx'
import { ClienteIdentidade } from './ClienteIdentidade.jsx'
import { DetalheAcoes } from './DetalheAcoes.jsx'
import { DetalheKpiStrip } from './DetalheKpiStrip.jsx'

/**
 * Full detail-page header:
 * back link, client identity, actions and KPI strip.
 */
export function DetalheHeader({
  cliente,
  onVoltar,
  onEditar,
  onNovaVenda,
}) {
  return (
    <div className="space-y-4 animate-slide-up">
      <VoltarButton onClick={onVoltar} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <ClienteIdentidade cliente={cliente} />

        <DetalheAcoes
          onEditar={onEditar}
          onNovaVenda={onNovaVenda}
        />
      </div>

      <DetalheKpiStrip cliente={cliente} />
    </div>
  )
}