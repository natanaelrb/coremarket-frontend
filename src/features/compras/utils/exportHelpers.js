// Utilitário de exportação client-side (CSV) usado como fallback enquanto
// o endpoint de exportação definitivo (Spring Boot) não está disponível.
// TODO(api): substituir por chamada a GET /api/compras/export?formato=csv|xlsx
import { formatCurrency, formatDate, formatCompraNumero } from "./formatters";
import { getStatusLabel } from "./statusHelpers";

export function exportComprasToCsv(compras, filename = "compras.csv") {
  const header = ["Compra", "Data", "Fornecedor", "Produtos", "Total", "Status", "Responsável"];
  const rows = compras.map((c) => [
    formatCompraNumero(c.numero),
    formatDate(c.data),
    c.fornecedorNome,
    c.produtosCount,
    formatCurrency(c.total),
    getStatusLabel(c.status),
    c.responsavel,
  ]);

  const csvContent = [header, ...rows].map((row) => row.join(";")).join("\\n");
  const blob = new Blob([`\\uFEFF${csvContent}`], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}
