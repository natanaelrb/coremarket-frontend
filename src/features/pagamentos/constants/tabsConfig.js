/**
 * Tabs rendered above the payments table. `filterKey` maps to the
 * predicate applied in `filterPagamentos.js`; `countKey` (optional)
 * points to a badge count computed in `useTabsCounts`.
 */
export const PAGAMENTOS_TABS = Object.freeze([
  { key: 'todos', label: 'Todos', filterKey: 'todos' },
  { key: 'a-receber', label: 'A receber', filterKey: 'a-receber' },
  { key: 'recebidos', label: 'Recebidos', filterKey: 'recebidos' },
  { key: 'a-pagar', label: 'A pagar', filterKey: 'a-pagar' },
  { key: 'pagos', label: 'Pagos', filterKey: 'pagos' },
  { key: 'vencidos', label: 'Vencidos', filterKey: 'vencidos', countKey: 'vencidos' },
  { key: 'cancelados', label: 'Cancelados', filterKey: 'cancelados' },
  { key: 'conciliacao', label: 'Conciliação', filterKey: 'conciliacao', countKey: 'conciliacao' },
]);
