// Aba "Estoque": visão detalhada de estoque atual, reservado, disponível e níveis mín/máx.
import { InfoSection } from '../InfoSection';
import { InfoField } from '../InfoField';
import { calcEstoqueDisponivel, calcPercentualDoTotal } from '../../../utils/calculators';
import { formatNumber, formatPercent } from '../../../utils/formatters';

export function EstoqueTab({ produto }) {
  const disponivel = calcEstoqueDisponivel(produto.estoque, produto.estoqueReservado);
  const ocupacao = calcPercentualDoTotal(produto.estoque, produto.estoqueMaximo);

  return (
    <div className="px-5">
      <InfoSection title="Níveis de estoque" columns={3}>
        <InfoField label="Estoque atual" value={formatNumber(produto.estoque)} />
        <InfoField label="Reservado" value={formatNumber(produto.estoqueReservado)} />
        <InfoField label="Disponível" value={formatNumber(disponivel)} valueClassName="text-emerald-600 dark:text-emerald-400" />
        <InfoField label="Estoque mínimo" value={formatNumber(produto.estoqueMinimo)} />
        <InfoField label="Estoque máximo" value={formatNumber(produto.estoqueMaximo)} />
        <InfoField label="Unidade" value={produto.unidade} />
      </InfoSection>

      <div className="py-4">
        <div className="mb-1.5 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
          <span>Ocupação da capacidade máxima</span>
          <span>{formatPercent(ocupacao, 0)}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
          <div
            className="h-full rounded-full bg-violet-500 transition-all duration-700"
            style={{ width: `${Math.min(ocupacao, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
