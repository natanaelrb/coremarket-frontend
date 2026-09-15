// TODO(api): substituir por GET /api/clientes/{clienteId}/vendas?limit=3
export const MOCK_ULTIMAS_COMPRAS = {
  'CLI-000124': [
    { venda: '#VEN-1048', data: '2026-09-10', valor: 180.0 },
    { venda: '#VEN-1031', data: '2026-09-02', valor: 240.0 },
    { venda: '#VEN-1002', data: '2026-08-25', valor: 95.0 },
  ],
}

// TODO(api): substituir por GET /api/clientes/{clienteId}/compras (histórico completo de compras)
export const MOCK_COMPRAS_CLIENTE = {
  'CLI-000124': [
    { venda: '#VEN-1048', data: '2026-09-10', itens: 4, valor: 180.0, formaPagamento: 'PIX' },
    { venda: '#VEN-1031', data: '2026-09-02', itens: 6, valor: 240.0, formaPagamento: 'DINHEIRO' },
    { venda: '#VEN-1020', data: '2026-08-15', itens: 2, valor: 180.0, formaPagamento: 'CARTAO_CREDITO' },
    { venda: '#VEN-1002', data: '2026-08-25', itens: 3, valor: 95.0, formaPagamento: 'PIX' },
    { venda: '#VEN-0988', data: '2026-07-30', itens: 5, valor: 320.0, formaPagamento: 'DINHEIRO' },
  ],
}
