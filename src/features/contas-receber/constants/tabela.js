/** Colunas da tabela principal. `sortKey` aponta para o campo ordenável (utils/sortContas). */
export const TABLE_COLUMNS = [
  { key: 'id',              label: 'Conta',              sortKey: 'id' },
  { key: 'cliente',         label: 'Cliente',            sortKey: 'clienteNome' },
  { key: 'venda',           label: 'Venda',              sortKey: 'vendaId' },
  { key: 'emissao',         label: 'Emissão',            sortKey: 'emissao' },
  { key: 'vencimento',      label: 'Vencimento',         sortKey: 'vencimento' },
  { key: 'valorOriginal',   label: 'Valor original',     sortKey: 'valorOriginal', align: 'right' },
  { key: 'valorPago',       label: 'Valor pago',         sortKey: 'valorPago',     align: 'right' },
  { key: 'saldo',           label: 'Saldo restante',     sortKey: 'saldo',         align: 'right' },
  { key: 'diasAtraso',      label: 'Dias atraso',        sortKey: 'diasAtraso',    align: 'center' },
  { key: 'status',          label: 'Status',             sortKey: 'statusOrder',   align: 'center' },
  { key: 'forma',           label: 'Forma de pagamento', sortKey: 'formaPagamento' },
  { key: 'responsavel',     label: 'Responsável',        sortKey: 'responsavel' },
  { key: 'ultimoPagamento', label: 'Últ. pagamento',     sortKey: 'ultimoPagamento' },
];

export const PAGE_SIZES = [10, 25, 50, 100];
export const DEFAULT_PAGE_SIZE = 50;
export const DEFAULT_SORT = Object.freeze({ key: 'id', dir: 'asc' });
