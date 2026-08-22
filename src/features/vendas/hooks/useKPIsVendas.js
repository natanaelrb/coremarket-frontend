import { useEffect, useState } from 'react';
import { MOCK_KPIS, MOCK_CAIXA, MOCK_OPERADOR } from '../data/mockKPIs.js';

/**
 * Carrega os indicadores (KPIs) exibidos nos cartões do topo da página de vendas.
 * TODO(api): substituir por GET /api/vendas/kpis?data=hoje
 */
export function useKPIsVendas() {
  const [kpis, setKpis] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;
    setCarregando(true);
    const timer = setTimeout(() => {
      if (!ativo) return;
      setKpis(MOCK_KPIS);
      setCarregando(false);
    }, 450);
    return () => {
      ativo = false;
      clearTimeout(timer);
    };
  }, []);

  return {
    kpis,
    carregando,
    caixa: MOCK_CAIXA,
    operador: MOCK_OPERADOR,
  };
}

