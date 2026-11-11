import { useMemo } from "react";
import { getVendaDaConta } from "../../data";
import { CONDICAO_LABEL } from "../../constants";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { formatDateTimeBR } from "../../../../shared/utils/formatDate";
import { InfoLabel } from "./InfoLabel";

export function VendaRelacionada({ conta }) {
  const venda = useMemo(
    () => getVendaDaConta(conta),
    [conta.vendaId, conta.emissao],
  );
  return (
    <section>
      <h3 className="mb-1.5 text-[11px] font-bold text-ink">
        Venda relacionada
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-brand">
          Venda #{venda.id}
        </span>
        <span className="text-[10.5px] text-ink-2 tabular-nums">
          {formatDateTimeBR(venda.data, venda.hora)}
        </span>
      </div>
      <div className="mt-1.5 flex items-center justify-between">
        <InfoLabel>Forma de pagamento original</InfoLabel>
        <span className="text-[11px] font-medium text-ink">
          {CONDICAO_LABEL[venda.condicao]}
        </span>
      </div>
      <p className="mb-1 mt-2.5 text-[10.5px] font-semibold text-ink-2">
        Itens da venda
      </p>
      <ul className="overflow-hidden rounded-lg border border-line text-[11px]">
        {venda.itens.map((i) => (
          <li
            key={i.nome}
            className="flex items-center justify-between gap-2 border-b border-line/70 px-2.5 py-1.5 last:border-0"
          >
            <span className="min-w-0 flex-1 truncate text-ink">{i.nome}</span>
            <span className="text-ink-2 tabular-nums">
              {i.quantidade} x {formatCurrency(i.preco)}
            </span>
            <span className="w-16 text-right font-medium tabular-nums text-ink">
              {formatCurrency(i.subtotal)}
            </span>
          </li>
        ))}
        <li className="flex items-center justify-between bg-surface-2/60 px-2.5 py-1.5 font-bold text-ink">
          <span>Total da venda</span>
          <span className="tabular-nums">{formatCurrency(venda.total)}</span>
        </li>
      </ul>
    </section>
  );
}
