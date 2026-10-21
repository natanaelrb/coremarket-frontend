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
        inline-flex items-center gap-1.5 rounded-xl
        border border-cm-border bg-cm-bg/70 p-1
        shadow-sm transition-all duration-200
        hover:border-cm-accent/40 hover:shadow-md
      "
      aria-label={`Quantidade: ${quantidade}`}
    >
      <button
        type="button"
        onClick={onDecrementar}
        aria-label="Diminuir quantidade"
        title="Diminuir quantidade"
        className="
          flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
          text-cm-text-muted transition-all duration-150
          hover:bg-cm-danger-soft hover:text-cm-danger
          active:scale-95
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-cm-accent
        "
      >
        <Minus className="h-4 w-4" />
      </button>

      <span
        aria-live="polite"
        className="
          min-w-9 px-1 text-center text-sm font-bold
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
          flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
          bg-cm-accent-soft text-cm-accent
          transition-all duration-150
          hover:bg-cm-accent hover:text-white
          active:scale-95
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-cm-accent focus-visible:ring-offset-1
        "
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
