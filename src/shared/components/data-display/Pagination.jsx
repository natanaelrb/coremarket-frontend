
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/classNames.js";

/**
 * Controle de paginação numerada com navegação anterior/próxima
 * e elipses para conjuntos maiores de páginas.
 */
export function Pagination({ page, totalPages, onPageChange }) {
  const safeTotalPages = Math.max(0, Number(totalPages) || 0);
  const safePage = Math.min(
    Math.max(1, Number(page) || 1),
    Math.max(1, safeTotalPages),
  );

  if (safeTotalPages <= 1) {
    return null;
  }

  const pages = buildPageList(safePage, safeTotalPages);
  const isFirstPage = safePage === 1;
  const isLastPage = safePage === safeTotalPages;

  const goToPage = (nextPage) => {
    if (
      nextPage < 1 ||
      nextPage > safeTotalPages ||
      nextPage === safePage
    ) {
      return;
    }

    onPageChange(nextPage);
  };

  return (
    <nav
      aria-label="Paginação de produtos"
      className="
        flex flex-wrap
        items-center justify-between
        gap-3
        border-t border-slate-100
        bg-white
        px-4 py-3
        dark:border-white/[0.06]
        dark:bg-[#151c2b]
      "
    >
      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
        Página{" "}
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          {safePage}
        </span>{" "}
        de{" "}
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          {safeTotalPages}
        </span>
      </span>

      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={isFirstPage}
          onClick={() => goToPage(safePage - 1)}
          aria-label="Página anterior"
          className="
            flex h-8 w-8
            items-center justify-center
            rounded-lg
            border border-transparent
            text-slate-500
            outline-none
            transition-all duration-200
            hover:border-slate-200
            hover:bg-slate-50
            hover:text-slate-800
            focus-visible:ring-2
            focus-visible:ring-violet-500/40
            disabled:pointer-events-none
            disabled:opacity-30
            dark:text-slate-400
            dark:hover:border-white/[0.08]
            dark:hover:bg-white/[0.05]
            dark:hover:text-white
          "
        >
          <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
        </button>

        {pages.map((currentPage, index) =>
          currentPage === "..." ? (
            <span
              key={`dots-${index}`}
              aria-hidden="true"
              className="
                flex h-8 min-w-8
                items-center justify-center
                px-1
                text-sm
                font-medium
                text-slate-400
                dark:text-slate-500
              "
            >
              …
            </span>
          ) : (
            <button
              key={currentPage}
              type="button"
              onClick={() => goToPage(currentPage)}
              disabled={currentPage === safePage}
              aria-label={`Ir para a página ${currentPage}`}
              aria-current={
                currentPage === safePage ? "page" : undefined
              }
              className={cn(
                `
                  flex h-8 min-w-8
                  items-center justify-center
                  rounded-lg
                  px-2
                  text-xs font-semibold
                  outline-none
                  transition-all duration-200
                  focus-visible:ring-2
                  focus-visible:ring-violet-500/40
                `,
                currentPage === safePage
                  ? `
                    bg-cm-violet
                    text-white
                    shadow-sm
                  `
                  : `
                    text-slate-600
                    hover:bg-slate-100
                    hover:text-slate-900
                    dark:text-slate-300
                    dark:hover:bg-white/[0.07]
                    dark:hover:text-white
                  `,
              )}
            >
              {currentPage}
            </button>
          ),
        )}

        <button
          type="button"
          disabled={isLastPage}
          onClick={() => goToPage(safePage + 1)}
          aria-label="Próxima página"
          className="
            flex h-8 w-8
            items-center justify-center
            rounded-lg
            border border-transparent
            text-slate-500
            outline-none
            transition-all duration-200
            hover:border-slate-200
            hover:bg-slate-50
            hover:text-slate-800
            focus-visible:ring-2
            focus-visible:ring-violet-500/40
            disabled:pointer-events-none
            disabled:opacity-30
            dark:text-slate-400
            dark:hover:border-white/[0.08]
            dark:hover:bg-white/[0.05]
            dark:hover:text-white
          "
        >
          <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

function buildPageList(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages = [1];

  if (current > 3) {
    pages.push("...");
  }

  for (
    let page = Math.max(2, current - 1);
    page <= Math.min(total - 1, current + 1);
    page++
  ) {
    pages.push(page);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  pages.push(total);

  return [...new Set(pages)];
}