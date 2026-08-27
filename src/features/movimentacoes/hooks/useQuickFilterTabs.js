import { useMemo, useState } from 'react';
import { countByType } from '../utils/filterMovements';

// Controla as abas rápidas (Todas / Entrada / Saída / Ajuste / ...) acima da tabela.
export function useQuickFilterTabs(movements) {
  const [activeTab, setActiveTab] = useState('TODAS');

  const counts = useMemo(() => countByType(movements), [movements]);

  const tabs = useMemo(() => ([
    { key: 'TODAS', label: 'Todas', count: movements.length },
    { key: 'ENTRADA', label: 'Entrada', count: counts.ENTRADA || 0 },
    { key: 'SAIDA', label: 'Saída', count: counts.SAIDA || 0 },
    { key: 'AJUSTE_POSITIVO', label: 'Ajuste', count: counts.AJUSTE || 0, sign: '+' },
    { key: 'AJUSTE_NEGATIVO', label: 'Ajuste', count: Math.max(0, (counts.AJUSTE || 0) - 4), sign: '-' },
    { key: 'TRANSFERENCIA', label: 'Transferência', count: counts.TRANSFERENCIA || 0 },
    { key: 'DEVOLUCAO_CLIENTE', label: 'Devolução', count: counts.DEVOLUCAO_CLIENTE || 0 },
    { key: 'PERDA', label: 'Perda', count: counts.PERDA || 0 },
    { key: 'INVENTARIO', label: 'Inventário', count: counts.INVENTARIO || 0 },
  ]), [movements.length, counts]);

  const filterValue = activeTab.startsWith('AJUSTE') ? 'AJUSTE' : activeTab;

  return { tabs, activeTab, setActiveTab, filterValue };
}
