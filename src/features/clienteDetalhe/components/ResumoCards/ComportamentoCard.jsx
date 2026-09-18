import { CardShell } from "./CardShell.jsx";
import { InfoRow } from "./InfoRow.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../shared/utils/formatDate.js";

/** "Comportamento" card: last/first purchase, purchase count, avg ticket. */
export function ComportamentoCard({ cliente }) {
  return (
    <CardShell title="Comportamento">
      <InfoRow
        label="Última compra"
        value={formatDate(cliente.ultimaCompra)}
      />

      <InfoRow
        label="Primeira compra"
        value={formatDate(cliente.primeiraCompra)}
      />

      <InfoRow
        label="Quantidade de compras"
        value={cliente.quantidadeCompras}
      />

      <InfoRow
        label="Ticket médio"
        value={formatCurrency(cliente.ticketMedio)}
        tone="text-[#2563eb]"
      />
    </CardShell>
  );
}