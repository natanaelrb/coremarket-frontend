import { useMemo, useState } from 'react';
import { PAGAMENTOS_TABS, StatusPagamento } from '../constants/index.js';

/**
 * Owns the active-tab state and computes the badge counters (vencidos,
 * conciliação) shown next to certain tab labels.
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 */
export function usePagamentosTabs(pagamentos) {
  const [activeTabKey, setActiveTabKey] = useState('todos');

  const counts = useMemo(
    () => ({
      vencidos: pagamentos.filter((p) => p.status === StatusPagamento.VENCIDO).length,
      conciliacao: pagamentos.filter((p) => p.pendenteConciliacao).length,
    }),
    [pagamentos]
  );

  const tabs = useMemo(
    () =>
      PAGAMENTOS_TABS.map((tab) => ({
        ...tab,
        count: tab.countKey ? counts[tab.countKey] : undefined,
      })),
    [counts]
  );

  const activeTab = tabs.find((t) => t.key === activeTabKey) ?? tabs[0];

  return { tabs, activeTab, activeTabKey, setActiveTabKey };
}
