import { ChevronDown } from 'lucide-react';

/** Campo no estilo da tela: rótulo pequeno em cima e select embaixo, dentro da mesma borda. */
export function FilterField({ label, value, onChange, options, className }) {
  return (
    <label className={`relative block rounded-lg border border-line bg-surface px-2.5 pb-1 pt-1.5 transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/15 ${className ?? ''}`}>
      <span className="block text-[9.5px] font-semibold text-ink-3">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-transparent pr-5 text-[11.5px] font-medium text-ink outline-none">
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute bottom-2 right-2 size-3 text-ink-3" />
    </label>
  );
}
