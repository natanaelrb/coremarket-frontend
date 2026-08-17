// Mock: valores agregados do card "Resumo do estoque" que não são triviais
// de derivar apenas da lista de produtos (ex: valor reservado, itens em trânsito).
// Endpoint real sugerido: GET /api/produtos/resumo-estoque

export const RESUMO_ESTOQUE_EXTRA_MOCK = {
  estoqueReservadoValor: 45320.1,
  itensEmTransito: 128,
};
