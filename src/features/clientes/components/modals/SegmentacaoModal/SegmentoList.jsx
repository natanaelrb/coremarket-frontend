import { cn } from "../../../../../shared/utils/classNames.js";
import { SEGMENTOS_CONFIG } from "../../../constants/segmentosConfig.js";

/** Left-side list of client segments with their counts. */
export function SegmentoList({ segmentoAtivo, onSelect, contagens }) {
  return (
    <ul className="space-y-1">
      {SEGMENTOS_CONFIG.map((seg) => (
        <li key={seg.id}>
          <button
            onClick={() => onSelect(seg.id)}
            className={cn(
              `
                flex w-full
                items-center justify-between
                rounded-lg
                px-3 py-2
                text-sm
                transition-colors
              `,
              seg.id === segmentoAtivo
                ? `
                    bg-[#ede9fe]
                    font-medium
                    text-[#7c3aed]
                    dark:bg-purple-950/30
                    dark:text-purple-400
                  `
                : `
                    text-slate-600
                    hover:bg-slate-100
                    dark:text-slate-300
                    dark:hover:bg-white/5
                  `,
            )}
          >
            {seg.label}

            <span className="text-xs text-slate-500 dark:text-slate-400">
              {contagens[seg.id]?.toLocaleString("pt-BR")}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}