import { useState } from "react";
import { X, Percent, Tag } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { formatCurrency } from "../../../../shared/utils/formatters.js";
import { calcularSubtotalItem } from "../../utils/calculators.js";

/**
 * Modal para editar o desconto aplicado a um item do carrinho.
 */
export function DescontoItemModal({ item, onSalvar, onFechar }) {
  const [valor, setValor] = useState(String(item.descontoItem ?? 0));

  const subtotalBruto = calcularSubtotalItem(item);
  const numero = Number(valor.replace(",", ".")) || 0;
  const invalido = numero < 0 || numero > subtotalBruto;

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-slate-950/50 p-4 backdrop-blur-[3px]"
      onClick={onFechar}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="desconto-modal-title"
        className="w-full max-w-sm animate-scale-in overflow-hidden rounded-2xl border border-cm-border bg-cm-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-cm-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              <Percent className="h-5 w-5" />
            </div>

            <div>
              <h3
                id="desconto-modal-title"
                className="text-sm font-bold text-cm-text"
              >
                Desconto no item
              </h3>
              <p className="mt-0.5 text-xs text-cm-text-muted">
                Ajuste o valor aplicado
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-cm-text-faint transition-colors hover:bg-cm-surface-hover hover:text-cm-text"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-cm-text-faint">
              Produto selecionado
            </p>
            <p className="mt-1 truncate text-sm font-semibold text-cm-text">
              {item.nome}
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-cm-border bg-cm-surface-hover/60 px-3.5 py-3">
            <div className="flex items-center gap-2 text-cm-text-muted">
              <Tag className="h-4 w-4" />
              <span className="text-xs font-medium">Subtotal bruto</span>
            </div>

            <span className="text-sm font-bold tabular-nums text-cm-text">
              {formatCurrency(subtotalBruto)}
            </span>
          </div>

          <div>
            <label
              htmlFor="desconto-item-valor"
              className="mb-2 block text-xs font-semibold text-cm-text"
            >
              Valor do desconto (R$)
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-cm-text-faint">
                R$
              </span>

              <input
                id="desconto-item-valor"
                autoFocus
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                inputMode="decimal"
                aria-invalid={invalido}
                className={`h-11 w-full rounded-xl border bg-cm-surface pl-10 pr-3 text-sm font-semibold text-cm-text outline-none transition-all placeholder:text-cm-text-faint focus:ring-2 ${
                  invalido
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/10"
                    : "border-cm-border focus:border-blue-500 focus:ring-blue-100 dark:focus:ring-blue-500/10"
                }`}
              />
            </div>

            {invalido && (
              <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                O desconto deve estar entre 0 e {formatCurrency(subtotalBruto)}.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-cm-border bg-cm-surface-hover/40 px-5 py-4">
          <Button variant="ghost" onClick={onFechar}>
            Cancelar
          </Button>

          <Button
            variant="primary"
            disabled={invalido}
            onClick={() => onSalvar(numero)}
          >
            Aplicar desconto
          </Button>
        </div>
      </div>
    </div>
  );
}
