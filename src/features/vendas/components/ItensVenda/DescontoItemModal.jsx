import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../../../shared/utils/formatters.js';
import { calcularSubtotalItem } from '../../utils/calculators.js';

/**
 * Modal para editar o desconto aplicado a um item do carrinho.
 */
export function DescontoItemModal({ item, onSalvar, onFechar }) {
  const [valor, setValor] = useState(String(item.descontoItem ?? 0));
  const subtotalBruto = calcularSubtotalItem(item);
  const numero = Number(valor.replace(',', '.')) || 0;
  const invalido = numero < 0 || numero > subtotalBruto;

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-slate-900/40 p-4 backdrop-blur-[2px]"
      onClick={onFechar}
    >
      <div
        className="w-full max-w-sm animate-scale-in rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-800">
            Desconto no item
          </h3>

          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mb-1 truncate text-sm font-medium text-slate-700">
          {item.nome}
        </p>

        <p className="mb-4 text-xs text-slate-500">
          Subtotal bruto: {formatCurrency(subtotalBruto)}
        </p>

        <label className="mb-1.5 block text-xs font-medium text-slate-600">
          Valor do desconto (R$)
        </label>

        <input
          autoFocus
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          inputMode="decimal"
          aria-invalid={invalido}
          className={`h-10 w-full rounded-lg border bg-white px-3 text-sm text-slate-800 outline-none transition-shadow placeholder:text-slate-400 focus:ring-2 ${
            invalido
              ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
              : 'border-slate-200 focus:border-[#22c55e] focus:ring-green-100'
          }`}
        />

        {invalido && (
          <p className="mt-1.5 text-xs text-red-600">
            O desconto deve estar entre 0 e {formatCurrency(subtotalBruto)}.
          </p>
        )}

        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={onFechar}>
            Cancelar
          </Button>

          <Button
            variant="primary"
            disabled={invalido}
            onClick={() => onSalvar(numero)}
            className="!bg-[#22c55e] !text-white hover:!bg-[#16a34a]"
          >
            Aplicar desconto
          </Button>
        </div>
      </div>
    </div>
  );
}
