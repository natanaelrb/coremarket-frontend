import { CardShell } from "./CardShell.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../shared/utils/formatDate.js";

/** "Últimas compras" mini-table with a "Ver todas" link to the Compras tab. */
export function UltimasComprasCard({ compras, onVerTodas }) {
  return (
    <CardShell
      title="Últimas compras"
      action={
        <button
          onClick={onVerTodas}
          className="
            text-xs
            font-medium
            text-[#16a34a]
            transition-colors
            hover:text-[#15803d]
            hover:underline
            dark:text-[#4ade80]
            dark:hover:text-[#86efac]
          "
        >
          Ver todas
        </button>
      }
    >
      <div className="divide-y divide-slate-100 dark:divide-white/5">
        {compras.map((c) => (
          <div
            key={c.venda}
            className="
              flex
              items-center
              justify-between
              gap-4
              py-2.5
              first:pt-0
              last:pb-0
              transition-colors
            "
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[#0f172a] dark:text-white">
                {c.venda}
              </p>

              <p className="mt-0.5 text-xs text-[#64748b] dark:text-slate-400">
                {formatDate(c.data)}
              </p>
            </div>

            <p className="shrink-0 text-sm font-semibold text-[#0f172a] dark:text-white">
              {formatCurrency(c.valor)}
            </p>
          </div>
        ))}
      </div>
    </CardShell>
  );
}