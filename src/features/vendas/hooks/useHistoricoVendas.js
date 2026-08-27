import { useEffect, useMemo, useState } from 'react';
import { MOCK_VENDAS } from '../data/mockVendas.js';
import { filtrarHistorico, filtrarPorPeriodo, paginar } from '../utils/historicoFilters.js';
import { useHistoricoFiltros } from './useHistoricoFiltros.js';
import { usePagination } from './usePagination.js';

/**
 * Orquestra a listagem de histórico de vendas: busca (mock), aplica filtros
 * e delega a paginação para usePagination.
 * TODO(api): substituir por GET /api/vendas (paginado, ver tableColumns.js)
 */
export function useHistoricoVendas() {
  const [vendas, setVendas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const { filtros, atualizarFiltro, limparFiltros } = useHistoricoFiltros();

  useEffect(() => {
    let ativo = true;
    setCarregando(true);
    const timer = setTimeout(() => {
      if (!ativo) return;
      setVendas(MOCK_VENDAS);
      setCarregando(false);
    }, 400);
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
    () => paginar(vendasFiltradas, paginacao.pagina, paginacao.tamanhoPagina),
    [vendasFiltradas, paginacao.pagina, paginacao.tamanhoPagina],
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

