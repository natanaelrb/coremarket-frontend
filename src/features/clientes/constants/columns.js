// Define as colunas disponíveis, seus rótulos e se aceitam ordenação.
// Usado pela tabela e pelo menu "Colunas".
export const COLUMN_DEFS = [
  { key: "codigo", label: "Código", sortable: true },
  { key: "nome", label: "Nome", sortable: true },
  { key: "cpf", label: "CPF/CNPJ", sortable: false },
  { key: "telefone", label: "Telefone", sortable: false },
  { key: "cidade", label: "Cidade", sortable: true },
  { key: "ultimaCompra", label: "Última compra", sortable: true },
  { key: "valorGasto", label: "Valor gasto", sortable: true },
  { key: "status", label: "Status", sortable: true },
];
