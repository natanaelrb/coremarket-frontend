
import { useRef, useState } from "react";
import { ChevronDown, Check, CalendarRange } from "lucide-react";

import useClickOutside from "../../hooks/useClickOutside.js";
import { cn } from "../../utils/cn.js";
import { Button } from "./Button.jsx";

const PRESETS = [
  { key: "today", label: "Hoje" },
  { key: "this-week", label: "Esta semana" },
  { key: "this-month", label: "Este mês" },
  { key: "last-month", label: "Mês passado" },
  { key: "custom", label: "Personalizado" },
];

export function DateRangePicker({
  label,
  value,
  onChange,
  startDate,
  endDate,
  onCustomChange,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="relative min-w-0 w-full" ref={ref}>
      {/* Seletor integrado ao card externo */}
      <button
        type="button"
        aria-label={`Selecionar período. Atual: ${label}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "group flex min-h-11 w-full min-w-0 items-center gap-3",
          "rounded-xl border border-slate-200 bg-white px-3 py-2",
          "text-left transition-colors hover:border-emerald-300",
          "dark:border-slate-700 dark:bg-slate-950",
          "dark:hover:border-emerald-700",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-emerald-500/40"
        )}
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
            Período selecionado
          </span>

          <span className="mt-0.5 block break-words text-sm font-semibold leading-5">
            {label}
          </span>
        </span>

        <ChevronDown
          size={16}
          className={cn(
            "shrink-0 text-slate-400 transition-transform duration-200",
            "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
            open && "rotate-180 text-emerald-600 dark:text-emerald-400"
          )}
          aria-hidden="true"
        />
      </button>

      {/* Menu de períodos */}
      {open && (
        <div
          role="dialog"
          aria-label="Selecionar período"
          className={cn(
            "absolute right-0 top-full z-50 mt-2",
            "w-[min(320px,calc(100vw-2rem))]",
            "origin-top-right animate-scale-in overflow-hidden rounded-2xl",
            "border border-slate-200/90 bg-white p-2 shadow-xl",
            "shadow-slate-900/[0.08]",
            "dark:border-white/[0.10] dark:bg-cm-surface",
            "dark:shadow-black/30"
          )}
        >
          {/* Cabeçalho do menu */}
          <div className="flex items-center gap-3 px-3 pb-3 pt-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
              <CalendarRange size={18} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Período de análise
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Escolha o intervalo desejado
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-2 dark:border-white/[0.07]">
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Atalhos
            </p>

            <div className="mt-1 space-y-1">
              {PRESETS.map((preset) => {
                const isActive = value === preset.key;

                return (
                  <button
                    key={preset.key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => {
                      onChange(preset.key);

                      if (preset.key !== "custom") {
                        setOpen(false);
                      }
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3",
                      "rounded-xl px-3 py-2.5 text-sm",
                      "transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2",
                      "focus-visible:ring-inset focus-visible:ring-emerald-500/50",
                      isActive
                        ? "bg-emerald-50 font-semibold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                        : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/[0.05]"
                    )}
                  >
                    <span>{preset.label}</span>

                    {isActive && (
                      <Check
                        size={16}
                        className="shrink-0 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Intervalo personalizado */}
          {value === "custom" && (
            <div className="mt-2 border-t border-slate-100 pt-3 dark:border-white/[0.07]">
              <p className="mb-3 px-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Defina as datas inicial e final do período.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <label className="min-w-0 text-xs font-medium text-slate-600 dark:text-slate-300">
                  Data inicial

                  <input
                    type="date"
                    value={startDate ?? ""}
                    onChange={(event) =>
                      onCustomChange?.(event.target.value, endDate)
                    }
                    className={cn(
                      "mt-1.5 h-10 w-full min-w-0 rounded-lg border",
                      "border-slate-200 bg-slate-50 px-2 text-xs",
                      "text-slate-800 outline-none transition-colors",
                      "focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10",
                      "dark:border-white/[0.10] dark:bg-slate-900",
                      "dark:text-slate-100 dark:focus:border-emerald-700"
                    )}
                  />
                </label>

                <label className="min-w-0 text-xs font-medium text-slate-600 dark:text-slate-300">
                  Data final

                  <input
                    type="date"
                    value={endDate ?? ""}
                    min={startDate || undefined}
                    onChange={(event) =>
                      onCustomChange?.(startDate, event.target.value)
                    }
                    className={cn(
                      "mt-1.5 h-10 w-full min-w-0 rounded-lg border",
                      "border-slate-200 bg-slate-50 px-2 text-xs",
                      "text-slate-800 outline-none transition-colors",
                      "focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10",
                      "dark:border-white/[0.10] dark:bg-slate-900",
                      "dark:text-slate-100 dark:focus:border-emerald-700"
                    )}
                  />
                </label>
              </div>

              <Button
                className="mt-3 w-full"
                size="sm"
                onClick={() => setOpen(false)}
                disabled={
                  !startDate || !endDate || startDate > endDate
                }
              >
                Aplicar período
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
