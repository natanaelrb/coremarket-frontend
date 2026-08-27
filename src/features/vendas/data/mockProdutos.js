// TODO(api): substituir por GET /api/produtos/buscar?termo={termo}&limite=8
// Controller esperado: ProdutoController#buscarPorTermo
export const MOCK_PRODUTOS = [
  {
    id: 'p-001',
    codigoBarras: '7894900011517',
    nome: 'Coca-Cola 2L',
    preco: 9.99,
    estoque: 32,
    imagemUrl: null,
  },
  {
    id: 'p-002',
    codigoBarras: '7894900023456',
    nome: 'Coca-Cola Lata 350ml',
    preco: 4.99,
    estoque: 84,
    imagemUrl: null,
  },
  {
    id: 'p-003',
    codigoBarras: '7894900035678',
    nome: 'Coca-Cola Zero 2L',
    preco: 10.49,
    estoque: 18,
    imagemUrl: null,
  },
  {
    id: 'p-004',
    codigoBarras: '7894900047890',
    nome: 'Coca-Cola Sem Açúcar 350ml',
    preco: 4.99,
    estoque: 40,
    imagemUrl: null,
  },
  {
    id: 'p-005',
    codigoBarras: '7891234567890',
    nome: 'Arroz 5kg',
    preco: 25.9,
    estoque: 56,
    imagemUrl: null,
  },
  {
    id: 'p-006',
    codigoBarras: '7891234567891',
    nome: 'Feijão 1kg',
    preco: 8.5,
    estoque: 73,
    imagemUrl: null,
  },
  {
    id: 'p-007',
    codigoBarras: '7891234567892',
    nome: 'Açúcar Cristal 1kg',
    preco: 5.2,
    estoque: 61,
    imagemUrl: null,
  },
  {
    id: 'p-008',
    codigoBarras: '7891234567893',
    nome: 'Óleo de Soja 900ml',
    preco: 7.35,
    estoque: 29,
    imagemUrl: null,
  },
];

