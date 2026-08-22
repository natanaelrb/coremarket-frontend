import { useState } from 'react';

const FILTROS_INICIAIS = {
  periodo: 'HOJE',
  status: 'TODOS',
  pagamento: 'TODOS',
  cliente: '',
  operador: 'TODOS',
};

/**
 * Gerencia o estado dos filtros aplicados à tabela de histórico de vendas.
 */
export function useHistoricoFiltros() {
  const [filtros, setFiltros] = useState(FILTROS_INICIAIS);

  function atualizarFiltro(chave, valor) {
    setFiltros((prev) => ({ ...prev, [chave]: valor }));
  }

  function limparFiltros() {
    setFiltros(FILTROS_INICIAIS);
  }

  return { filtros, atualizarFiltro, limparFiltros };
}

