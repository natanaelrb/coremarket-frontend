import { Minus, Plus } from "lucide-react";

/**
 * Controle de quantidade com botões de incremento/decremento.
 */
export function QuantityControl({
  quantidade,
  onIncrementar,
  onDecrementar,
}) {
  return (
    <div
      className="
        inline-flex items-center gap-1 rounded-xl
        border border-cm-border bg-cm-surface p-1
        shadow-sm transition-all duration-200
        hover:border-blue-200 hover:shadow-md
        dark:hover:border-blue-500/30
      "
      aria-label={`Quantidade: ${quantidade}`}
    >
      <button
        type="button"
        onClick={onDecrementar}
        aria-label="Diminuir quantidade"
        title="Diminuir quantidade"
        className="
          flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
          text-cm-text-muted transition-all duration-150
          hover:bg-red-50 hover:text-red-600
          active:scale-95
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-blue-500
          dark:hover:bg-red-500/10 dark:hover:text-red-400
        "
      >
        <Minus className="h-3.5 w-3.5" />
      </button>

      <span
        aria-live="polite"
        className="
          min-w-8 px-1 text-center text-sm font-bold
          tabular-nums text-cm-text
        "
      >
        {quantidade}
      </span>

      <button
        type="button"
        onClick={onIncrementar}
        aria-label="Aumentar quantidade"
        title="Aumentar quantidade"
        className="
          flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
          bg-blue-600 text-white shadow-sm shadow-blue-600/20
          transition-all duration-150
          hover:bg-blue-700 hover:shadow-md
          active:scale-95
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-blue-500 focus-visible:ring-offset-1
        "
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
