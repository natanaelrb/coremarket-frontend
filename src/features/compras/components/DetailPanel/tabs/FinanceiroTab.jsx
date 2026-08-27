import { ResumoFinanceiro } from "../sections/ResumoFinanceiro";
import { CondicoesPagamento } from "../sections/CondicoesPagamento";

export function FinanceiroTab({ detalhe }) {
  return (
    <div className="space-y-5 animate-fade-in">
      <ResumoFinanceiro detalhe={detalhe} />
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <CondicoesPagamento detalhe={detalhe} />
      </div>
    </div>
  );
}
