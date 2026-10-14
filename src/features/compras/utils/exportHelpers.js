// Utilitário de exportação client-side (CSV) usado como fallback enquanto
// o endpoint de exportação definitivo (Spring Boot) não está disponível.
// TODO(api): substituir por chamada a GET /api/compras/export?formato=csv|xlsx
import {
  formatCurrency,
  formatDate,
  formatCompraNumero,
} from "./formatters";

import { getStatusLabel } from "./statusHelpers";

export function exportComprasToCsv(
  compras,
  filename = "compras.csv"
) {
  if (!Array.isArray(compras) || compras.length === 0) {
    throw new Error("Não existem compras para exportar.");
  }

  const header = [
    "Compra",
    "Data",
    "Fornecedor",
    "Produtos",
    "Total",
    "Status",
    "Responsável",
  ];

  const escaparCampo = (valor) => {
    const texto = String(valor ?? "").replace(/\r?\n/g, " ");
    return `"${texto.replace(/"/g, '""')}"`;
  };

  const rows = compras.map((compra) => [
    formatCompraNumero(compra.numero),
    formatDate(compra.data),
    compra.fornecedorNome,
    compra.produtosCount,
    formatCurrency(compra.total),
    getStatusLabel(compra.status),
    compra.responsavel,
  ]);

  const csvContent = [header, ...rows]
    .map((row) => row.map(escaparCampo).join(";"))
    .join("\r\n");

  const blob = new Blob(
    ["\uFEFFsep=;\r\n", csvContent],
    { type: "text/csv;charset=utf-8;" }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename.endsWith(".csv")
    ? filename
    : `${filename}.csv`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
