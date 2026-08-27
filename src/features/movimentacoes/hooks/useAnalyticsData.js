import { useState, useEffect } from 'react';
import { MOCK_ENTRADAS_SAIDAS, MOCK_TOP_PRODUTOS, MOCK_MOTIVOS_PERDA, MOCK_HORARIOS_MOVIMENTACAO } from '../data/mockAnalytics';

// TODO(api): GET /api/estoque/movimentacoes/analises?periodoInicio=&periodoFim=
export function useAnalyticsData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState('geral');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData({
        entradasSaidas: MOCK_ENTRADAS_SAIDAS,
        topProdutos: MOCK_TOP_PRODUTOS,
        motivosPerda: MOCK_MOTIVOS_PERDA,
        horarios: MOCK_HORARIOS_MOVIMENTACAO,
      });
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return { data, isLoading, activeView, setActiveView };
}
