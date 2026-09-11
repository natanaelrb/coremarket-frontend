/** Column definitions for the payments table header. */
export const TABLE_COLUMNS = Object.freeze([
  { key: 'data', label: 'Data' },
  { key: 'tipo', label: 'Tipo' },
  { key: 'pessoa', label: 'Cliente/Fornecedor' },
  { key: 'origem', label: 'Origem' },
  { key: 'forma', label: 'Forma' },
  { key: 'vencimento', label: 'Vencimento' },
  { key: 'valor', label: 'Valor', align: 'right' },
  { key: 'status', label: 'Status' },
  { key: 'acoes', label: 'Ações', align: 'right' },
]);
