import { formatPercent } from '../../../shared/utils/formatNumber';

const pct = (part, total) => (total > 0 ? (part / total) * 100 : 0);

/** Transforma o resultado de computeKpis nos 8 cartÃµes exibidos. */
export function buildKpiCards(k) {
  return [
    { id: 'total',   value: k.total,   format: 'currency', arrow: true, subtext: k.total > 0 ? '100% do total pendente' : 'Sem pendÃªncias' },
    { id: 'aVencer', value: k.aVencer, format: 'currency', arrow: true, subtext: `${formatPercent(pct(k.aVencer, k.total))} do total` },
    { id: 'vencido', value: k.vencido, format: 'currency', arrow: true, subtext: `${formatPercent(pct(k.vencido, k.total))} do total` },
    { id: 'recebido', value: k.recebido, format: 'currency', subtext: `${formatPercent(k.metaPct)} da meta` },
    { id: 'emAtraso', value: k.emAtraso, format: 'count', unit: 'contas', subtext: 'Total de contas vencidas' },
    { id: 'inadimplentes', value: k.inadimplentes, format: 'count', unit: 'clientes', subtext: 'Com contas vencidas' },
    { id: 'taxa', value: k.taxaRecebimento, format: 'percent', subtext: '% do esperado' },
    { id: 'ticket', value: k.ticketMedio, format: 'currency', subtext: 'Por recebimento' },
  ];
}

