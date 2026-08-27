import { useRef, useState } from "react";
import { Calendar } from "lucide-react";
import useClickOutside from "../../hooks/useClickOutside.js";
import { cn } from "../../utils/cn.js";
import { Button } from "./Button.jsx";

const PRESETS = [
  { key: 'today', label: 'Hoje' },
  { key: 'this-week', label: 'Esta semana' },
  { key: 'this-month', label: 'Este mês' },
  { key: 'last-month', label: 'Mês passado' },
  { key: 'custom', label: 'Personalizado' },
];

/**
 * Compact "Período" trigger + dropdown with quick presets and a custom
 * date range. Renders the label the parent computed (e.g. "Este mês
 * (01/08/2026 - 18/08/2026)").
 * @param {{ label: string, value: string, onChange: (presetKey: string) => void, startDate?: string, endDate?: string, onCustomChange?: (start: string, end: string) => void }} props
 */
export function DateRangePicker({ label, value, onChange, startDate, endDate, onCustomChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="relative" ref={ref}>
      <span className="mr-2 hidden text-sm text-slate-500 sm:inline dark:text-slate-400">Período:</span>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition-colors',
          'hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
        )}
      >
        <Calendar className="h-4 w-4 text-slate-400" />
        {label}
      </button>

      {open ? (
        <div className="absolute right-0 z-20 mt-2 w-72 animate-scale-in rounded-xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="space-y-1">
            {PRESETS.map((preset) => (
              <button
                key={preset.key}
                onClick={() => {
                  onChange(preset.key);
                  if (preset.key !== 'custom') setOpen(false);
                }}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
                  value === preset.key
                    ? 'bg-brand-violet/10 font-semibold text-brand-violet'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                )}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {value === 'custom' ? (
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
              <label className="text-xs text-slate-500">
                De
                <input
                  type="date"
                  defaultValue={startDate}
                  onChange={(e) => onCustomChange?.(e.target.value, endDate)}
                  className="mt-1 h-9 w-full rounded-md border border-slate-300 px-2 text-xs dark:border-slate-700 dark:bg-slate-800"
                />
              </label>
              <label className="text-xs text-slate-500">
                Até
                <input
                  type="date"
                  defaultValue={endDate}
                  onChange={(e) => onCustomChange?.(startDate, e.target.value)}
                  className="mt-1 h-9 w-full rounded-md border border-slate-300 px-2 text-xs dark:border-slate-700 dark:bg-slate-800"
                />
              </label>
              <Button className="col-span-2 mt-1" size="sm" onClick={() => setOpen(false)}>
                Aplicar
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
