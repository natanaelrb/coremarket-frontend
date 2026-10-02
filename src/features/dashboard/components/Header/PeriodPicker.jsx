import { useEffect, useRef } from "react";
import { Calendar, ChevronDown, Check } from "lucide-react";
import { PERIOD_OPTIONS } from "../../constants/dashboardTabs";

/** Dropdown de seleção de período, usado no cabeçalho do Dashboard. */
export default function PeriodPicker({
  periodId,
  label,
  isOpen,
  onToggle,
  onSelect,
}) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onToggle(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      ref={ref}
      className="relative z-50"
    >
      {/* Botão do período */}
      <button
        type="button"
        onClick={() => onToggle(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`
          flex h-10 items-center gap-2
          rounded-xl
          border
          px-3.5
          text-sm
          font-medium
          transition-all
          duration-200
          outline-none
          ${
            isOpen
              ? `
                border-emerald-200
                bg-emerald-50
                text-emerald-700
                shadow-sm
                dark:border-emerald-500/30
                dark:bg-emerald-500/10
                dark:text-emerald-400
              `
              : `
                border-[var(--border-subtle)]
                bg-[var(--bg-surface)]
                text-[var(--text-primary)]
                hover:border-slate-300
                hover:bg-[var(--bg-hover)]
                dark:hover:border-white/15
              `
          }
        `}
      >
        <Calendar
          className={`
            h-4 w-4
            transition-colors duration-200
            ${
              isOpen
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-[var(--text-secondary)]"
            }
          `}
          aria-hidden="true"
        />

        <span>{label}</span>

        <ChevronDown
          className={`
            h-3.5 w-3.5
            transition-transform
            duration-200
            ${
              isOpen
                ? "rotate-180 text-emerald-600 dark:text-emerald-400"
                : "text-[var(--text-secondary)]"
            }
          `}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute right-0 top-full z-[100] mt-2
          w-56
          origin-top-right
          overflow-hidden
          rounded-xl
          border
          border-slate-200/80
          bg-white
          p-1.5
          shadow-[0_12px_30px_rgba(15,23,42,0.12)]
          transition-all
          duration-200
          ease-out
          dark:border-white/[0.08]
          dark:bg-[#151c2b]
          dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)]
          ${
            isOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
          }
        `}
        aria-hidden={!isOpen}
      >
        <div
          role="listbox"
          aria-label="Selecionar período"
        >
          {PERIOD_OPTIONS.map((option) => {
            const isSelected = option.id === periodId;

            return (
              <button
                key={option.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => onSelect(option.id)}
                className={`
                  flex w-full items-center justify-between
                  rounded-lg
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  transition-all
                  duration-150
                  ${
                    isSelected
                      ? `
                        bg-emerald-50
                        font-semibold
                        text-emerald-700
                        dark:bg-emerald-500/10
                        dark:text-emerald-400
                      `
                      : `
                        font-medium
                        text-slate-600
                        hover:bg-slate-50
                        hover:text-slate-900
                        dark:text-slate-300
                        dark:hover:bg-white/[0.05]
                        dark:hover:text-white
                      `
                  }
                `}
              >
                <span>{option.label}</span>

                {isSelected && (
                  <Check
                    size={15}
                    strokeWidth={2.5}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}