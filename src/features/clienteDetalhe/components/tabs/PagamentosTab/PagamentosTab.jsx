import { PagamentosTable } from './PagamentosTable.jsx'
import { EmptyState } from "../../../../../shared/components/ui/EmptyState.jsx";
import { Wallet } from 'lucide-react'

/** "Pagamentos" tab: full payment history for this client. */
export function PagamentosTab({ pagamentos }) {
  if (pagamentos.length === 0) {
    return <EmptyState icon={Wallet} title="Nenhum pagamento registrado ainda" />
  }
  return (
    <div className="animate-fade-in">
      <PagamentosTable pagamentos={pagamentos} />
    </div>
  )
}
