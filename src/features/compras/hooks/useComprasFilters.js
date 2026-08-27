// Centraliza todo o estado de filtros da página (período, status, fornecedor,
// forma de pagamento, responsável) e aplica-os sobre a lista de compras.
import { useMemo, useState, useCallback } from "react";

const initialFilters = {
  dataInicio: "2026-08-01",
  dataFim: "2026-08-31",
  status: "todos",
  fornecedorId: "todos",
  formaPagamento: "todas",
  responsavel: "todos",
  busca: "",
};

export function useComprasFilters(compras) {
  const [filtros, setFiltros] = useState(initialFilters);

  const setFiltro = useCallback((chave, valor) => {
    setFiltros((prev) => ({ ...prev, [chave]: valor }));
  }, []);

  const limparFiltros = useCallback(() => setFiltros(initialFilters), []);

  const comprasFiltradas = useMemo(() => {
    return compras.filter((compra) => {
      const dataCompra = compra.data.slice(0, 10);
      if (filtros.dataInicio && dataCompra < filtros.dataInicio) return false;
      if (filtros.dataFim && dataCompra > filtros.dataFim) return false;
      if (filtros.status !== "todos" && compra.status !== filtros.status) return false;
      if (filtros.fornecedorId !== "todos" && String(compra.fornecedorId) !== String(filtros.fornecedorId)) return false;
      if (filtros.formaPagamento !== "todas" && compra.formaPagamento !== filtros.formaPagamento) return false;
      if (filtros.responsavel !== "todos" && compra.responsavel.toLowerCase() !== filtros.responsavel) return false;
      if (filtros.busca) {
        const termo = filtros.busca.toLowerCase();
        const alvo = `${compra.numero} ${compra.fornecedorNome}`.toLowerCase();
        if (!alvo.includes(termo)) return false;
      }
      return true;
    });
  }, [compras, filtros]);

  const filtrosAtivos = useMemo(() => {
    let count = 0;
    if (filtros.status !== "todos") count++;
    if (filtros.fornecedorId !== "todos") count++;
    if (filtros.formaPagamento !== "todas") count++;
    if (filtros.responsavel !== "todos") count++;
    return count;
  }, [filtros]);

  return { filtros, setFiltro, limparFiltros, comprasFiltradas, filtrosAtivos };
}
