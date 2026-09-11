import { useState, useCallback } from 'react';
import { DEFAULT_PERIOD_ID } from '../constants/dashboardTabs';

/**
 * Controla o período selecionado no seletor de datas do Dashboard.
 */
export function useDashboardPeriod() {
  const [periodId, setPeriodId] = useState(DEFAULT_PERIOD_ID);
  const [customRange, setCustomRange] = useState(null);

  const selectPeriod = useCallback((id, range = null) => {
    setPeriodId(id);
    setCustomRange(range);
  }, []);

  return { periodId, customRange, selectPeriod };
}
