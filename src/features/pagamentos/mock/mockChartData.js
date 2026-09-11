// TODO(api): substituir por GET /api/pagamentos/resumo-diario?periodoInicio=&periodoFim=
// Deve retornar recebimentos, pagamentos e saldo acumulado por dia no período.
export const MOCK_RECEBIMENTOS_PAGAMENTOS_SERIE = [
  { data: '2026-08-12', recebimentos: 2100, pagamentos: 1400, saldo: 700 },
  { data: '2026-08-13', recebimentos: 3200, pagamentos: 2600, saldo: 1300 },
  { data: '2026-08-14', recebimentos: 2650, pagamentos: 3100, saldo: 850 },
  { data: '2026-08-15', recebimentos: 4100, pagamentos: 2200, saldo: 2750 },
  { data: '2026-08-16', recebimentos: 3450, pagamentos: 3800, saldo: 2400 },
  { data: '2026-08-17', recebimentos: 5200, pagamentos: 2900, saldo: 4700 },
  { data: '2026-08-18', recebimentos: 1875, pagamentos: 980, saldo: 5595 },
];
