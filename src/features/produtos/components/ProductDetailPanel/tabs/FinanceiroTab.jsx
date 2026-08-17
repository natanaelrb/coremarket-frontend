// Aba "Financeiro": indicadores de margem, lucro e giro financeiro do produto.
import { InfoSection } from '../InfoSection';
import { InfoField } from '../InfoField';
import { useProdutoSmartInfo } from '../../../hooks/useProdutoSmartInfo';
import { calcMargemPercent, calcLucroUnitario } from '../../../utils/calculators';
import { formatCurrency, formatPercent } from '../../../utils/formatters';

export function FinanceiroTab({ produto }) {
  const smartInfo = useProdutoSmartInfo(produto);
  const margem = calcMargemPercent(produto.precoCompra, produto.precoVenda);
  const lucro = calcLucroUnitario(produto.precoCompra, produto.precoVenda);

  return (
    <div className="px-5">
      <InfoSection title="Rentabilidade" columns={2}>
        <InfoField label="Preço de compra" value={formatCurrency(produto.precoCompra)} />
        <InfoField label="Preço de venda" value={formatCurrency(produto.precoVenda)} />
        <InfoField label="Margem" value={formatPercent(margem)} valueClassName="text-emerald-600 dark:text-emerald-400" />
        <InfoField label="Lucro unitário" value={formatCurrency(lucro)} valueClassName="text-emerald-600 dark:text-emerald-400" />
      </InfoSection>

      <InfoSection title="Indicadores do mês" columns={2}>
        <InfoField label="Receita gerada" value={formatCurrency(smartInfo.receitaGeradaMes)} />
        <InfoField label="Giro do estoque" value={smartInfo.giroEstoqueMes} />
        <InfoField label="Valor total investido" value={formatCurrency(produto.precoCompra * produto.estoque)} />
        <InfoField label="Valor total potencial de venda" value={formatCurrency(produto.precoVenda * produto.estoque)} />
      </InfoSection>
    </div>
  );
}
