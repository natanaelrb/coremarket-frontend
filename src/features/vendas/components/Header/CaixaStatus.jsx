import { Badge } from "../../../../shared/components/ui/Badge.jsx";

/**
 * Exibe o número do caixa atual e seu status (aberto/fechado).
 * @param {{ caixa: { numero: string, status: string } }} props
 */
export function CaixaStatus({ caixa }) {
  const aberto = caixa.status === 'ABERTO';

  return (
    <div className="flex flex-col rounded-lg border border-cm-border bg-cm-surface px-4 py-2">
      <span className="text-[11px] text-cm-text-faint">Caixa</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-cm-text">#{caixa.numero}</span>
        <Badge variant={aberto ? 'success' : 'danger'} dot>
          {aberto ? 'ABERTO' : 'FECHADO'}
        </Badge>
      </div>
    </div>
  );
}

