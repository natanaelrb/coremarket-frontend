import { ChevronDown } from "lucide-react";

export function SelectFilter({ label, value, options, onChange }) {
  const selectId = `filtro-${label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")}`;

  return (
    <div className="w-full min-w-0">
      <label
        htmlFor={selectId}
        className="mb-2 block text-xs font-semibold text-slate-600 dark:text-slate-300"
      >
        {label}
      </label>

      <div className="group relative w-full">
        <select
          id={selectId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 w-full min-w-0 appearance-none rounded-xl border border-slate-200 bg-slate-50/70 pl-3.5 pr-10 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all duration-200 hover:border-green-300 hover:bg-white focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-green-500/30 dark:hover:bg-white/[0.06] dark:focus:border-green-500 dark:focus:bg-[#151b28] dark:focus:ring-green-500/10"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-white text-slate-800 dark:bg-[#151b28] dark:text-slate-200"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-transform duration-200 group-focus-within:rotate-180 group-focus-within:text-green-600 dark:group-focus-within:text-green-400"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
