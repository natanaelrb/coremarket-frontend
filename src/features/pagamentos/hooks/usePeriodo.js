import { useCallback, useMemo, useState } from 'react';
import { formatPeriodoLabel } from '../utils/formatDate.js';

const PRESET_LABELS = {
  today: 'Hoje',
  'this-week': 'Esta semana',
  'this-month': 'Este mês',
  'last-month': 'Mês passado',
  custom: 'Personalizado',
};

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  return d;
}
function toIso(date) {
  return date.toISOString().slice(0, 10);
}

function resolveRange(preset, today) {
  switch (preset) {
    case 'today':
      return { start: toIso(today), end: toIso(today) };
    case 'this-week':
      return { start: toIso(startOfWeek(today)), end: toIso(today) };
    case 'last-month': {
      const firstDayThisMonth = startOfMonth(today);
      const lastMonthEnd = new Date(firstDayThisMonth);
      lastMonthEnd.setDate(lastMonthEnd.getDate() - 1);
      const lastMonthStart = startOfMonth(lastMonthEnd);
      return { start: toIso(lastMonthStart), end: toIso(lastMonthEnd) };
    }
    case 'this-month':
    default:
      return { start: toIso(startOfMonth(today)), end: toIso(today) };
  }
}

/**
 * Manages the "Período" selector state (preset + custom range) shown in
 * the page header, and exposes the resolved `{ start, end }` ISO dates
 * used by every other hook to fetch/filter data.
 */
export function usePeriodo(initialPreset = 'this-month') {
  const today = useMemo(() => new Date('2026-08-18T12:00:00'), []);
  const [preset, setPreset] = useState(initialPreset);
  const [customRange, setCustomRange] = useState(() => resolveRange('this-month', today));

  const range = useMemo(
    () => (preset === 'custom' ? customRange : resolveRange(preset, today)),
    [preset, customRange, today]
  );

  const label = useMemo(
    () => formatPeriodoLabel(PRESET_LABELS[preset] ?? 'Período', range.start, range.end),
    [preset, range]
  );

  const handleChangePreset = useCallback((nextPreset) => {
    setPreset(nextPreset);
  }, []);

  const handleChangeCustomRange = useCallback((start, end) => {
    setCustomRange((prev) => ({ start: start ?? prev.start, end: end ?? prev.end }));
  }, []);

  return {
    preset,
    range,
    label,
    onChangePreset: handleChangePreset,
    onChangeCustomRange: handleChangeCustomRange,
  };
}
