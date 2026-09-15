import { AlertTriangle } from 'lucide-react'
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/** Red banner warning about overdue balance, shown when emAtraso > 0. */
export function AlertaVencidoBanner({ valorVencido }) {
  if (!valorVencido) return null
  return (
    <div className="flex items-center gap-2 rounded-lg bg-cm-red-dim text-cm-red px-4 py-3 text-sm font-medium">
      <AlertTriangle size={16} />
      {formatCurrency(valorVencido)} em contas vencidas
    </div>
  )
}
