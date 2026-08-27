import { RecebimentosPagamentosChart } from './RecebimentosPagamentosChart.jsx';
import { DistribuicaoFormaPagamentoChart } from './DistribuicaoFormaPagamentoChart.jsx';
import { ProximosVencimentos } from './ProximosVencimentos.jsx';
import { PrevisaoFinanceira } from './PrevisaoFinanceira.jsx';

/**
 * 4-widget grid: recebimentos x pagamentos (wide), distribuição por
 * forma, próximos vencimentos and previsão financeira.
 * @param {{
 *  serieDiaria: object[], isLoadingSerie: boolean,
 *  distribuicaoForma: object[], isLoadingDistribuicao: boolean,
 *  proximosVencimentos: object[], isLoadingProximos: boolean,
 *  previsao: object|null, isLoadingPrevisao: boolean,
 *  onVerTodosVencimentos: () => void,
 *  onVerFluxoCaixa: () => void,
 * }} props
 */
export function ChartsSection({
  serieDiaria,
  isLoadingSerie,
  distribuicaoForma,
  isLoadingDistribuicao,
  proximosVencimentos,
  isLoadingProximos,
  previsao,
  isLoadingPrevisao,
  onVerTodosVencimentos,
  onVerFluxoCaixa,
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      <div className="md:col-span-2">
        <RecebimentosPagamentosChart data={serieDiaria} isLoading={isLoadingSerie} />
      </div>
      <DistribuicaoFormaPagamentoChart data={distribuicaoForma} isLoading={isLoadingDistribuicao} />
      <ProximosVencimentos itens={proximosVencimentos} isLoading={isLoadingProximos} onVerTodos={onVerTodosVencimentos} />
      <PrevisaoFinanceira previsao={previsao} isLoading={isLoadingPrevisao} onVerFluxo={onVerFluxoCaixa} />
    </div>
  );
}
