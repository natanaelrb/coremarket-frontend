import { Recebimento } from "../sections/Recebimento";
import { Integracoes } from "../sections/Integracoes";

export function RecebimentoTab({
  detalhe,
  onVerConferencia,
  onVerEstoque,
  onVerContasAPagar,
  onVerNotaFiscal,
}) {
  return (
    <div className="animate-fade-in space-y-6">
      <Recebimento
        detalhe={detalhe}
        onVerConferencia={onVerConferencia}
      />

      <div className="border-t border-slate-200 pt-6 dark:border-slate-700/70">
        <Integracoes
          detalhe={detalhe}
          onVerEstoque={onVerEstoque}
          onVerContasAPagar={onVerContasAPagar}
          onVerNotaFiscal={onVerNotaFiscal}
        />
      </div>
    </div>
  );
}
