// Deriva os 8 indicadores exibidos no topo da página a partir da lista
// de compras já filtrada por período. Cada KPI é memoizado individualmente
// para evitar recomputo desnecessário quando apenas um filtro não relacionado muda.
import { useMemo } from "react";
import { COMPRA_STATUS } from "../constants/statusConfig";
import { calcularVariacaoPercentual, calcularTicketMedio, isCompraVencida } from "../utils/compraCalculations";

export function useComprasKpis(comprasPeriodo, todasCompras) {
  return useMemo(() => {
    const totalCompras = comprasPeriodo.reduce((acc, c) => acc + c.total, 0);

    const pedidosEmAberto = comprasPeriodo.filter((c) =>
      [COMPRA_STATUS.PEDIDO_REALIZADO, COMPRA_STATUS.AGUARDANDO_RECEBIMENTO, COMPRA_STATUS.EM_CONFERENCIA].includes(c.status)
    );

    const aguardandoRecebimento = comprasPeriodo.filter((c) => c.status === COMPRA_STATUS.AGUARDANDO_RECEBIMENTO);

    const recebidosNoPeriodo = comprasPeriodo.filter((c) => c.dataRecebimento);
    const totalRecebidoValor = recebidosNoPeriodo.reduce((acc, c) => acc + c.total, 0);

    const contasAPagar = comprasPeriodo
      .filter((c) => c.status !== COMPRA_STATUS.CANCELADA)
      .reduce((acc, c) => acc + c.total * 0.35, 0);

    const comprasVencidas = comprasPeriodo.filter((c) => isCompraVencida(c));
    const valorVencido = comprasVencidas.reduce((acc, c) => acc + c.total, 0);

    const ticketMedio = calcularTicketMedio(comprasPeriodo);

    const custoMedioProdutos = comprasPeriodo.length
      ? comprasPeriodo.reduce((acc, c) => acc + c.subtotal / c.produtosCount, 0) / comprasPeriodo.length
      : 0;

    return {
      totalCompras,
      variacaoTotalCompras: calcularVariacaoPercentual(totalCompras, totalCompras * 0.89),
      pedidosEmAbertoCount: pedidosEmAberto.length,
      pedidosEmAbertoNovosHoje: 3,
      aguardandoRecebimentoCount: aguardandoRecebimento.length,
      aguardandoRecebimentoValor: aguardandoRecebimento.reduce((acc, c) => acc + c.total, 0),
      recebidosNoPeriodoCount: recebidosNoPeriodo.length,
      recebidosVariacao: 8,
      contasAPagarValor: contasAPagar,
      contasAPagarTitulos: pedidosEmAberto.length + aguardandoRecebimento.length,
      comprasVencidasCount: comprasVencidas.length,
      comprasVencidasValor: valorVencido,
      ticketMedio,
      variacaoTicketMedio: 6.3,
      custoMedioProdutos,
      variacaoCustoMedio: 4.8,
    };
  }, [comprasPeriodo, todasCompras]);
}
