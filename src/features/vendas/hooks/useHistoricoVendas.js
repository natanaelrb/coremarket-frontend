import { useEffect, useMemo, useState } from "react";

import { listarVendas } from "../services/vendaStorage.js";

import {
  filtrarHistorico,
  filtrarPorPeriodo,
  paginar,
} from "../utils/historicoFilters.js";

import { useHistoricoFiltros } from "./useHistoricoFiltros.js";
import { usePagination } from "./usePagination.js";

/**
 * Gerencia o histórico de vendas:
 * - carregamento das vendas persistidas;
 * - aplicação dos filtros;
 * - paginação dos resultados.
 *
 * TODO(api): substituir listarVendas por GET /api/vendas.
 */
export function useHistoricoVendas() {
  const [vendas, setVendas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const {
    filtros,
    atualizarFiltro,
    limparFiltros,
  } = useHistoricoFiltros();

  useEffect(() => {
    let ativo = true;

    const timer = setTimeout(() => {
      if (!ativo) return;

      const vendasSalvas = listarVendas();

      setVendas(vendasSalvas);
      setCarregando(false);
    }, 450);

    return () => {
      ativo = false;
      clearTimeout(timer);
    };
  }, []);

  const vendasFiltradas = useMemo(() => {
    const porPeriodo = filtrarPorPeriodo(vendas, filtros.periodo);

    return filtrarHistorico(porPeriodo, filtros);
  }, [vendas, filtros]);

  const paginacao = usePagination(vendasFiltradas.length, 5);

  const vendasPaginadas = useMemo(
    () =>
      paginar(
        vendasFiltradas,
        paginacao.pagina,
        paginacao.tamanhoPagina,
      ),
    [
      vendasFiltradas,
      paginacao.pagina,
      paginacao.tamanhoPagina,
    ],
  );

  return {
    vendas: vendasPaginadas,
    totalFiltrado: vendasFiltradas.length,
    totalGeral: vendas.length,
    carregando,
    filtros,
    atualizarFiltro,
    limparFiltros,
    paginacao,
  };
}
