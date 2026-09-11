import { useEffect, useState, useCallback } from 'react';
import { fetchOverviewData, fetchAdvancedData } from '../services/dashboardService';
import { DASHBOARD_TABS } from '../constants/dashboardTabs';

/**
 * Orquestra o carregamento de dados do Dashboard para a aba ativa,
 * refazendo a busca sempre que o período selecionado muda.
 */
export function useDashboard(activeTab, periodId) {
  const [overviewData, setOverviewData] = useState(null);
  const [advancedData, setAdvancedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (activeTab === DASHBOARD_TABS.OVERVIEW) {
        const data = await fetchOverviewData(periodId);
        setOverviewData(data);
      } else {
        const data = await fetchAdvancedData(periodId);
        setAdvancedData(data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, periodId]);

  useEffect(() => {
    load();
  }, [load]);

  return { overviewData, advancedData, isLoading, error, reload: load };
}
