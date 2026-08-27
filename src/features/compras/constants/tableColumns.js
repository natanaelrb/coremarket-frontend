// Definição das colunas disponíveis na tabela de Compras.
// `visible` define o estado padrão; o usuário pode alternar via
// ColumnCustomizer (hook useColumnCustomization persiste a escolha).
export const DEFAULT_COLUMNS = [
  { id: "compra", label: "Compra", visible: true, sortable: true, locked: true },
  { id: "data", label: "Data", visible: true, sortable: true },
  { id: "fornecedor", label: "Fornecedor", visible: true, sortable: true },
  { id: "produtos", label: "Produtos", visible: true, sortable: true },
  { id: "total", label: "Total", visible: true, sortable: true },
  { id: "pagamento", label: "Pagamento", visible: true, sortable: false },
  { id: "recebimento", label: "Recebimento", visible: true, sortable: true },
  { id: "status", label: "Status", visible: true, sortable: true },
  { id: "responsavel", label: "Responsável", visible: true, sortable: false },
];

export const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100];
