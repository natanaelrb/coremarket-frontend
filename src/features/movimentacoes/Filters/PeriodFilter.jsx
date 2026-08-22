import { Calendar } from 'lucide-react';
import { PERIODO_PRESETS } from "../constants/filterOptions";

export default function PeriodFilter({ inicio, fim, onChangeInicio, onChangeFim }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-400">Período</span>
      <div className="flex items-center gap-2">
        <select
          defaultValue="PERSONALIZADO"
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        >
          {PERIODO_PRESETS.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
        <input
          type="date"
          value={inicio}
          onChange={(e) => onChangeInicio(e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
        <span className="text-slate-500">→</span>
        <input
          type="date"
          value={fim}
          onChange={(e) => onChangeFim(e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
        <Calendar className="h-4 w-4 text-slate-500" />
      </div>
    </div>
  );
}
