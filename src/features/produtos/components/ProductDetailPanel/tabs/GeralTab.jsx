// Aba "Geral": informações básicas, preços, estoque e validade — replica o layout do protótipo.
import { InfoSection } from '../InfoSection';
import { InfoField } from '../InfoField';
import { formatCurrency, formatPercent, formatWeightKg, formatVolumeL, formatDate } from '../../../utils/formatters';
import { calcMargemPercent, calcLucroUnitario, calcEstoqueDisponivel } from '../../../utils/calculators';
import { getDaysUntil } from '../../../utils/validadeUtils';

export function GeralTab({ produto }) {
  const margem = calcMargemPercent(produto.precoCompra, produto.precoVenda);
  const lucro = calcLucroUnitario(produto.precoCompra, produto.precoVenda);
  const disponivel = calcEstoqueDisponivel(produto.estoque, produto.estoqueReservado);
  const diasValidade = produto.validadeMaisProxima ? getDaysUntil(produto.validadeMaisProxima) : null;

  return (
    <div className="px-5">
      <InfoSection title="Informações básicas" columns={3}>
        <InfoField label="Categoria" value={produto.categoria} />
        <InfoField label="Marca" value={produto.marca} />
        <InfoField label="Fornecedor" value={produto.fornecedor} />
        <InfoField label="Unidade" value={produto.unidade} />
        <InfoField label="Tipo" value={produto.tipo} />
        <InfoField label="NCM" value={produto.ncm} />
        <InfoField label="Peso" value={formatWeightKg(produto.pesoKg)} />
        <InfoField label="Volume" value={produto.volumeL ? formatVolumeL(produto.volumeL) : '—'} />
      </InfoSection>

      <InfoSection title="Preços" columns={4}>
        <InfoField label="Preço de compra" value={formatCurrency(produto.precoCompra)} />
        <InfoField label="Preço de venda" value={formatCurrency(produto.precoVenda)} />
        <InfoField label="Margem" value={formatPercent(margem)} valueClassName="text-emerald-600 dark:text-emerald-400" />
        <InfoField label="Lucro" value={formatCurrency(lucro)} valueClassName="text-emerald-600 dark:text-emerald-400" />
      </InfoSection>

      <InfoSection title="Estoque" columns={4}>
        <InfoField label="Estoque atual" value={produto.estoque} />
        <InfoField label="Reservado" value={produto.estoqueReservado} />
        <InfoField label="Disponível" value={disponivel} valueClassName="text-emerald-600 dark:text-emerald-400" />
        <InfoField label="Estoque mínimo" value={produto.estoqueMinimo} />
        <InfoField label="Estoque máximo" value={produto.estoqueMaximo} />
      </InfoSection>

      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-xs text-gray-400 dark:text-gray-500">Validade (mais próxima)</p>
          <p className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">
            {formatDate(produto.validadeMaisProxima)}
          </p>
          {diasValidade !== null && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {diasValidade >= 0 ? `${diasValidade} dias restantes` : `Vencido há ${Math.abs(diasValidade)} dias`}
            </p>
          )}
          {produto.lotesCount > 0 && (
            <p className="mt-1 text-xs text-violet-600 dark:text-violet-400">
              Existem {produto.lotesCount} lotes deste produto
            </p>
          )}
        </div>

        {diasValidade !== null && (
          <span
            className={[
              'shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold',
              diasValidade < 0
                ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                : diasValidade <= 7
                ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
            ].join(' ')}
          >
            {diasValidade < 0 ? 'Vencido' : diasValidade <= 7 ? 'Atenção' : 'OK'}
          </span>
        )}
      </div>
    </div>
  );
}
