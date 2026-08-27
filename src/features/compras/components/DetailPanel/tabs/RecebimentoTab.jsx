import { Recebimento } from "../sections/Recebimento";
import { Integracoes } from "../sections/Integracoes";

export function RecebimentoTab({ detalhe }) {
  return (
    <div className="space-y-5 animate-fade-in">
      <Recebimento detalhe={detalhe} />
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <Integracoes detalhe={detalhe} />
      </div>
    </div>
  );
}
