import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";

/** Right-side "Top 5 clientes mais frequentes" ranked table. */
export function Top5ClientesTable({ clientes }) {
  return (
    <div className="rounded-lg border border-cm-border-dark light:border-cm-border-light overflow-hidden">
      <div className="px-4 py-2.5 border-b border-cm-border-dark light:border-cm-border-light">
        <p className="text-sm font-medium text-white light:text-slate-900">Top 5 clientes mais frequentes</p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-slate-500">
            <th className="px-4 py-2 font-medium">Posição</th>
            <th className="px-4 py-2 font-medium">Cliente</th>
            <th className="px-4 py-2 font-medium">Compras</th>
            <th className="px-4 py-2 font-medium">Total comprado</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.posicao} className="border-t border-cm-border-dark/60 light:border-cm-border-light">
              <td className="px-4 py-2 text-slate-400">{c.posicao}</td>
              <td className="px-4 py-2 text-slate-200 light:text-slate-700">{c.nome}</td>
              <td className="px-4 py-2 text-slate-400">{c.compras}</td>
              <td className="px-4 py-2 font-medium text-white light:text-slate-900">{formatCurrency(c.totalComprado)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
