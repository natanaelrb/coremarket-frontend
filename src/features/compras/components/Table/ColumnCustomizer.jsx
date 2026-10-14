import { useRef } from "react";
import { Check, Columns3 } from "lucide-react";
import { useOnClickOutside } from "../../../../shared/hooks/useOnClickOutside";

export function ColumnCustomizer({ columns, toggleColumn, onClose }) {
  const ref = useRef(null);

  useOnClickOutside(ref, onClose);

  const visibleCount = columns.filter((col) => col.visible).length;

  return (
    <div
      ref={ref}
      className="
        absolute right-0 top-full z-30 mt-2
        w-64 overflow-hidden rounded-2xl
        border border-slate-200/80 bg-white
        shadow-xl shadow-slate-900/10
        animate-fade-in-scale origin-top-right
        dark:border-white/10 dark:bg-[#151b28]
        dark:shadow-black/25
      "
    >
      {/* Cabeçalho */}
      <div className="border-b border-slate-100 px-4 py-3.5 dark:border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <Columns3 className="h-4 w-4" aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Personalizar colunas
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
              Escolha o que deseja visualizar
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Colunas visíveis
          </span>

          <span className="rounded-full bg-green-50 px-2 py-1 text-[11px] font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
            {visibleCount} de {columns.length}
          </span>
        </div>
      </div>

      {/* Lista de colunas */}
      <div className="max-h-64 space-y-1 overflow-y-auto p-2.5">
        {columns.map((col) => (
          <label
            key={col.id}
            className={`
              flex min-h-10 items-center gap-3 rounded-xl px-3 py-2
              text-xs font-medium transition-colors duration-150
              ${
                col.locked
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer hover:bg-green-50/80 dark:hover:bg-green-500/[0.08]"
              }
              text-slate-700 dark:text-slate-300
            `}
          >
            <span className="relative flex h-[17px] w-[17px] shrink-0 items-center justify-center">
              <input
                type="checkbox"
                checked={col.visible}
                disabled={col.locked}
                onChange={() => toggleColumn(col.id)}
                aria-label={`Exibir coluna ${col.label}`}
                className="
                  peer h-[17px] w-[17px] cursor-pointer appearance-none
                  rounded-[5px] border border-slate-300 bg-white
                  transition-all duration-150
                  checked:border-green-600 checked:bg-green-600
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-green-500/40 focus-visible:ring-offset-1
                  disabled:cursor-not-allowed
                  dark:border-slate-600 dark:bg-[#1b2432]
                  dark:checked:border-green-500 dark:checked:bg-green-500
                  dark:focus-visible:ring-offset-[#151b28]
                "
              />

              {col.visible && (
                <Check
                  className="pointer-events-none absolute h-3 w-3 text-white dark:text-[#102016]"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              )}
            </span>

            <span className="min-w-0 flex-1 truncate">
              {col.label}
            </span>

            {col.locked && (
              <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                Fixa
              </span>
            )}
          </label>
        ))}
      </div>

      {/* Rodapé */}
      <div className="border-t border-slate-100 bg-slate-50/70 px-4 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.02]">
        <p className="text-[10px] leading-relaxed text-slate-500 dark:text-slate-400">
          As alterações atualizam as colunas exibidas na tabela.
        </p>
      </div>
    </div>
  );
}
