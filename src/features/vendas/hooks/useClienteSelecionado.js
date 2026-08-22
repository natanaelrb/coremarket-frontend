import { useMemo, useRef, useState } from 'react';
import { MOCK_CLIENTES } from '../data/mockClientes.js';

/**
 * Gerencia a busca e seleção do cliente vinculado à venda atual.
 * TODO(api): trocar filtro local por GET /api/clientes/buscar?termo={termo}
 */
export function useClienteSelecionado() {
  const [termoBusca, setTermoBusca] = useState('');
  const [cliente, setCliente] = useState(null);
  const inputRef = useRef(null);

  const sugestoes = useMemo(() => {
    const query = termoBusca.trim().toLowerCase();
    if (!query) return [];
    return MOCK_CLIENTES.filter((c) => c.nome.toLowerCase().includes(query)).slice(0, 5);
  }, [termoBusca]);

  function selecionarCliente(clienteSelecionado) {
    setCliente(clienteSelecionado);
    setTermoBusca('');
  }

  function removerCliente() {
    setCliente(null);
  }

  function focar() {
    inputRef.current?.focus();
  }

  return {
    termoBusca,
    setTermoBusca,
    sugestoes,
    cliente,
    selecionarCliente,
    removerCliente,
    inputRef,
    focar,
  };
}

