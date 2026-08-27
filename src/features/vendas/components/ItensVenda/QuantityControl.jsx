import { Minus, Plus } from 'lucide-react';

/**
 * Controle de quantidade com botões de incremento/decremento.
 * @param {{ quantidade: number, onIncrementar: () => void, onDecrementar: () => void }} props
 */
export function QuantityControl({ quantidade, onIncrementar, onDecrementar }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-cm-border bg-cm-bg/60 p-0.5">
      <button
        type="button"
        onClick={onDecrementar}
        aria-label="Diminuir quantidade"
        className="flex h-6 w-6 items-center justify-center rounded-md text-cm-text-muted transition-colors hover:bg-cm-surface-hover hover:text-cm-text active:scale-90"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-6 text-center text-sm font-medium tabular-nums text-cm-text">{quantidade}</span>
      <button
        type="button"
        onClick={onIncrementar}
        aria-label="Aumentar quantidade"
        className="flex h-6 w-6 items-center justify-center rounded-md text-cm-text-muted transition-colors hover:bg-cm-surface-hover hover:text-cm-text active:scale-90"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

