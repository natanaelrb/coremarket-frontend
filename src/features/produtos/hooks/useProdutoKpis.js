// Hook responsável exclusivamente por calcular os números dos cards de KPI do topo.
import { useMemo } from 'react';
import { PRODUCT_STATUS } from '../constants/statusConfig';
import { calcValorTotalEstoque, calcPercentualDoTotal } from '../utils/calculators';
import { TOTAL_PRODUTOS_INATIVOS } from '../mocks/produtos.mock';

export function useProdutoKpis(produtos) {
  return useMemo(() => {
    const totalProdutos = produtos.length;
    const ativos = produtos.filter((p) => p.ativo).length;
    const semEstoque = produtos.filter((p) => p.status === PRODUCT_STATUS.SEM_ESTOQUE).length;
    const estoqueBaixo = produtos.filter((p) => p.status === PRODUCT_STATUS.ESTOQUE_BAIXO).length;
    const categoriasAtivas = new Set(produtos.map((p) => p.categoria)).size;
    const valorTotalEstoque = calcValorTotalEstoque(produtos);

    return {
      totalProdutos,
      ativos,
      percentualAtivos: calcPercentualDoTotal(ativos, totalProdutos),
      semEstoque,
      percentualSemEstoque: calcPercentualDoTotal(semEstoque, totalProdutos),
      estoqueBaixo,
      percentualEstoqueBaixo: calcPercentualDoTotal(estoqueBaixo, totalProdutos),
      valorTotalEstoque,
      categoriasAtivas,
      inativos: TOTAL_PRODUTOS_INATIVOS,
      percentualInativos: calcPercentualDoTotal(TOTAL_PRODUTOS_INATIVOS, totalProdutos),
    };
  }, [produtos]);
}
