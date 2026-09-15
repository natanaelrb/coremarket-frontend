import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../../shared/utils/formatDate.js";
import { FORMA_PAGAMENTO_CONFIG } from "../../../../clientes/constants/formaPagamentoConfig.js";

/** Full purchase-history table for the "Compras" tab. */
export function ComprasTable({ compras }) {
  return (
    <div className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-slate-400 light:text-slate-500 border-b border-cm-border-dark light:border-cm-border-light">
            <th className="px-4 py-3 font-medium">Venda</th>
            <th className="px-4 py-3 font-medium">Data</th>
            <th className="px-4 py-3 font-medium">Itens</th>
            <th className="px-4 py-3 font-medium">Forma de pagamento</th>
            <th className="px-4 py-3 font-medium">Valor</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((c) => (
            <tr key={c.venda} className="border-b border-cm-border-dark/60 light:border-cm-border-light">
              <td className="px-4 py-3 font-medium text-white light:text-slate-900">{c.venda}</td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">{formatDate(c.data)}</td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">{c.itens}</td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">
                {FORMA_PAGAMENTO_CONFIG[c.formaPagamento]?.label ?? c.formaPagamento}
              </td>
              <td className="px-4 py-3 font-medium text-white light:text-slate-900">{formatCurrency(c.valor)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
