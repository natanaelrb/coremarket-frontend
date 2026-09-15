import { CardShell } from './CardShell.jsx'
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../shared/utils/formatDate.js";

/** "Últimas compras" mini-table with a "Ver todas" link to the Compras tab. */
export function UltimasComprasCard({ compras, onVerTodas }) {
  return (
    <CardShell
      title="Últimas compras"
      action={
        <button onClick={onVerTodas} className="text-xs text-cm-violet-soft hover:underline">
          Ver todas
        </button>
      }
    >
      <div className="space-y-1">
        {compras.map((c) => (
          <div key={c.venda} className="flex items-center justify-between text-sm py-1">
            <div>
              <p className="font-medium text-white light:text-slate-900">{c.venda}</p>
              <p className="text-xs text-slate-500">{formatDate(c.data)}</p>
            </div>
            <p className="font-medium text-white light:text-slate-900">{formatCurrency(c.valor)}</p>
          </div>
        ))}
      </div>
    </CardShell>
  )
}
