import { useMemo } from 'react';
import { buildClienteOptions, buildResponsavelOptions, enrichConta, filterByPeriod, filterContas } from '../utils';

/** Contas enriquecidas → período → filtros. Nenhuma regra de tela aqui, só composição de utils. */
export function useContasDerivadas({ contasRaw, hoje, range, filters }) {
  const contas = useMemo(() => contasRaw.map((c) => enrichConta(c, hoje)), [contasRaw, hoje]);
  const periodContas = useMemo(() => filterByPeriod(contas, range, filters.periodoCampo), [contas, range, filters.periodoCampo]);
  const baseFiltered = useMemo(() => filterContas(periodContas, filters, { ignoreStatus: true }), [periodContas, filters]);
  const filtered = useMemo(
    () => (filters.status === 'TODOS' ? baseFiltered : baseFiltered.filter((c) => c.status === filters.status)),
    [baseFiltered, filters.status],
  );
  const clienteOptions = useMemo(() => buildClienteOptions(contas), [contas]);
  const responsavelOptions = useMemo(() => buildResponsavelOptions(contas), [contas]);
  return { contas, periodContas, baseFiltered, filtered, clienteOptions, responsavelOptions };
}
