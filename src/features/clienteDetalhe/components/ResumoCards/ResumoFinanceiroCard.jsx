import { CardShell } from './CardShell.jsx'
import { InfoRow } from './InfoRow.jsx'
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/** "Resumo financeiro" card: total comprado/pago, saldo, total vencido. */
export function ResumoFinanceiroCard({ cliente }) {
  return (
    <CardShell title="Resumo financeiro">
      <InfoRow label="Total em compras" value={formatCurrency(cliente.totalComprado)} />
      <InfoRow label="Total pago" value={formatCurrency(cliente.totalPago)} />
      <InfoRow label="Saldo em aberto" value={formatCurrency(cliente.emAberto)} tone="text-cm-amber" />
      <InfoRow label="Total vencido" value={formatCurrency(cliente.emAtraso)} tone="text-cm-red" />
    </CardShell>
  )
}
