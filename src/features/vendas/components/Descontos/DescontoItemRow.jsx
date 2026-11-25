import { Tag } from "lucide-react";
import { formatCurrency } from "../../../../shared/utils/formatters.js";

export function DescontoItemRow({ valor }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:ring-blue-900/50">
          <Tag size={17} strokeWidth={2} />
        </span>

        <span className="text-sm font-medium text-cm-text-muted">
          Desconto por item já aplicado
        </span>
      </div>

      <span className="shrink-0 text-sm font-bold tabular-nums text-red-600 dark:text-red-400">
        − {formatCurrency(valor)}
      </span>
    </div>
  );
}
