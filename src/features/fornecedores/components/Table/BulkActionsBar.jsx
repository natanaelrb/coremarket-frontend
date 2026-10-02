import { X, Ban, Trash2, Download } from "lucide-react";

export default function BulkActionsBar({ count, onClear }) {
  return (
    <div
      className="
        animate-fade-in-up
        flex flex-wrap items-center justify-between gap-3
        border-b border-emerald-200/70
        bg-emerald-50/70
        px-4 py-3
        dark:border-emerald-500/20
        dark:bg-emerald-500/[0.06]
      "
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
        <button
          type="button"
          onClick={onClear}
          aria-label="Limpar seleção"
          className="
            rounded-full p-1
            transition-colors
            hover:bg-emerald-100
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-500/40
            dark:hover:bg-emerald-500/15
          "
        >
          <X size={14} aria-hidden="true" />
        </button>

        <span>
          {count} selecionado{count > 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          className="
            flex items-center gap-1.5
            rounded-lg px-3 py-1.5
            text-xs font-semibold
            text-slate-600
            transition-colors
            hover:bg-white hover:text-emerald-700
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-500/40
            dark:text-slate-300
            dark:hover:bg-[#252a4a]
            dark:hover:text-emerald-400
          "
        >
          <Download size={13} aria-hidden="true" />
          Exportar
        </button>

        <button
          type="button"
          className="
            flex items-center gap-1.5
            rounded-lg px-3 py-1.5
            text-xs font-semibold
            text-slate-600
            transition-colors
            hover:bg-white hover:text-emerald-700
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-500/40
            dark:text-slate-300
            dark:hover:bg-[#252a4a]
            dark:hover:text-emerald-400
          "
        >
          <Ban size={13} aria-hidden="true" />
          Bloquear
        </button>

        <button
          type="button"
          className="
            flex items-center gap-1.5
            rounded-lg px-3 py-1.5
            text-xs font-semibold
            text-rose-600
            transition-colors
            hover:bg-rose-100
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-rose-500/40
            dark:text-rose-400
            dark:hover:bg-rose-500/15
          "
        >
          <Trash2 size={13} aria-hidden="true" />
          Excluir
        </button>
      </div>
    </div>
  );
}