import { User, X } from 'lucide-react';
import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { formatCurrency, formatPhone, maskCpf } from '../../../../shared/utils/formatters.js';

/**
 * Cartão com os dados do cliente vinculado à venda e sua dívida em aberto.
 * @param {{ cliente: import('../../types/venda.types.js').Cliente, onRemover: () => void }} props
 */
export function ClienteCard({ cliente, onRemover }) {
  return (
    <div className="flex animate-scale-in items-start gap-3 rounded-lg border border-cm-border bg-cm-bg/40 p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cm-accent-soft text-cm-accent">
        <User className="h-4.5 w-4.5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-cm-text">{cliente.nome}</p>
        <p className="truncate text-xs text-cm-text-faint">
          {maskCpf(cliente.cpf)} · {formatPhone(cliente.telefone)}
        </p>
        {cliente.dividaAberta > 0 && (
          <div className="mt-1.5">
            <Badge variant="warning">Dívida em aberto: {formatCurrency(cliente.dividaAberta)}</Badge>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={onRemover}
        aria-label="Remover cliente"
        className="shrink-0 text-cm-text-faint hover:text-cm-danger"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

