// Aba "Resumo": reproduz fielmente o layout de referência com duas colunas
// (Informações gerais / Resumo financeiro), seguidas de Condições de
// pagamento, Recebimento e Integrações em largura total.
import { InformacoesGerais } from "../sections/InformacoesGerais";
import { ResumoFinanceiro } from "../sections/ResumoFinanceiro";
import { CondicoesPagamento } from "../sections/CondicoesPagamento";
import { Recebimento } from "../sections/Recebimento";
import { Integracoes } from "../sections/Integracoes";

export function ResumoTab({ detalhe }) {
  return (
    <div className="space-y-5 animate-fade-in">
      <div className="grid grid-cols-2 gap-4">
        <InformacoesGerais detalhe={detalhe} />
        <ResumoFinanceiro detalhe={detalhe} />
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <CondicoesPagamento detalhe={detalhe} />
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <Recebimento detalhe={detalhe} />
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <Integracoes detalhe={detalhe} />
      </div>
    </div>
  );
}
