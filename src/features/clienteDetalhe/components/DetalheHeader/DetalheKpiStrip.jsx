import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

const ITEMS = [
  { key: 'totalComprado', label: 'Total comprado', tone: 'text-white light:text-slate-900' },
  { key: 'totalPago', label: 'Total pago', tone: 'text-white light:text-slate-900' },
  { key: 'emAberto', label: 'Em aberto', tone: 'text-cm-amber' },
  { key: 'emAtraso', label: 'Em atraso', tone: 'text-cm-red' },
]

/** Row of 4 mini financial KPI cards shown under the client's name. */
export function DetalheKpiStrip({ cliente }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {ITEMS.map((item) => (
        <div
          key={item.key}
          className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light p-4"
        >
          <p className={`text-lg font-semibold ${item.tone}`}>{formatCurrency(cliente[item.key])}</p>
          <p className="text-xs text-slate-400 light:text-slate-500 mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
