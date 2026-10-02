
// Estado vazio exibido quando os filtros não retornam nenhum produto.
import { PackageSearch, RotateCcw } from "lucide-react";

export function EmptyState({ onClearFilters }) {
  return (
    <div
      className="
        flex min-h-[280px]
        flex-col items-center justify-center
        px-6 py-14
        text-center
      "
    >
      {/* Ícone */}
      <div
        className="
          relative
          flex h-16 w-16
          items-center justify-center
          rounded-2xl
          border border-slate-200/80
          bg-slate-50
          shadow-[0_4px_15px_rgba(15,23,42,0.03)]
          dark:border-white/[0.08]
          dark:bg-white/[0.04]
          dark:shadow-none
        "
      >
        <div
          className="
            absolute inset-0
            rounded-2xl
            bg-emerald-500/[0.04]
            dark:bg-green-500/[0.06]
          "
          aria-hidden="true"
        />

        <PackageSearch
          size={28}
          strokeWidth={1.7}
          className="relative text-slate-400 dark:text-slate-500"
          aria-hidden="true"
        />
      </div>

      {/* Texto */}
      <div className="mt-5 max-w-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
          Nenhum produto encontrado
        </h3>

        <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Não encontramos produtos com os critérios atuais.
          Experimente ajustar os filtros ou alterar sua pesquisa.
        </p>
      </div>

      {/* Ação */}
      <button
        type="button"
        onClick={onClearFilters}
        className="
          mt-5
          inline-flex items-center gap-2
          rounded-lg
          border border-green-200
          bg-green-50
          px-3.5 py-2
          text-sm font-semibold
          text-green-600
          outline-none
          transition-all duration-200
          hover:border-green-300
          hover:bg-green-100
          focus-visible:ring-4
          focus-visible:ring-green-500/20
          dark:border-green-400/20
          dark:bg-green-500/10
          dark:text-green-400
          dark:hover:bg-green-500/15
        "
      >
        <RotateCcw size={14} strokeWidth={2} aria-hidden="true" />
        Limpar filtros
      </button>
    </div>
  );
}

