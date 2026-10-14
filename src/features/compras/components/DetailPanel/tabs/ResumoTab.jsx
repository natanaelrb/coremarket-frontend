
import { InformacoesGerais } from "../sections/InformacoesGerais";
import { ResumoFinanceiro } from "../sections/ResumoFinanceiro";
import { CondicoesPagamento } from "../sections/CondicoesPagamento";
import { Recebimento } from "../sections/Recebimento";
import { Integracoes } from "../sections/Integracoes";

function SectionCard({ children, className = "" }) {
  return (
    <section
      className={`min-w-0 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-colors duration-200 dark:border-white/[0.07] dark:bg-[#151b28] sm:p-6 ${className}`}
    >
      {children}
    </section>
  );
}

export function ResumoTab({
  detalhe,
  onVerConferencia,
  onVerEstoque,
  onVerContasAPagar,
  onVerNotaFiscal,
}) {
  return (
    <div className="min-w-0 space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-2">
        <SectionCard>
          <InformacoesGerais detalhe={detalhe} />
        </SectionCard>

        <SectionCard>
          <ResumoFinanceiro detalhe={detalhe} />
        </SectionCard>
      </div>

      <SectionCard>
        <CondicoesPagamento detalhe={detalhe} />
      </SectionCard>

      <SectionCard>
        <Recebimento
          detalhe={detalhe}
          onVerConferencia={onVerConferencia}
        />
      </SectionCard>

      <SectionCard>
        <Integracoes
          detalhe={detalhe}
          onVerEstoque={onVerEstoque}
          onVerContasAPagar={onVerContasAPagar}
          onVerNotaFiscal={onVerNotaFiscal}
        />
      </SectionCard>
    </div>
  );
}
