import { useCallback, useMemo, useState } from 'react';
import { computeEvolucao } from '../utils';

export function useEvolucaoChart(periodContas, range) {
  const [granularidade, setGranularidade] = useState('DIARIO');
  const [hidden, setHidden] = useState(() => new Set());
  const data = useMemo(() => computeEvolucao(periodContas, range, granularidade), [periodContas, range, granularidade]);
  const toggleSeries = useCallback((key) => setHidden((p) => { const n = new Set(p); n.has(key) ? n.delete(key) : n.add(key); return n; }), []);
  return { granularidade, setGranularidade, data, hidden, toggleSeries };
}
