// MOCK DATA — Histórico de movimentações.
// TODO(api): GET /api/estoque/movimentacoes?page={page}&size={size}&periodoInicio=&periodoFim=&tipo=&origem=&status=&produtoId=&categoriaId=&usuarioId=
// Controller sugerido: MovimentacaoEstoqueController#listarMovimentacoes
// Entidade: MovimentacaoEstoque (id, produto, tipo, quantidade, estoqueAnterior, estoqueDepois,
//           origem, referenciaOrigem, usuarioResponsavel, status, motivo, observacao, criadoEm)

const produtos = [
  { nome: 'Coca-Cola 2L', sku: 'COCA-2L-001', categoria: 'Bebidas', imagem: '🥤' },
  { nome: 'Arroz Tio João 5kg', sku: 'ARRO2-5KG', categoria: 'Mercearia', imagem: '🌾' },
  { nome: 'Leite Integral 1L', sku: 'LEITE-1L', categoria: 'Laticínios', imagem: '🥛' },
  { nome: 'Açúcar Cristal 1kg', sku: 'ACUCAR-1KG', categoria: 'Mercearia', imagem: '🍬' },
  { nome: 'Óleo de Soja 900ml', sku: 'OLEO-900ML', categoria: 'Mercearia', imagem: '🫗' },
  { nome: 'Feijão Carioca 1kg', sku: 'FEIJAO-1KG', categoria: 'Mercearia', imagem: '🫘' },
  { nome: 'Biscoito Recheado', sku: 'BISC-RECH', categoria: 'Snacks', imagem: '🍪' },
  { nome: 'Cerveja Brahma 350ml', sku: 'BRAHMA-350', categoria: 'Bebidas', imagem: '🍺' },
];

const usuarios = [
  { nome: 'Natanael Ribeiro', avatar: '👨‍💼', cargo: 'Administrador' },
  { nome: 'Caixa 1', avatar: '🧑‍💻', cargo: 'Operador de Caixa' },
  { nome: 'Caixa 2', avatar: '🧑‍💻', cargo: 'Operador de Caixa' },
  { nome: 'Gerente', avatar: '👩‍💼', cargo: 'Gerente de Loja' },
  { nome: 'Estoque', avatar: '📦', cargo: 'Sistema / Estoque' },
];

const templates = [
  { tipo: 'ENTRADA', origem: 'COMPRA', origemLabel: 'Compra #CMP-1048', origemLink: true, qtd: 50, antes: 20, motivo: 'Recebimento de mercadoria' },
  { tipo: 'SAIDA', origem: 'VENDA', origemLabel: 'Venda #VEN-2094', origemLink: true, qtd: -2, antes: 35, motivo: 'Venda no PDV' },
  { tipo: 'PERDA', origem: 'PRODUTO_VENCIDO', origemLabel: 'Produto Vencido', origemLink: false, qtd: -12, antes: 40, motivo: 'Produto vencido' },
  { tipo: 'AJUSTE', origem: 'AJUSTE_MANUAL', origemLabel: 'Ajuste Manual', origemLink: false, qtd: 5, antes: 10, motivo: 'Ajuste de inventário' },
  { tipo: 'SAIDA', origem: 'VENDA', origemLabel: 'Venda #VEN-2087', origemLink: true, qtd: -1, antes: 18, motivo: 'Venda no PDV' },
  { tipo: 'TRANSFERENCIA', origem: 'TRANSFERENCIA_INTERNA', origemLabel: 'Transferência Interna', origemLink: false, qtd: 30, antes: 70, motivo: 'Depósito → Loja 01' },
  { tipo: 'AJUSTE', origem: 'AJUSTE_MANUAL', origemLabel: 'Ajuste Manual', origemLink: false, qtd: -3, antes: 23, motivo: 'Divergência de contagem' },
  { tipo: 'DEVOLUCAO_CLIENTE', origem: 'DEVOLUCAO', origemLabel: 'Devolução Venda', origemLink: true, qtd: 2, antes: 12, motivo: 'Devolução de venda' },
  { tipo: 'ENTRADA', origem: 'COMPRA', origemLabel: 'Compra #CMP-1042', origemLink: true, qtd: 100, antes: 120, motivo: 'Recebimento de mercadoria' },
  { tipo: 'DEVOLUCAO_FORNECEDOR', origem: 'DEVOLUCAO', origemLabel: 'Devolução Fornecedor', origemLink: true, qtd: -5, antes: 50, motivo: 'Produto avariado' },
];

const statusPool = ['CONCLUIDA', 'CONCLUIDA', 'CONCLUIDA', 'CONCLUIDA', 'PENDENTE', 'CANCELADA'];

function pad(n) { return String(n).padStart(2, '0'); }

function buildMovement(index) {
  const t = templates[index % templates.length];
  const produto = produtos[index % produtos.length];
  const usuario = usuarios[index % usuarios.length];
  const status = statusPool[index % statusPool.length];
  const day = 9 - Math.floor(index / 4);
  const hour = 22 - (index % 12);
  const minute = (index * 7) % 60;
  const depois = t.antes + t.qtd;

  return {
    id: `MOV-2026${pad(8)}${pad(Math.max(1, day))}-${String(1248 - index).padStart(6, '0')}`,
    dataHora: `2026-08-${pad(Math.max(1, day))}T${pad(Math.max(0, hour))}:${pad(minute)}:00`,
    produto,
    tipo: t.tipo,
    origem: t.origem,
    origemLabel: t.origemLabel,
    origemLink: t.origemLink,
    quantidade: t.qtd,
    estoqueAnterior: t.antes,
    estoqueDepois: depois,
    usuario,
    status,
    motivo: t.motivo,
    observacao: t.tipo === 'ENTRADA' ? 'Mercadoria recebida conforme nota fiscal.' : '',
    unidade: 'UN',
    notaFiscal: t.tipo === 'ENTRADA' ? `NF-e 000.${125 + index}.489` : null,
    fornecedor: t.tipo === 'ENTRADA' ? 'Distribuidora XYZ' : null,
  };
}

export const MOCK_MOVEMENTS = Array.from({ length: 2487 }, (_, i) => buildMovement(i));

export const MOCK_MOVEMENTS_COUNT = MOCK_MOVEMENTS.length;
