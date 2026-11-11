import { STATUS_META, STATUS_ORDER } from './statusConta';

export const STATUS_FILTER_OPTIONS = [
  { value: 'TODOS', label: 'Todas' },
  ...STATUS_ORDER.map((s) => ({ value: s, label: STATUS_META[s].longLabel })),
];

export const PERIODO_CAMPO_OPTIONS = [
  { value: 'VENCIMENTO', label: 'Vencimento' },
  { value: 'EMISSAO', label: 'Emissão' },
  { value: 'PAGAMENTO', label: 'Recebimento' },
];

export const VALOR_FAIXAS = [
  { value: 'TODOS',      label: 'R$ 0,00 - R$ 10.000,00',   min: 0,    max: Infinity },
  { value: 'ATE_100',    label: 'Até R$ 100,00',            min: 0,    max: 100 },
  { value: '100_500',    label: 'R$ 100,00 - R$ 500,00',    min: 100,  max: 500 },
  { value: '500_1000',   label: 'R$ 500,00 - R$ 1.000,00',  min: 500,  max: 1000 },
  { value: '1000_5000',  label: 'R$ 1.000,00 - R$ 5.000,00',min: 1000, max: 5000 },
  { value: 'ACIMA_5000', label: 'Acima de R$ 5.000,00',     min: 5000, max: Infinity },
];

export const DEFAULT_ADVANCED_FILTERS = Object.freeze({
  cpf: '', valorMin: '', valorMax: '',
  emissaoDe: '', emissaoAte: '', vencimentoDe: '', vencimentoAte: '',
  atrasoMin: '', apenasComSaldo: false, apenasInadimplentes: false,
});

export const DEFAULT_FILTERS = Object.freeze({
  busca: '',
  status: 'TODOS',
  periodoCampo: 'VENCIMENTO',
  vencimento: 'TODOS',
  cliente: 'TODOS',
  forma: 'TODAS',
  valorFaixa: 'TODOS',
  responsavel: 'TODOS',
  advanced: DEFAULT_ADVANCED_FILTERS,
});
