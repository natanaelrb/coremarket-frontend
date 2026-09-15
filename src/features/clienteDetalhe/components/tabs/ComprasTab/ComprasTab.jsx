import { ComprasTable } from './ComprasTable.jsx'
import { EmptyState } from "../../../../../shared/components/ui/EmptyState.jsx";
import { ShoppingBag } from 'lucide-react'

/** "Compras" tab: full purchase history for this client. */
export function ComprasTab({ compras }) {
  if (compras.length === 0) {
    return <EmptyState icon={ShoppingBag} title="Nenhuma compra registrada ainda" />
  }
  return (
    <div className="animate-fade-in">
      <ComprasTable compras={compras} />
    </div>
  )
}
