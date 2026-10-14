
import { Wallet, CreditCard } from "lucide-react";
import { ResumoFinanceiro } from "../sections/ResumoFinanceiro";
import { CondicoesPagamento } from "../sections/CondicoesPagamento";

export function FinanceiroTab({ detalhe }) {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Resumo financeiro */}
      <section className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <Wallet size={20} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Resumo financeiro
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Confira os valores e a composição financeira desta compra.
            </p>
          </div>
        </div>

        <ResumoFinanceiro detalhe={detalhe} />
      </section>

      {/* Condições de pagamento */}
      <section className="space-y-4 border-t border-slate-200 pt-6 dark:border-slate-700/70">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
            <CreditCard size={20} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Condições de pagamento
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Consulte a forma de pagamento, as parcelas e os vencimentos.
            </p>
          </div>
        </div>

        <CondicoesPagamento detalhe={detalhe} />
      </section>
    </div>
  );
}
