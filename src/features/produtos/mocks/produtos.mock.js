// Mock: lista de produtos.
// Endpoint real sugerido: GET /api/produtos (paginado, com filtros por query params)
// Endpoint real sugerido (detalhe): GET /api/produtos/{id}
//
// Os 6 primeiros itens reproduzem exatamente os dados do protótipo visual.
// Os demais são gerados proceduralmente apenas para simular volume/paginação.

const BASE_PRODUTOS = [
  {
    id: 'PROD-0001',
    codigo: 'PROD-0001',
    codigoBarras: '7894900011517',
    nome: 'Coca-Cola 2L',
    categoria: 'Bebidas',
    marca: 'Coca-Cola',
    fornecedor: 'Coca-Cola FEMSA',
    sku: 'COC-2L',
    ativo: true,
    tipo: 'Revenda',
    ncm: '2202.10.00',
    unidade: 'Un',
    pesoKg: 2.1,
    volumeL: 2.0,
    precoCompra: 7.2,
    precoVenda: 12.9,
    estoque: 150,
    estoqueMinimo: 20,
    estoqueMaximo: 300,
    estoqueReservado: 10,
    validadeMaisProxima: '2026-12-15',
    lotesCount: 3,
    imagemCor: '#DC2626',
    imagemEmoji: '🥤',
  },
  {
    id: 'PROD-0002',
    codigo: 'PROD-0002',
    codigoBarras: '7891025101238',
    nome: 'Leite Integral 1L',
    categoria: 'Laticínios',
    marca: 'Italac',
    fornecedor: 'Laticínios Itálac',
    sku: 'LEI-INT-1L',
    ativo: true,
    tipo: 'Revenda',
    ncm: '0401.20.10',
    unidade: 'Un',
    pesoKg: 1.03,
    volumeL: 1.0,
    precoCompra: 3.9,
    precoVenda: 5.49,
    estoque: 32,
    estoqueMinimo: 50,
    estoqueMaximo: 200,
    estoqueReservado: 4,
    validadeMaisProxima: '2026-08-05',
    lotesCount: 2,
    imagemCor: '#3B82F6',
    imagemEmoji: '🥛',
  },
  {
    id: 'PROD-0003',
    codigo: 'PROD-0003',
    codigoBarras: '7891234567890',
    nome: 'Iogurte Natural 170g',
    categoria: 'Laticínios',
    marca: 'Batavo',
    fornecedor: 'Batavo Distribuidora',
    sku: 'IOG-NAT-170',
    ativo: true,
    tipo: 'Revenda',
    ncm: '0403.10.00',
    unidade: 'Un',
    pesoKg: 0.17,
    volumeL: 0.17,
    precoCompra: 1.5,
    precoVenda: 2.19,
    estoque: 18,
    estoqueMinimo: 30,
    estoqueMaximo: 120,
    estoqueReservado: 2,
    validadeMaisProxima: '2026-08-03',
    lotesCount: 1,
    imagemCor: '#F43F5E',
    imagemEmoji: '🍦',
  },
  {
    id: 'PROD-0004',
    codigo: 'PROD-0004',
    codigoBarras: '7896005800123',
    nome: 'Café Pilão 500g',
    categoria: 'Alimentos',
    marca: 'Pilão',
    fornecedor: 'Café Pilão Brasil',
    sku: 'CAF-PIL-500',
    ativo: true,
    tipo: 'Revenda',
    ncm: '0901.21.00',
    unidade: 'Un',
    pesoKg: 0.5,
    volumeL: null,
    precoCompra: 15.4,
    precoVenda: 21.9,
    estoque: 8,
    estoqueMinimo: 20,
    estoqueMaximo: 100,
    estoqueReservado: 0,
    validadeMaisProxima: '2026-10-10',
    lotesCount: 2,
    imagemCor: '#7C2D12',
    imagemEmoji: '☕',
  },
  {
    id: 'PROD-0005',
    codigo: 'PROD-0005',
    codigoBarras: '7896098900012',
    nome: 'Detergente Ypê 500ml',
    categoria: 'Limpeza',
    marca: 'Ypê',
    fornecedor: 'Ypê Química',
    sku: 'DET-YPE-500',
    ativo: true,
    tipo: 'Revenda',
    ncm: '3402.20.00',
    unidade: 'Un',
    pesoKg: 0.55,
    volumeL: 0.5,
    precoCompra: 1.1,
    precoVenda: 1.89,
    estoque: 0,
    estoqueMinimo: 15,
    estoqueMaximo: 80,
    estoqueReservado: 0,
    validadeMaisProxima: null,
    lotesCount: 0,
    imagemCor: '#0EA5E9',
    imagemEmoji: '🧴',
  },
  {
    id: 'PROD-0006',
    codigo: 'PROD-0006',
    codigoBarras: '7893000300051',
    nome: 'Queijo Mussarela Kg',
    categoria: 'Frios',
    marca: 'Polenghi',
    fornecedor: 'Polenghi Alimentos',
    sku: 'QUE-MUS-KG',
    ativo: true,
    tipo: 'Revenda',
    ncm: '0406.10.00',
    unidade: 'Kg',
    pesoKg: 1.0,
    volumeL: null,
    precoCompra: 28.0,
    precoVenda: 42.5,
    estoque: 25,
    estoqueMinimo: 30,
    estoqueMaximo: 100,
    estoqueReservado: 5,
    validadeMaisProxima: '2026-07-30',
    lotesCount: 3,
    imagemCor: '#FACC15',
    imagemEmoji: '🧀',
  },
];

const TOTAL_PRODUTOS_SIMULADO = 2481;
const TOTAL_INATIVOS_SIMULADO = 116;

const CATEGORIAS_CICLO = ['Bebidas', 'Laticínios', 'Alimentos', 'Limpeza', 'Frios', 'Higiene', 'Padaria', 'Hortifruti'];
const MARCAS_CICLO = ['Coca-Cola', 'Italac', 'Batavo', 'Pilão', 'Ypê', 'Polenghi', 'Nestlé', 'Sadia'];
const EMOJI_CICLO = ['🥤', '🥛', '🍦', '☕', '🧴', '🧀', '🍞', '🍎', '🧻', '🍫'];
const COR_CICLO = ['#DC2626', '#3B82F6', '#F43F5E', '#7C2D12', '#0EA5E9', '#FACC15', '#7C3AED', '#16A34A'];

// Gera produtos adicionais deterministicamente (mesma seed sempre) só para simular volume/paginação.
function gerarProdutosAdicionais(quantidade) {
  const produtos = [];
  for (let i = 0; i < quantidade; i++) {
    const n = i + BASE_PRODUTOS.length + 1;
    const codigo = `PROD-${String(n).padStart(4, '0')}`;
    const seed = n * 9301 + 49297;
    const rand = (seed % 233280) / 233280;

    const categoriaIdx = n % CATEGORIAS_CICLO.length;
    const marcaIdx = n % MARCAS_CICLO.length;
    const estoque = Math.floor(rand * 200);
    const estoqueMinimo = 10 + (n % 40);
    const precoCompra = Number((5 + rand * 90).toFixed(2));
    const margem = 1.2 + (n % 5) * 0.08;
    const precoVenda = Number((precoCompra * margem).toFixed(2));

    const diasValidade = ((n * 7) % 220) - 15; // permite alguns vencidos
    const validadeMaisProxima =
      n % 6 === 0
        ? null
        : new Date(Date.now() + diasValidade * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

    produtos.push({
      id: codigo,
      codigo,
      codigoBarras: `78${String(9000000000000 + n).slice(0, 11)}`,
      nome: `${CATEGORIAS_CICLO[categoriaIdx]} Produto ${n}`,
      categoria: CATEGORIAS_CICLO[categoriaIdx],
      marca: MARCAS_CICLO[marcaIdx],
      fornecedor: FORNECEDOR_POR_MARCA[MARCAS_CICLO[marcaIdx]] || 'Fornecedor Genérico',
      sku: `SKU-${n}`,
      ativo: n % 21 !== 0,
      tipo: n % 9 === 0 ? 'Matéria-prima' : 'Revenda',
      ncm: '0000.00.00',
      unidade: n % 5 === 0 ? 'Kg' : 'Un',
      pesoKg: Number((0.1 + rand * 3).toFixed(2)),
      volumeL: n % 3 === 0 ? Number((0.1 + rand * 2).toFixed(2)) : null,
      precoCompra,
      precoVenda,
      estoque,
      estoqueMinimo,
      estoqueMaximo: estoqueMinimo * 5,
      estoqueReservado: Math.floor(estoque * 0.1),
      validadeMaisProxima,
      lotesCount: validadeMaisProxima ? 1 + (n % 3) : 0,
      imagemCor: COR_CICLO[n % COR_CICLO.length],
      imagemEmoji: EMOJI_CICLO[n % EMOJI_CICLO.length],
    });
  }
  return produtos;
}

const FORNECEDOR_POR_MARCA = {
  'Coca-Cola': 'Coca-Cola FEMSA',
  Italac: 'Laticínios Itálac',
  Batavo: 'Batavo Distribuidora',
  Pilão: 'Café Pilão Brasil',
  Ypê: 'Ypê Química',
  Polenghi: 'Polenghi Alimentos',
  Nestlé: 'Nestlé Brasil',
  Sadia: 'Sadia Alimentos',
};

export const PRODUTOS_MOCK = [
  ...BASE_PRODUTOS,
  ...gerarProdutosAdicionais(TOTAL_PRODUTOS_SIMULADO - BASE_PRODUTOS.length),
];

export const TOTAL_PRODUTOS_CADASTRADOS = TOTAL_PRODUTOS_SIMULADO;
export const TOTAL_PRODUTOS_INATIVOS = TOTAL_INATIVOS_SIMULADO;
