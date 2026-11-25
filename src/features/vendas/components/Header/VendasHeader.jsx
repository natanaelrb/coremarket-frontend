import {
  ShoppingCart,
  House,
  ChevronRight,
} from "lucide-react";

import { ActionButtons } from "../Actions/ActionButtons.jsx";
import { CaixaStatus } from "./CaixaStatus.jsx";
import { OperadorMenu } from "./OperadorMenu.jsx";
import { DateTimeDisplay } from "./DateTimeDisplay.jsx";

export function VendasHeader({
  caixa,
  operador,
  onNovaVenda,
  onConsultarVendas,
  onFecharCaixa,
}) {
  return (
    <header className="space-y-5 animate-in fade-in duration-300">
      {/* Breadcrumb */}
      <nav
        aria-label="Navegação estrutural"
        className="flex items-center gap-2 text-xs font-medium text-cm-text-muted"
      >
        <House size={14} />
        <span>Home</span>
        <ChevronRight size={13} className="opacity-40" />
        <span>Vendas</span>
        <ChevronRight size={13} className="opacity-40" />
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Nova venda
        </span>
      </nav>

      {/* Título e ações */}
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700 shadow-sm shadow-blue-100/50 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:shadow-none">
            <ShoppingCart size={26} strokeWidth={1.9} />
          </div>

          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                Ponto de venda
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />

              <span className="text-[10px] font-medium text-cm-text-muted">
                PDV
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-cm-text sm:text-[28px]">
              Nova venda
            </h1>

            <p className="mt-1 text-sm text-cm-text-muted">
              Registre produtos, identifique o cliente e finalize a operação.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">

          <ActionButtons
            onNovaVenda={onNovaVenda}
            onConsultarVendas={onConsultarVendas}
          />
        </div>
      </div>
          
      {/* Informações operacionais */}
      <section
        aria-label="Informações do caixa"
        className="grid grid-cols-1 gap-3 lg:grid-cols-3"
      >

        <CaixaStatus
          caixa={caixa}
          dataAbertura={caixa.dataAbertura}
          onFecharCaixa={onFecharCaixa}
        />
        <OperadorMenu operador={operador} />
        <DateTimeDisplay />
        
      </section>
    </header>
  );
}
