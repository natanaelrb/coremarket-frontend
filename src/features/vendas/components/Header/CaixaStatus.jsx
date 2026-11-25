import { Wallet, CalendarDays, LogOut } from "lucide-react";
import { Badge } from "../../../../shared/components/ui/Badge.jsx";

export function CaixaStatus({ caixa, dataAbertura, onFecharCaixa }) {
  const aberto = caixa.status === "ABERTO";

  return (
    <div className="relative flex h-full min-w-0 min-h-[150px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-white/10 dark:bg-[#15182D]">

      {/* Detalhe lateral */}
      <div
        className={`absolute inset-y-0 left-0 w-1 ${
          aberto ? "bg-emerald-500" : "bg-gray-400"
        }`}
      />

      <div className="flex flex-1 flex-col justify-between p-3 pl-5">

        {/* Informações principais */}
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
            <Wallet size={27} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <span className="block text-sm font-semibold text-cm-text-muted">
              Caixa atual
            </span>

            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-cm-text">
                #{caixa.numero}
              </span>

              {aberto ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Aberto
                </span>
              ) : (
                <Badge variant="danger" dot>
                  Fechado
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-3 border-t border-gray-100 dark:border-white/10" />

        {/* Informações inferiores */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <CalendarDays
              size={21}
              strokeWidth={1.8}
              className="shrink-0 text-cm-text"
            />

            <div className="min-w-0">
              <span className="block text-xs text-cm-text-muted">
                Aberto desde
              </span>

              <span className="mt-0.5 block text-sm font-semibold text-cm-text">
                {dataAbertura
                ? new Date(dataAbertura).toLocaleString("pt-BR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })
                : "Data não informada"}
              </span>
            </div>
          </div>

          {aberto && onFecharCaixa && (
            <button
              type="button"
              onClick={onFecharCaixa}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-cm-text shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              <LogOut size={15} />
              Fechar caixa
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
