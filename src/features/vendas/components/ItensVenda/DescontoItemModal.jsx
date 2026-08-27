import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { formatCurrency } from '../../../../shared/utils/formatters.js';
import { calcularSubtotalItem } from '../../utils/calculators.js';

/**
 * Modal leve para editar o desconto aplicado a um item específico do carrinho.
 * @param {{
 *  item: import('../../types/venda.types.js').ItemVenda,
 *  onSalvar: (valor: number) => void,
 *  onFechar: () => void,
 * }} props
 */
export function DescontoItemModal({ item, onSalvar, onFechar }) {
  const [valor, setValor] = useState(String(item.descontoItem ?? 0));
  const subtotalBruto = calcularSubtotalItem(item);
  const numero = Number(valor.replace(',', '.')) || 0;
  const invalido = numero < 0 || numero > subtotalBruto;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in" onClick={onFechar}>
      <div
        className="w-full max-w-sm animate-scale-in rounded-xl border border-cm-border bg-cm-surface p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-cm-text">Desconto no item</h3>
          <button type="button" onClick={onFechar} className="text-cm-text-faint hover:text-cm-text">
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mb-1 truncate text-sm text-cm-text-muted">{item.nome}</p>
        <p className="mb-4 text-xs text-cm-text-faint">Subtotal bruto: {formatCurrency(subtotalBruto)}</p>

        <label className="mb-1 block text-xs text-cm-text-faint">Valor do desconto (R$)</label>
        <input
          autoFocus
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          inputMode="decimal"
          className={`
            h-11 w-full rounded-lg border bg-cm-bg/60 px-3.5 text-sm text-cm-text outline-none
            ${invalido ? 'border-cm-danger' : 'border-cm-border focus:border-cm-accent'}
          `}
        />
        {invalido && (
          <p className="mt-1.5 text-xs text-cm-danger">O desconto deve estar entre 0 e {formatCurrency(subtotalBruto)}.</p>
        )}

        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={onFechar}>
            Cancelar
          </Button>
          <Button variant="primary" disabled={invalido} onClick={() => onSalvar(numero)}>
            Aplicar desconto
          </Button>
        </div>
      </div>
    </div>
  );
}

