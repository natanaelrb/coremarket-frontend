import { AlertTriangle } from "lucide-react";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/** Red banner warning about overdue balance, shown when emAtraso > 0. */
export function AlertaVencidoBanner({ valorVencido }) {
  if (!valorVencido) return null;

  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-[#ef4444]/20
        border-l-4
        border-l-[#ef4444]
        bg-[#fee2e2]
        px-4
        py-3
        text-sm
        font-medium
        text-[#dc2626]
        dark:border-red-500/20
        dark:border-l-red-500
        dark:bg-red-950/30
        dark:text-red-400
      "
    >
      <AlertTriangle size={16} className="shrink-0" />

      <span>
        {formatCurrency(valorVencido)} em contas vencidas
      </span>
    </div>
  );
}