export const EXPORT_FORMATS = [
  {
    value: "csv",
    label: "CSV",
  },
  {
    value: "xlsx",
    label: "Excel",
  },
  {
    value: "pdf",
    label: "PDF",
  },
];

export function buildExportFileName(formato = "csv") {
  const date = new Date();

  const timestamp = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

  return `movimentacoes-estoque-${timestamp}.${formato}`;
}