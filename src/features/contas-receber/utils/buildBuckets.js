import { addDays, diffInDays, endOfMonthISO } from '../../../shared/utils/dateMath';
import { formatDayMonth, formatMonthYear } from '../../../shared/utils/formatDate';

const STEPS = { DIARIO: 1, SEMANAL: 7, QUINZENAL: 15 };

/** Divide o intervalo em "baldes" (dia, semana, quinzena ou mÃªs) para o grÃ¡fico. */
export function buildBuckets({ start, end }, granularidade) {
  const out = [];
  if (granularidade === 'MENSAL') {
    let cur = start;
    while (cur <= end) {
      const fim = endOfMonthISO(cur);
      out.push({ start: cur, end: fim < end ? fim : end, label: formatMonthYear(cur) });
      cur = addDays(fim, 1);
    }
    return out;
  }
  const total = diffInDays(end, start) + 1;
  const step = Math.max(STEPS[granularidade] ?? 1, Math.ceil(total / 60));
  let cur = start;
  while (cur <= end) {
    const fim = addDays(cur, step - 1);
    const bEnd = fim < end ? fim : end;
    out.push({ start: cur, end: bEnd, label: formatDayMonth(bEnd) });
    cur = addDays(cur, step);
  }
  return out;
}

