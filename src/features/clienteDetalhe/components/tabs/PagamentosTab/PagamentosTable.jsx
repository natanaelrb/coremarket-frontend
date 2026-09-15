import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../../shared/utils/formatDate.js";
import { FORMA_PAGAMENTO_CONFIG } from "../../../../clientes/constants/formaPagamentoConfig.js";

/** "Histórico de pagamentos" table: data, conta, valor, forma, registrado por. */
export function PagamentosTable({ pagamentos }) {
  return (
    <div className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-slate-400 light:text-slate-500 border-b border-cm-border-dark light:border-cm-border-light">
            <th className="px-4 py-3 font-medium">Data</th>
            <th className="px-4 py-3 font-medium">Conta</th>
            <th className="px-4 py-3 font-medium">Valor</th>
            <th className="px-4 py-3 font-medium">Forma</th>
            <th className="px-4 py-3 font-medium">Registrado por</th>
          </tr>
        </thead>
        <tbody>
          {pagamentos.map((p) => (
            <tr key={p.id} className="border-b border-cm-border-dark/60 light:border-cm-border-light">
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">{formatDate(p.data)}</td>
              <td className="px-4 py-3 font-medium text-white light:text-slate-900">{p.conta}</td>
              <td className="px-4 py-3 font-medium text-white light:text-slate-900">{formatCurrency(p.valor)}</td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">
                {FORMA_PAGAMENTO_CONFIG[p.forma]?.label ?? p.forma}
              </td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">{p.registradoPor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
