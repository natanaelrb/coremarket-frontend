import { Calendar, ChevronDown } from 'lucide-react';
import { PERIODO_PRESETS } from '../../constants/filterOptions';

export default function PeriodFilter({
  inicio,
  fim,
  onChangeInicio,
  onChangeFim,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-600">
        Período
      </span>

      <div className="flex items-center gap-2">
        {/* Preset */}
        <div className="relative">
          <select
            defaultValue="PERSONALIZADO"
            className="
              h-10
              min-w-[150px]
              appearance-none
              rounded-lg
              border border-slate-200
              bg-white
              pl-3
              pr-9
              text-sm
              font-medium
              text-slate-700
              outline-none
              transition
              hover:border-slate-300
              focus:border-emerald-500
              focus:ring-2
              focus:ring-emerald-500/10
            "
          >
            {PERIODO_PRESETS.map((preset) => (
              <option key={preset.value} value={preset.value}>
                {preset.label}
              </option>
            ))}
          </select>

          <ChevronDown
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-slate-400
            "
          />
        </div>

        {/* Data inicial */}
        <div className="relative">
          <Calendar
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="date"
            value={inicio}
            onChange={(event) => onChangeInicio(event.target.value)}
            className="
              h-10
              w-[145px]
              rounded-lg
              border border-slate-200
              bg-white
              pl-9
              pr-3
              text-sm
              text-slate-700
              outline-none
              transition
              hover:border-slate-300
              focus:border-emerald-500
              focus:ring-2
              focus:ring-emerald-500/10
            "
          />
        </div>

        <span className="text-xs font-medium text-slate-400">
          até
        </span>

        {/* Data final */}
        <div className="relative">
          <Calendar
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="date"
            value={fim}
            onChange={(event) => onChangeFim(event.target.value)}
            className="
              h-10
              w-[145px]
              rounded-lg
              border border-slate-200
              bg-white
              pl-9
              pr-3
              text-sm
              text-slate-700
              outline-none
              transition
              hover:border-slate-300
              focus:border-emerald-500
              focus:ring-2
              focus:ring-emerald-500/10
            "
          />
        </div>
      </div>
    </div>
  );
}