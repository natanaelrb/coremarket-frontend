import { ChevronDown } from 'lucide-react';
import { GRANULARIDADE_OPTIONS } from '../../constants';

export function PeriodSelect({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 text-[11px] text-ink-2">
      Por período:
      <span className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)} aria-label="Agrupar por período"
          className="h-7 appearance-none rounded-md border border-line bg-surface pl-2.5 pr-7 text-[11px] font-medium text-ink outline-none transition focus:border-brand">
          {GRANULARIDADE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-3 -translate-y-1/2 text-ink-3" />
      </span>
    </label>
  );
}
