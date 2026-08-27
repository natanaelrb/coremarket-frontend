// TODO(api): substituir por GET /api/pagamentos/{id}/detalhe
// Retorna os dados de conciliação/adquirente exibidos no painel lateral.
export const MOCK_DETAIL_BY_ID = {
  'pg-000842': {
    valorBruto: 250.0,
    taxaValor: 4.5,
    taxaPercentual: 1.8,
    valorLiquido: 245.5,
    bandeira: 'VISA',
    adquirente: 'Cielo',
    nsu: '123456789012',
    autorizacao: '987654',
    terminal: 'POS 01',
    statusAdquirente: 'Aprovado',
    previsaoLiquidacao: '2026-08-20',
    dataLiquidacao: '2026-08-20T10:15:00',
    historico: [
      { data: '2026-08-18T14:22:00', descricao: 'Pagamento criado', autor: 'Natanael' },
      { data: '2026-08-18T14:24:00', descricao: 'Pagamento autorizado', autor: 'Sistema' },
      { data: '2026-08-20T10:15:00', descricao: 'Pagamento liquidado', autor: 'Sistema' },
    ],
  },
};

/**
 * Builds a generic detail payload for rows that don't have a curated
 * entry in `MOCK_DETAIL_BY_ID` — keeps the panel functional for the
 * seeded/random rows too.
 * @param {import('../types/pagamento.types.js').Pagamento} pagamento
 * @returns {import('../types/pagamento.types.js').PagamentoDetalhe}
 */
export function buildFallbackDetail(pagamento) {
  const taxaPercentual = pagamento.forma === 'CARTAO_CREDITO' ? 3.2 : pagamento.forma === 'CARTAO_DEBITO' ? 1.4 : 0;
  const taxaValor = Math.round(pagamento.valor * (taxaPercentual / 100) * 100) / 100;

  return {
    pagamento,
    valorBruto: pagamento.valor,
    taxaValor,
    taxaPercentual,
    valorLiquido: Math.round((pagamento.valor - taxaValor) * 100) / 100,
    bandeira: pagamento.forma.startsWith('CARTAO') ? 'VISA' : null,
    adquirente: pagamento.forma.startsWith('CARTAO') ? 'Cielo' : null,
    nsu: pagamento.forma.startsWith('CARTAO') ? String(100000000000 + Math.floor(Math.random() * 899999999999)) : null,
    autorizacao: pagamento.forma.startsWith('CARTAO') ? String(100000 + Math.floor(Math.random() * 899999)) : null,
    terminal: pagamento.forma.startsWith('CARTAO') ? 'POS 01' : null,
    statusAdquirente: pagamento.status === 'RECEBIDO' || pagamento.status === 'PAGO' ? 'Aprovado' : 'Aguardando',
    previsaoLiquidacao: pagamento.dataVencimento,
    dataLiquidacao: pagamento.dataPagamento,
    historico: [
      { data: pagamento.dataCriacao, descricao: 'Lançamento criado', autor: 'Natanael' },
      ...(pagamento.dataPagamento
        ? [{ data: pagamento.dataPagamento, descricao: 'Lançamento liquidado', autor: 'Sistema' }]
        : []),
    ],
  };
}
