// Hook responsável exclusivamente por derivar as "Informações inteligentes" do produto
// selecionado (lucro médio, giro de estoque, dias sem vender, etc.).
// Endpoint real sugerido: GET /api/produtos/{id}/indicadores
import { useMemo } from 'react';
import { calcLucroUnitario } from '../utils/calculators';

export function useProdutoSmartInfo(produto) {
  return useMemo(() => {
    if (!produto) return null;

    // Seed determinística a partir do id para gerar números plausíveis e estáveis.
    const seed = produto.codigo
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const lucroMedio = calcLucroUnitario(produto.precoCompra, produto.precoVenda);
    const quantidadeVendidaMes = 40 + (seed % 400);
    const receitaGeradaMes = Number((quantidadeVendidaMes * produto.precoVenda).toFixed(2));
    const giroEstoqueMes = produto.estoque > 0
      ? Number((quantidadeVendidaMes / produto.estoque).toFixed(1))
      : 0;
    const diasSemVender = produto.estoque === 0 ? 0 : (seed % 15);
    const produtoMaisVendido = seed % 3 === 0;

    return {
      lucroMedio,
      produtoMaisVendido,
      diasSemVender,
      giroEstoqueMes,
      quantidadeVendidaMes,
      receitaGeradaMes,
    };
  }, [produto]);
}
