import {
  Wallet,
  House,
  ChevronRight,
  CalendarDays,
  Plus,
} from "lucide-react";

import { Button } from "../../../../shared/components/ui/Button.jsx";
import { PeriodoPicker } from "../PeriodoPicker/PeriodoPicker.jsx";

export function PageHeader({
  periodo,
  onRegistrarRecebimento,
  onRegistrarPagamento,
}) {
  return (
    <header className="-mr-8 animate-in fade-in space-y-4 duration-500">
      {/* Breadcrumb */}
      <nav
        aria-label="Navegação estrutural"
        className="flex items-center gap-2 text-sm"
      >
        <House
          size={15}
          className="text-cm-text-muted"
          aria-hidden="true"
        />

        <span className="text-cm-text-muted">Home</span>

        <ChevronRight
          size={14}
          className="text-cm-text-muted/60"
          aria-hidden="true"
        />

        <span className="font-medium text-green-700 dark:text-green-400">
          Pagamentos
        </span>
      </nav>

      {/* Cabeçalho e ações */}
      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_380px]">
        {/* Título e descrição */}
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-600 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400">
            <Wallet size={21} strokeWidth={1.9} />
          </div>

          <div className="min-w-0">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-green-600 dark:text-green-400">
                Gestão financeira
              </span>

              <span className="h-1 w-1 rounded-full bg-cm-text-muted/50" />

              <span className="text-xs text-cm-text-muted">
                Contas e movimentações
              </span>
            </div>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-cm-text sm:text-3xl">
              Pagamentos
            </h1>

           <p className="mt-1 max-w-[480px] text-sm leading-relaxed text-cm-text-muted">
            Gerencie recebimentos, contas a pagar e movimentações
            financeiras da sua loja em um só lugar.
          </p>
          </div>
        </div>

        {/* Período e ações */}
        <div className="-mt-8 -ml-10 mr-8 flex min-w-0 flex-col gap-2">
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />

              <span className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
                Período de análise
              </span>
            </div>

            <PeriodoPicker periodo={periodo} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              icon={Plus}
              onClick={onRegistrarRecebimento}
              variant="success"
            >
              <span className="whitespace-nowrap text-xs sm:text-sm">
                Registrar recebimento
              </span>
            </Button>

            <Button
              icon={Plus}
              onClick={onRegistrarPagamento}
              variant="primary"
            >
              <span className="whitespace-nowrap text-xs sm:text-sm">
                Registrar pagamento
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
