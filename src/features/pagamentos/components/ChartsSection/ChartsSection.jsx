import { RecebimentosPagamentosChart } from './RecebimentosPagamentosChart.jsx';
import { DistribuicaoFormaPagamentoChart } from './DistribuicaoFormaPagamentoChart.jsx';
import { ProximosVencimentos } from './ProximosVencimentos.jsx';
import { PrevisaoFinanceira } from './PrevisaoFinanceira.jsx';

/**
 * Grade financeira responsiva:
 * recebimentos x pagamentos, distribuição por forma,
 * próximos vencimentos e previsão financeira.
 *
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
    <section
      aria-label="Resumo financeiro"
      className="grid min-w-0 grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2"
    >
      <div className="min-w-0">
        <RecebimentosPagamentosChart
          data={serieDiaria}
          isLoading={isLoadingSerie}
        />
      </div>

      <div className="min-w-0">
        <DistribuicaoFormaPagamentoChart
          data={distribuicaoForma}
          isLoading={isLoadingDistribuicao}
        />
      </div>

      <div className="min-w-0">
        <ProximosVencimentos
          itens={proximosVencimentos}
          isLoading={isLoadingProximos}
          onVerTodos={onVerTodosVencimentos}
        />
      </div>

      <div className="min-w-0">
        <PrevisaoFinanceira
          previsao={previsao}
          isLoading={isLoadingPrevisao}
          onVerFluxo={onVerFluxoCaixa}
        />
      </div>
    </section>
  );
}