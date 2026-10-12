import { useMemo, useState } from 'react';

import { countByType } from '../utils/filterMovements';

// Controla as abas rápidas acima da tabela.
//
// Os ajustes continuam sendo um único tipo no backend (AJUSTE),
// mas são separados visualmente em positivos e negativos
// com base na quantidade movimentada.

export function useQuickFilterTabs(movements) {
  const [activeTab, setActiveTab] = useState('TODAS');

  const counts = useMemo(
    () => countByType(movements),
    [movements]
  );

  const adjustmentCounts = useMemo(() => {
    return movements.reduce(
      (acc, movement) => {
        if (movement.tipo !== 'AJUSTE') {
          return acc;
        }

        if (movement.quantidade > 0) {
          acc.positivo += 1;
        }

        if (movement.quantidade < 0) {
          acc.negativo += 1;
        }

        return acc;
      },
      {
        positivo: 0,
        negativo: 0,
      }
    );
  }, [movements]);

  const tabs = useMemo(
    () => [
      {
        key: 'TODAS',
        label: 'Todas',
        count: movements.length,
      },

      {
        key: 'ENTRADA',
        label: 'Entrada',
        count: counts.ENTRADA || 0,
      },

      {
        key: 'SAIDA',
        label: 'Saída',
        count: counts.SAIDA || 0,
      },

      {
        key: 'AJUSTE_POSITIVO',
        label: 'Ajuste',
        count: adjustmentCounts.positivo,
        sign: '+',
      },

      {
        key: 'AJUSTE_NEGATIVO',
        label: 'Ajuste',
        count: adjustmentCounts.negativo,
        sign: '-',
      },

      {
        key: 'TRANSFERENCIA',
        label: 'Transferência',
        count: counts.TRANSFERENCIA || 0,
      },

      {
        key: 'DEVOLUCAO_CLIENTE',
        label: 'Devolução',
        count: counts.DEVOLUCAO_CLIENTE || 0,
      },

      {
        key: 'PERDA',
        label: 'Perda',
        count: counts.PERDA || 0,
      },

      {
        key: 'INVENTARIO',
        label: 'Inventário',
        count: counts.INVENTARIO || 0,
      },
    ],
    [movements.length, counts, adjustmentCounts]
  );

  const filterValue = activeTab.startsWith('AJUSTE')
    ? 'AJUSTE'
    : activeTab;

  return {
    tabs,
    activeTab,
    setActiveTab,
    filterValue,
  };
}