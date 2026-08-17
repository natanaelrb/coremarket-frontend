// Seção "Informações inteligentes": indicadores derivados exibidos no rodapé do painel.
import { CheckCircle2, MinusCircle } from 'lucide-react';
import { useProdutoSmartInfo } from '../../hooks/useProdutoSmartInfo';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export function SmartInfoSection({ produto }) {
  const info = useProdutoSmartInfo(produto);
  if (!info) return null;

  return (
    <div className="p-5">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
        Informações inteligentes
      </h4>

      <div className="space-y-0.5">
        <div className="flex items-center justify-between py-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Lucro médio</span>
          <span className="font-medium text-gray-800 dark:text-gray-100">{formatCurrency(info.lucroMedio)}</span>
        </div>

        <div className="flex items-center justify-between py-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Produto mais vendido</span>
          {info.produtoMaisVendido ? (
            <CheckCircle2 size={16} className="text-emerald-500" />
          ) : (
            <MinusCircle size={16} className="text-gray-300 dark:text-gray-600" />
          )}
        </div>

        <div className="flex items-center justify-between py-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Dias sem vender</span>
          <span className={`font-medium ${info.diasSemVender > 7 ? 'text-amber-500' : 'text-gray-800 dark:text-gray-100'}`}>
            {info.diasSemVender}
          </span>
        </div>

        <div className="flex items-center justify-between py-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Giro do estoque (mês)</span>
          <span className="font-medium text-gray-800 dark:text-gray-100">{info.giroEstoqueMes}</span>
        </div>

        <div className="flex items-center justify-between py-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Quantidade vendida (mês)</span>
          <span className="font-medium text-gray-800 dark:text-gray-100">{formatNumber(info.quantidadeVendidaMes)} un</span>
        </div>

        <div className="flex items-center justify-between py-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Receita gerada (mês)</span>
          <span className="font-medium text-gray-800 dark:text-gray-100">{formatCurrency(info.receitaGeradaMes)}</span>
        </div>
      </div>
    </div>
  );
}
