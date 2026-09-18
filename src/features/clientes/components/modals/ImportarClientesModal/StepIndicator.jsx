import { Check } from "lucide-react";
import { cn } from "../../../../../shared/utils/classNames.js";

const LABELS = [
  "Selecionar arquivo",
  "Mapear colunas",
  "Validar dados",
  "Confirmar",
];

/** 4-step progress indicator for the import wizard. */
export function StepIndicator({ stepIndex }) {
  return (
    <div className="mb-6 flex items-center">
      {LABELS.map((label, i) => (
        <div
          key={label}
          className="flex flex-1 items-center last:flex-none"
        >
          <div className="flex items-center gap-2">
            <div
              className={cn(
                `
                  flex h-6 w-6 shrink-0
                  items-center justify-center
                  rounded-full
                  text-[11px]
                  font-semibold
                  transition-colors
                `,
                i < stepIndex &&
                  "bg-[#16a34a] text-white",

                i === stepIndex &&
                  "bg-[#22c55e] text-white shadow-sm",

                i > stepIndex &&
                  `
                    bg-slate-100
                    text-slate-500
                    dark:bg-white/10
                    dark:text-slate-400
                  `,
              )}
            >
              {i < stepIndex ? <Check size={13} /> : i + 1}
            </div>

            <span
              className={cn(
                "hidden whitespace-nowrap text-xs sm:inline",
                i === stepIndex
                  ? "font-medium text-[#0f172a] dark:text-white"
                  : "text-slate-500 dark:text-slate-400",
              )}
            >
              {label}
            </span>
          </div>

          {i < LABELS.length - 1 && (
            <div
              className={cn(
                "mx-3 h-px flex-1",
                i < stepIndex
                  ? "bg-[#22c55e]"
                  : "bg-slate-200 dark:bg-white/10",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}