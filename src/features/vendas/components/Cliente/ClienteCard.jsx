import { UserRound, X, Phone, CreditCard, Wallet, CheckCircle2 } from 'lucide-react';
import {
  formatCurrency,
  formatPhone,
  maskCpf,
} from '../../../../shared/utils/formatters.js';

/**
 * Cartão com os dados do cliente vinculado à venda e sua dívida em aberto.
 */
export function ClienteCard({ cliente, onRemover }) {
  const temDivida = cliente.dividaAberta > 0;

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-green-500/20 bg-green-500/[0.035]
        transition-all duration-200
        hover:border-green-500/35 hover:shadow-sm
        motion-reduce:transform-none
        animate-scale-in
      "
    >
      <div className="absolute inset-y-0 left-0 w-1 bg-green-500" />

      <div className="flex items-start gap-3 p-4 pl-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/15 bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <UserRound className="h-6 w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className="min-w-0 break-words text-sm font-bold text-cm-text"
              title={cliente.nome}
            >
              {cliente.nome}
            </h3>

            <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-3 w-3" />
              Vinculado
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <div className="flex min-w-0 items-center gap-1.5 text-xs text-cm-text-muted">
              <CreditCard className="h-3.5 w-3.5 shrink-0 text-blue-500" />
              <span className="break-words">{maskCpf(cliente.cpf)}</span>
            </div>

            <div className="flex min-w-0 items-center gap-1.5 text-xs text-cm-text-muted">
              <Phone className="h-3.5 w-3.5 shrink-0 text-violet-500" />
              <span>{formatPhone(cliente.telefone)}</span>
            </div>
          </div>

          {temDivida && (
            <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.07] p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Wallet className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
                  Dívida em aberto
                </p>

                <p className="mt-0.5 text-base font-bold tabular-nums text-amber-800 dark:text-amber-300">
                  {formatCurrency(cliente.dividaAberta)}
                </p>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onRemover}
          aria-label={`Remover ${cliente.nome} da venda`}
          title="Remover cliente da venda"
          className="
            flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
            text-cm-text-faint transition-colors duration-150
            hover:bg-rose-500/10 hover:text-rose-600
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-rose-500
            dark:hover:text-rose-400
          "
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
