import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PerPageSelect from "./PerPageSelect";

export default function TablePagination({
  shownCount,
  totalCount,
  page,
  totalPages,
  onPrev,
  onNext,
  perPage,
  onPerPageChange,
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100 dark:border-white/5 flex-wrap gap-3">
      <p className="text-[13px] text-slate-400">
        Mostrando {shownCount} de {totalCount} resultados
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrev}
            disabled={page === 1}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-300 disabled:opacity-40 hover:border-violet-300 dark:hover:border-violet-500/40 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>

          <span className="w-8 h-8 rounded-lg bg-violet-600 text-[var(--sidebar-text)] flex items-center justify-center text-[13px] font-medium">
            {page}
          </span>

          <button
            type="button"
            onClick={onNext}
            disabled={page === totalPages}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-300 disabled:opacity-40 hover:border-violet-300 dark:hover:border-violet-500/40 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        <PerPageSelect perPage={perPage} onChange={onPerPageChange} />
      </div>
    </div>
  );
}
