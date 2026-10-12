// MOCK DATA — Histórico de movimentações.
//
// TODO(api):
// GET /api/estoque/movimentacoes?page={page}&size={size}&periodoInicio=&periodoFim=&tipo=&origem=&status=&produtoId=&categoriaId=&usuarioId=
//
// Controller sugerido:
// MovimentacaoEstoqueController#listarMovimentacoes
//
// Entidade:
// MovimentacaoEstoque
// (id, produto, tipo, quantidade, estoqueAnterior, estoqueDepois,
//  origem, referenciaOrigem, usuarioResponsavel, status, motivo,
//  observacao, criadoEm)
import { PRODUTOS_MOCK } from '../../produtos/mocks/produtos.mock';

const usuarios = [
  {
    id: 'user-001',
    nome: 'Natanael Ribeiro',
    avatar: '👨‍💼',
    cargo: 'Administrador',
  },
  {
    id: 'user-002',
    nome: 'Caixa 1',
    avatar: '🧑‍💻',
    cargo: 'Operador de Caixa',
  },
  {
    id: 'user-003',
    nome: 'Caixa 2',
    avatar: '🧑‍💻',
    cargo: 'Operador de Caixa',
  },
  {
    id: 'user-004',
    nome: 'Gerente',
    avatar: '👩‍💼',
    cargo: 'Gerente de Loja',
  },
  {
    id: 'user-005',
    nome: 'Estoque',
    avatar: '📦',
    cargo: 'Sistema / Estoque',
  },
];

const templates = [
  {
    tipo: 'ENTRADA',
    origem: 'COMPRA',
    origemLabel: 'Compra #CMP-1048',
    origemLink: true,
    qtd: 50,
    antes: 20,
    motivo: 'Recebimento de mercadoria',
  },
  {
    tipo: 'SAIDA',
    origem: 'VENDA',
    origemLabel: 'Venda #VEN-2094',
    origemLink: true,
    qtd: -2,
    antes: 35,
    motivo: 'Venda no PDV',
  },
  {
    tipo: 'PERDA',
    origem: 'PRODUTO_VENCIDO',
    origemLabel: 'Produto Vencido',
    origemLink: false,
    qtd: -12,
    antes: 40,
    motivo: 'Produto vencido',
  },
  {
    tipo: 'AJUSTE',
    origem: 'AJUSTE_MANUAL',
    origemLabel: 'Ajuste Manual',
    origemLink: false,
    qtd: 5,
    antes: 10,
    motivo: 'Ajuste de inventário',
  },
  {
    tipo: 'SAIDA',
    origem: 'VENDA',
    origemLabel: 'Venda #VEN-2087',
    origemLink: true,
    qtd: -1,
    antes: 18,
    motivo: 'Venda no PDV',
  },
  {
    tipo: 'TRANSFERENCIA',
    origem: 'TRANSFERENCIA_INTERNA',
    origemLabel: 'Transferência Interna',
    origemLink: false,
    qtd: 30,
    antes: 70,
    motivo: 'Depósito → Loja 01',
  },
  {
    tipo: 'AJUSTE',
    origem: 'AJUSTE_MANUAL',
    origemLabel: 'Ajuste Manual',
    origemLink: false,
    qtd: -3,
    antes: 23,
    motivo: 'Divergência de contagem',
  },
  {
    tipo: 'DEVOLUCAO_CLIENTE',
    origem: 'DEVOLUCAO',
    origemLabel: 'Devolução Venda',
    origemLink: true,
    qtd: 2,
    antes: 12,
    motivo: 'Devolução de venda',
  },
  {
    tipo: 'ENTRADA',
    origem: 'COMPRA',
    origemLabel: 'Compra #CMP-1042',
    origemLink: true,
    qtd: 100,
    antes: 120,
    motivo: 'Recebimento de mercadoria',
  },
  {
    tipo: 'DEVOLUCAO_FORNECEDOR',
    origem: 'DEVOLUCAO',
    origemLabel: 'Devolução Fornecedor',
    origemLink: true,
    qtd: -5,
    antes: 50,
    motivo: 'Produto avariado',
  },
];

const statusPool = [
  'CONCLUIDA',
  'CONCLUIDA',
  'CONCLUIDA',
  'CONCLUIDA',
  'PENDENTE',
  'CANCELADA',
];

function pad(n) {
  return String(n).padStart(2, '0');
}

function buildMovement(index) {
  const template = templates[index % templates.length];
  const produto = PRODUTOS_MOCK[index % PRODUTOS_MOCK.length];
  const usuario = usuarios[index % usuarios.length];
  const status = statusPool[index % statusPool.length];

  const day = 9 - Math.floor(index / 4);
  const hour = 22 - (index % 12);
  const minute = (index * 7) % 60;

  const depois = template.antes + template.qtd;

  return {
    id: `MOV-2026${pad(8)}${pad(
      Math.max(1, day)
    )}-${String(1248 - index).padStart(6, '0')}`,

    dataHora: `2026-08-${pad(
      Math.max(1, day)
    )}T${pad(Math.max(0, hour))}:${pad(minute)}:00`,

    produto,

    tipo: template.tipo,

    origem: template.origem,

    origemLabel: template.origemLabel,

    origemLink: template.origemLink,

    quantidade: template.qtd,

    estoqueAnterior: template.antes,

    estoqueDepois: depois,

    usuario,

    status,

    motivo: template.motivo,

    observacao:
      template.tipo === 'ENTRADA'
        ? 'Mercadoria recebida conforme nota fiscal.'
        : '',

    unidade: 'UN',

    notaFiscal:
      template.tipo === 'ENTRADA'
        ? `NF-e 000.${125 + index}.489`
        : null,

    fornecedor:
      template.tipo === 'ENTRADA'
        ? 'Distribuidora XYZ'
        : null,
  };
}

export const MOCK_MOVEMENTS = Array.from(
  { length: 2487 },
  (_, index) => buildMovement(index)
);

export const MOCK_MOVEMENTS_COUNT = MOCK_MOVEMENTS.length;