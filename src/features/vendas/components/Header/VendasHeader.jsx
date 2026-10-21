import {
  ShoppingCart,
  Search,
  House,
  ChevronRight,
  Activity,
} from "lucide-react";

import { Button } from "../../../../shared/components/ui/Button.jsx";
import { ActionButtons } from "../Actions/ActionButtons.jsx";
import { CaixaStatus } from "./CaixaStatus.jsx";
import { OperadorMenu } from "./OperadorMenu.jsx";
import { DateTimeDisplay } from "./DateTimeDisplay.jsx";

export function VendasHeader({
  caixa,
  operador,
  onFocarBuscaProduto,
  onNovaVenda,
  onConsultarVendas,
}) {
  return (
    <header className="space-y-5 animate-in fade-in duration-500">
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
          Vendas
        </span>
      </nav>

      {/* Cabeçalho e ações */}
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-600 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400">
            <ShoppingCart size={24} strokeWidth={1.9} />
          </div>

          <div className="min-w-0">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green-600 dark:text-green-400">
                Operação comercial
              </span>

              <span className="h-1 w-1 rounded-full bg-cm-text-muted/50" />

              <span className="text-xs text-cm-text-muted">
                Ponto de venda
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-cm-text">
              Vendas
            </h1>

            <p className="mt-1 max-w-xl text-sm leading-relaxed text-cm-text-muted">
              Registre vendas, gerencie produtos e acompanhe suas operações
              em um só lugar.
            </p>
          </div>
        </div>

        {/* Ações no canto superior direito */}
        <div className="flex w-full flex-col gap-2 sm:w-auto xl:min-w-[220px] xl:items-stretch">
          <Button
            variant="primary"
            icon={Search}
            onClick={onFocarBuscaProduto}
          >
            <span>Buscar produto</span>

            <span className="ml-2 rounded-md border border-white/30 bg-white/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
              F2
            </span>
          </Button>

          <ActionButtons
            onNovaVenda={onNovaVenda}
            onConsultarVendas={onConsultarVendas}
          />
        </div>
      </div>

      {/* Card: informações da operação */}
      <section
        aria-labelledby="informacoes-operacao"
        className="
          relative isolate overflow-visible rounded-2xl
          border border-slate-200/80 bg-white
          shadow-[0_4px_24px_-12px_rgba(15,23,42,0.12)]
          transition-shadow duration-300
          hover:shadow-[0_12px_32px_-16px_rgba(15,23,42,0.18)]
          dark:border-white/[0.08] dark:bg-cm-surface
        "
      >
        {/* Cabeçalho */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 pb-4 pt-6 sm:px-6">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200/70 bg-emerald-50 text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-950/40 dark:text-emerald-400">
              <Activity size={21} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
                  VISÃO GERAL
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="text-[10px] font-medium text-cm-text-muted">
                  Operação
                </span>
              </div>

              <h2
                id="informacoes-operacao"
                className="text-base font-bold tracking-tight text-cm-text sm:text-lg"
              >
                Informações da operação
              </h2>

              <p className="mt-1 text-xs leading-relaxed text-cm-text-muted sm:text-[13px]">
                Acompanhe o caixa, o operador e o horário atual.
              </p>
            </div>
          </div>

          {/* Indicador de painel */}
          <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/70 px-3 py-2 dark:border-emerald-800/40 dark:bg-emerald-950/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
              Painel operacional
            </span>
          </div>
        </div>

        {/* Divisor */}
        <div className="mx-5 border-t border-slate-100 dark:border-white/[0.07] sm:mx-6" />

        {/* Informações da operação */}
        <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          {/* Caixa */}
          <div
            className="
              group relative min-w-0 rounded-xl
              border border-emerald-100/80 bg-gradient-to-br
              from-emerald-50/80 to-white p-4
              transition-all duration-200
              hover:-translate-y-0.5 hover:border-emerald-200
              hover:shadow-[0_8px_20px_-12px_rgba(16,185,129,0.35)]
              dark:border-emerald-900/40 dark:from-emerald-950/30
              dark:to-transparent dark:hover:border-emerald-800/70
            "
          >
            <div className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-emerald-500 opacity-70 transition-opacity group-hover:opacity-100" />
            <div className="min-w-0 pl-1">
              <CaixaStatus caixa={caixa} />
            </div>
          </div>

          {/* Operador */}
          <div
            className="
              group relative min-w-0 rounded-xl
              border border-slate-200/80 bg-slate-50/70 p-4
              transition-all duration-200
              hover:-translate-y-0.5 hover:border-slate-300
              hover:bg-white hover:shadow-[0_8px_20px_-12px_rgba(15,23,42,0.16)]
              dark:border-white/[0.08] dark:bg-white/[0.025]
              dark:hover:border-white/[0.14] dark:hover:bg-white/[0.045]
            "
          >
            <div className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-slate-400/70 transition-colors group-hover:bg-emerald-500" />
            <div className="min-w-0 pl-1">
              <OperadorMenu operador={operador} />
            </div>
          </div>

          {/* Data e horário */}
          <div
            className="
              group relative min-w-0 rounded-xl
              border border-sky-100/80 bg-sky-50/50 p-4
              transition-all duration-200
              hover:-translate-y-0.5 hover:border-sky-200
              hover:shadow-[0_8px_20px_-12px_rgba(14,165,233,0.24)]
              dark:border-sky-900/40 dark:bg-sky-950/20
              dark:hover:border-sky-800/60
              sm:col-span-2 xl:col-span-1
            "
          >
            <div className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-sky-500/70 transition-opacity group-hover:opacity-100" />
            <div className="min-w-0 pl-1">
              <DateTimeDisplay />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
