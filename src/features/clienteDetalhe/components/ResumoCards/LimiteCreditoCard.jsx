import { CardShell } from "./CardShell.jsx";
import { ProgressBar } from "../../../../shared/components/data-display/ProgressBar.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/** "Limite de crédito" card with a utilization progress bar. */
export function LimiteCreditoCard({ cliente }) {
  const disponivel = Math.max(0, cliente.limiteCredito - cliente.limiteUtilizado)
  const pctUtilizado = cliente.limiteCredito > 0 ? Math.round((cliente.limiteUtilizado / cliente.limiteCredito) * 100) : 0
  const pctDisponivel = 100 - pctUtilizado
  const tone = pctUtilizado >= 80 ? 'red' : pctUtilizado >= 50 ? 'amber' : 'violet'

  return (
    <CardShell title="Limite de crédito">
      <p className="text-xs text-slate-400 light:text-slate-500">Limite total</p>
      <p className="text-lg font-semibold text-white light:text-slate-900 mb-3">{formatCurrency(cliente.limiteCredito)}</p>

      <ProgressBar value={cliente.limiteUtilizado} max={cliente.limiteCredito} tone={tone} className="mb-3" />

      <div className="flex justify-between text-xs">
        <div>
          <p className="text-slate-400 light:text-slate-500">Utilizado</p>
          <p className="font-medium text-white light:text-slate-900">
            {formatCurrency(cliente.limiteUtilizado)} ({pctUtilizado}%)
          </p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 light:text-slate-500">Disponível</p>
          <p className="font-medium text-cm-green">
            {formatCurrency(disponivel)} ({pctDisponivel}%)
          </p>
        </div>
      </div>
    </CardShell>
  )
}
