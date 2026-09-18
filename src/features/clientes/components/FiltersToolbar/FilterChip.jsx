import { cn } from "../../../../shared/utils/classNames.js";

/** Single quick-filter pill (Todos, Ativos, Em atraso, ...). */
export function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
          rounded-full
          px-3.5 py-1.5
          text-xs font-medium
          whitespace-nowrap
          border
          transition-all duration-200
        `,
        active
          ? `
              bg-[#1d4936]
              text-[#e8fff2]
              border-[#1d4936]
              shadow-sm
            `
          : `
              bg-white
              text-slate-600
              border-slate-200
              hover:border-[#42c878]/40
              hover:bg-[#f0fdf4]
              hover:text-[#248f52]
              dark:bg-white/5
              dark:text-slate-300
              dark:border-white/10
              dark:hover:bg-white/10
            `
      )}
    >
      {label}
    </button>
  );
}