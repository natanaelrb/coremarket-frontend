import { Wallet } from "lucide-react";
import { Badge } from "../../../../shared/components/ui/Badge.jsx";

export function CaixaStatus({ caixa }) {
  const aberto = caixa.status === "ABERTO";

  return (
    <div className="flex min-w-0 flex-1 items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400">
        <Wallet size={19} strokeWidth={1.8} />
      </div>

      <div className="min-w-0 flex-1">
        <span className="block text-xs font-medium text-cm-text-muted">
          Caixa atual
        </span>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-cm-text">
            #{caixa.numero}
          </span>

          <Badge variant={aberto ? "success" : "danger"} dot>
            {aberto ? "Aberto" : "Fechado"}
          </Badge>
        </div>
      </div>
    </div>
  );
}
