import { StatusPagamento } from '../constants/statusPagamento.js';
import { TipoPagamento } from '../constants/tipoPagamento.js';
import { FormaPagamento } from '../constants/formaPagamento.js';
import { OrigemPagamento } from '../constants/origemPagamento.js';

// TODO(api): substituir por GET /api/pagamentos?periodoInicio=&periodoFim=&page=&size=
// Paginação, ordenação e filtros devem ser delegados ao backend em produção;
// este mock replica o formato esperado da resposta paginada do Spring Data.
const BASE_PAGAMENTOS = [
  {
    id: 'pg-000842',
    codigo: '000842',
    tipo: TipoPagamento.RECEBIMENTO,
    status: StatusPagamento.RECEBIDO,
    pessoa: 'João Silva',
    origem: OrigemPagamento.VENDA,
    origemReferencia: '#1042',
    forma: FormaPagamento.PIX,
    parcelas: 1,
    valor: 150.0,
    dataCriacao: '2026-08-18T14:22:00',
    dataVencimento: '2026-08-18',
    dataPagamento: '2026-08-18T14:24:00',
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000841',
    codigo: '000841',
    tipo: TipoPagamento.PAGAMENTO,
    status: StatusPagamento.PAGO,
    pessoa: 'Distribuidora ABC',
    origem: OrigemPagamento.COMPRA,
    origemReferencia: '#582',
    forma: FormaPagamento.BOLETO,
    parcelas: 1,
    valor: 2400.0,
    dataCriacao: '2026-08-18T14:20:00',
    dataVencimento: '2026-08-18',
    dataPagamento: '2026-08-18T14:20:00',
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000840',
    codigo: '000840',
    tipo: TipoPagamento.RECEBIMENTO,
    status: StatusPagamento.PENDENTE,
    pessoa: 'Maria Souza',
    origem: OrigemPagamento.DIVIDA,
    origemReferencia: '#128',
    forma: FormaPagamento.DINHEIRO,
    parcelas: 1,
    valor: 85.0,
    dataCriacao: '2026-08-18T13:45:00',
    dataVencimento: '2026-08-19',
    dataPagamento: null,
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000839',
    codigo: '000839',
    tipo: TipoPagamento.RECEBIMENTO,
    status: StatusPagamento.PENDENTE,
    pessoa: 'Carlos Lima',
    origem: OrigemPagamento.VENDA,
    origemReferencia: '#1041',
    forma: FormaPagamento.CARTAO_CREDITO,
    parcelas: 2,
    valor: 200.0,
    dataCriacao: '2026-08-17T16:10:00',
    dataVencimento: '2026-08-20',
    dataPagamento: null,
    lojaId: 'loja-matriz',
    pendenteConciliacao: true,
  },
  {
    id: 'pg-000838',
    codigo: '000838',
    tipo: TipoPagamento.PAGAMENTO,
    status: StatusPagamento.PAGO,
    pessoa: 'Energia Elétrica',
    origem: OrigemPagamento.DESPESA,
    origemReferencia: '#215',
    forma: FormaPagamento.DEBITO_AUTOMATICO,
    parcelas: 1,
    valor: 320.0,
    dataCriacao: '2026-08-17T15:55:00',
    dataVencimento: '2026-08-17',
    dataPagamento: '2026-08-17T15:55:00',
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000837',
    codigo: '000837',
    tipo: TipoPagamento.RECEBIMENTO,
    status: StatusPagamento.RECEBIDO,
    pessoa: 'Juliana Alves',
    origem: OrigemPagamento.DIVIDA,
    origemReferencia: '#129',
    forma: FormaPagamento.PIX,
    parcelas: 1,
    valor: 300.0,
    dataCriacao: '2026-08-17T10:30:00',
    dataVencimento: '2026-08-17',
    dataPagamento: '2026-08-17T10:30:00',
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000836',
    codigo: '000836',
    tipo: TipoPagamento.PAGAMENTO,
    status: StatusPagamento.PENDENTE,
    pessoa: 'Fornecedor XYZ',
    origem: OrigemPagamento.COMPRA,
    origemReferencia: '#581',
    forma: FormaPagamento.TRANSFERENCIA,
    parcelas: 1,
    valor: 1750.0,
    dataCriacao: '2026-08-16T09:15:00',
    dataVencimento: '2026-08-25',
    dataPagamento: null,
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000835',
    codigo: '000835',
    tipo: TipoPagamento.PAGAMENTO,
    status: StatusPagamento.VENCIDO,
    pessoa: 'Aluguel da Loja',
    origem: OrigemPagamento.DESPESA,
    origemReferencia: '#214',
    forma: FormaPagamento.BOLETO,
    parcelas: 1,
    valor: 1200.0,
    dataCriacao: '2026-08-15T11:20:00',
    dataVencimento: '2026-08-15',
    dataPagamento: null,
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000834',
    codigo: '000834',
    tipo: TipoPagamento.RECEBIMENTO,
    status: StatusPagamento.RECEBIDO,
    pessoa: 'Pedro Augusto',
    origem: OrigemPagamento.VENDA,
    origemReferencia: '#1039',
    forma: FormaPagamento.CARTAO_DEBITO,
    parcelas: 1,
    valor: 120.0,
    dataCriacao: '2026-08-15T09:40:00',
    dataVencimento: '2026-08-15',
    dataPagamento: '2026-08-15T09:40:00',
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
  {
    id: 'pg-000833',
    codigo: '000833',
    tipo: TipoPagamento.RECEBIMENTO,
    status: StatusPagamento.PENDENTE,
    pessoa: 'Ana Beatriz',
    origem: OrigemPagamento.VENDA,
    origemReferencia: '#1038',
    forma: FormaPagamento.BOLETO,
    parcelas: 1,
    valor: 200.0,
    dataCriacao: '2026-08-14T17:05:00',
    dataVencimento: '2026-08-22',
    dataPagamento: null,
    lojaId: 'loja-matriz',
    pendenteConciliacao: false,
  },
];

const PESSOAS_EXTRA = [
  'Rafael Mendes', 'Beatriz Costa', 'Lucas Ferreira', 'Camila Rocha', 'Fernando Dias',
  'Patrícia Nunes', 'Gustavo Ramos', 'Larissa Melo', 'Diego Santos', 'Vanessa Lopes',
  'Distribuidora Nordeste', 'Papelaria Central', 'Atacado Silva & Filhos', 'Grafica Rápida',
  'Posto Ipiranga', 'Internet Fibra Net', 'Condomínio Comercial', 'Contabilidade Souza',
];
const TIPOS = Object.values(TipoPagamento);
const STATUSES = Object.values(StatusPagamento);
const FORMAS = Object.values(FormaPagamento);
const ORIGENS = Object.values(OrigemPagamento);

function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function buildSeededHistory(count) {
  const random = seededRandom(42);
  const rows = [];

  for (let i = 0; i < count; i += 1) {
    const tipo = TIPOS[Math.floor(random() * TIPOS.length)];
    const status = STATUSES[Math.floor(random() * STATUSES.length)];
    const dayOffset = Math.floor(random() * 40) - 20;
    const date = new Date('2026-08-18T12:00:00');
    date.setDate(date.getDate() - dayOffset);
    const vencimento = new Date(date);
    vencimento.setDate(vencimento.getDate() + Math.floor(random() * 10) - 3);

    rows.push({
      id: `pg-seed-${i}`,
      codigo: String(700 + i).padStart(6, '0'),
      tipo,
      status,
      pessoa: PESSOAS_EXTRA[Math.floor(random() * PESSOAS_EXTRA.length)],
      origem: ORIGENS[Math.floor(random() * ORIGENS.length)],
      origemReferencia: `#${1000 + Math.floor(random() * 200)}`,
      forma: FORMAS[Math.floor(random() * FORMAS.length)],
      parcelas: 1 + Math.floor(random() * 3),
      valor: Math.round((50 + random() * 3200) * 100) / 100,
      dataCriacao: date.toISOString(),
      dataVencimento: vencimento.toISOString().slice(0, 10),
      dataPagamento: status === StatusPagamento.RECEBIDO || status === StatusPagamento.PAGO ? date.toISOString() : null,
      lojaId: 'loja-matriz',
      pendenteConciliacao: random() > 0.92,
    });
  }

  return rows;
}

/** Full mock dataset: curated rows (matching the reference screenshot) + 118 seeded rows to reach 128 registros, as shown in the paginator. */
export const MOCK_PAGAMENTOS = [...BASE_PAGAMENTOS, ...buildSeededHistory(118)];
