import { Wallet } from "lucide-react";
import { formatCurrency } from "../../../../shared/utils/formatters.js";

export function TotalDisplay({ total }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-blue-200 bg-blue-50/70 p-4 dark:border-blue-900/60 dark:bg-blue-950/30">
      <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-blue-200/40 blur-2xl dark:bg-blue-500/10" />

      <div className="relative">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
            <Wallet className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">
              Total da venda
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
              Valor final do pedido
            </p>
          </div>
        </div>

        <div className="mt-3 border-t border-blue-200 pt-3 dark:border-blue-900/60">
          <p className="break-words text-2xl font-bold leading-tight tracking-tight text-blue-700 tabular-nums dark:text-blue-300 sm:text-2xl">
            {formatCurrency(total)}
          </p>
        </div>
      </div>
    </div>
  );
}
