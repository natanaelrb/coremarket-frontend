import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPageItems } from "../../utils";
import { cn } from "../../../../shared/utils/classNames";

const base =
  "grid size-7 place-items-center rounded-md border text-[11px] font-semibold transition disabled:pointer-events-none disabled:opacity-40";

export function Pagination({ page, totalPages, onChange }) {
  return (
    <nav aria-label="Paginação" className="flex items-center gap-1">
      <button
        type="button"
        className={cn(
          base,
          "border-line bg-surface text-ink-2 hover:bg-surface-2",
        )}
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Página anterior"
      >
        <ChevronLeft className="size-3.5" />
      </button>
      {getPageItems(page, totalPages).map((it, i) =>
        it === "…" ? (
          <span key={`e${i}`} className="px-1 text-xs text-ink-3">
            …
          </span>
        ) : (
          <button
            key={it}
            type="button"
            aria-current={it === page ? "page" : undefined}
            onClick={() => onChange(it)}
            className={cn(
              base,
              it === page
                ? "border-brand bg-brand text-white shadow-sm shadow-brand/30"
                : "border-line bg-surface text-ink-2 hover:bg-surface-2",
            )}
          >
            {it}
          </button>
        ),
      )}
      <button
        type="button"
        className={cn(
          base,
          "border-line bg-surface text-ink-2 hover:bg-surface-2",
        )}
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Próxima página"
      >
        <ChevronRight className="size-3.5" />
      </button>
    </nav>
  );
}
