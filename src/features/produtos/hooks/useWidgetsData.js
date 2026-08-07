// Hook responsável exclusivamente por carregar os dados dos widgets do rodapé
// (próximos do vencimento, lotes vencidos, valor em risco, resumo do estoque).
import { useMemo } from 'react';
import {
  LOTES_PROXIMOS_VENCIMENTO_MOCK,
  LOTES_VENCIDOS_MOCK,
  VALOR_EM_RISCO_MOCK,
} from '../mocks/lotes.mock';
import { RESUMO_ESTOQUE_EXTRA_MOCK } from '../mocks/resumoEstoque.mock';
import { PRODUCT_STATUS } from '../constants/statusConfig';

export function useWidgetsData(produtos, kpis) {
  const resumoEstoque = useMemo(() => {
    const semEstoque = produtos.filter((p) => p.status === PRODUCT_STATUS.SEM_ESTOQUE).length;
    const estoqueBaixo = produtos.filter((p) => p.status === PRODUCT_STATUS.ESTOQUE_BAIXO).length;

    return {
      estoqueTotalCusto: kpis.valorTotalEstoque,
      produtosSemEstoque: semEstoque,
      produtosComEstoqueBaixo: estoqueBaixo,
      estoqueReservadoValor: RESUMO_ESTOQUE_EXTRA_MOCK.estoqueReservadoValor,
      itensEmTransito: RESUMO_ESTOQUE_EXTRA_MOCK.itensEmTransito,
    };
  }, [produtos, kpis.valorTotalEstoque]);

  return {
    proximosVencimento: LOTES_PROXIMOS_VENCIMENTO_MOCK,
    lotesVencidos: LOTES_VENCIDOS_MOCK,
    valorEmRisco: VALOR_EM_RISCO_MOCK,
    resumoEstoque,
  };
}
