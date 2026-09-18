import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";

/** Right-side "Top 5 clientes mais frequentes" ranked table. */
export function Top5ClientesTable({ clientes }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border border-slate-200
        bg-white
        dark:border-white/10
        dark:bg-zinc-900
      "
    >
      <div
        className="
          border-b
          border-slate-200
          px-4 py-2.5
          dark:border-white/10
        "
      >
        <p className="text-sm font-medium text-[#0f172a] dark:text-white">
          Top 5 clientes mais frequentes
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="bg-slate-50/70 text-left text-xs text-slate-500 dark:bg-white/[0.02] dark:text-slate-400">
              <th className="px-4 py-2 font-medium">Posição</th>
              <th className="px-4 py-2 font-medium">Cliente</th>
              <th className="px-4 py-2 font-medium">Compras</th>
              <th className="px-4 py-2 font-medium">Total comprado</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((c) => (
              <tr
                key={c.posicao}
                className="
                  border-t
                  border-slate-100
                  transition-colors
                  hover:bg-slate-50/80
                  dark:border-white/5
                  dark:hover:bg-white/[0.02]
                "
              >
                <td className="px-4 py-2 text-slate-400">
                  {c.posicao}
                </td>

                <td className="px-4 py-2 text-[#334155] dark:text-slate-200">
                  {c.nome}
                </td>

                <td className="px-4 py-2 text-slate-500 dark:text-slate-400">
                  {c.compras}
                </td>

                <td className="px-4 py-2 font-medium text-[#0f172a] dark:text-white">
                  {formatCurrency(c.totalComprado)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}