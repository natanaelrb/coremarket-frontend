import { CheckCircle2, AlertTriangle } from 'lucide-react';

/**
 * Alerta indicando se todos os itens do carrinho têm estoque disponível.
 * @param {{ disponivel: boolean }} props
 */
export function EstoqueAlert({ disponivel }) {
  if (disponivel) {
    return (
      <div className="flex items-center gap-2.5 rounded-lg border border-cm-success/30 bg-cm-success-soft px-3.5 py-2.5">
        <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-cm-success" />
        <div>
          <p className="text-sm font-medium text-cm-success">Estoque</p>
          <p className="text-xs text-cm-success/80">Todos os itens com estoque disponível.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-cm-danger/30 bg-cm-danger-soft px-3.5 py-2.5">
      <AlertTriangle className="h-4.5 w-4.5 shrink-0 text-cm-danger" />
      <div>
        <p className="text-sm font-medium text-cm-danger">Estoque insuficiente</p>
        <p className="text-xs text-cm-danger/80">Ajuste a quantidade de algum item antes de finalizar.</p>
      </div>
    </div>
  );
}

