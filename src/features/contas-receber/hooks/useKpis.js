import { useMemo } from 'react';
import { META_RECEBIMENTO } from '../constants';
import { buildKpiCards, computeKpis } from '../utils';

export function useKpis(periodContas, hoje) {
  const kpis = useMemo(() => computeKpis(periodContas, { hoje, meta: META_RECEBIMENTO }), [periodContas, hoje]);
  const cards = useMemo(() => buildKpiCards(kpis), [kpis]);
  return { kpis, cards };
}
