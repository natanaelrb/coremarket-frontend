import { useMemo } from 'react';
import { computePrevisao, computeResumoFinanceiro, computeTopDevedores } from '../utils';

/** Cards inferiores: maiores devedores, resumo financeiro e previsão de recebimentos. */
export function useInsights({ periodContas, contas, kpis }) {
  const topDevedores = useMemo(() => computeTopDevedores(periodContas), [periodContas]);
  const resumo = useMemo(() => computeResumoFinanceiro(periodContas, kpis), [periodContas, kpis]);
  const previsao = useMemo(() => computePrevisao(contas), [contas]);
  return { topDevedores, resumo, previsao };
}
