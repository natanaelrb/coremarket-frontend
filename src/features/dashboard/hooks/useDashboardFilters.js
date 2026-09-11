import { useMemo, useState } from 'react';
import { PERIOD_OPTIONS } from '../constants/dashboardTabs';

/**
 * Estado e helpers do painel de filtros reutilizável do Dashboard
 * (período + filtros adicionais, ex.: categoria, vendedor).
 */
export function useDashboardFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});

  const activeCount = useMemo(() => Object.keys(activeFilters).length, [activeFilters]);

  function setFilter(key, value) {
    setActiveFilters((prev) => ({ ...prev, [key]: value }));
  }

  function clearFilters() {
    setActiveFilters({});
  }

  return {
    isOpen,
    setIsOpen,
    activeFilters,
    activeCount,
    setFilter,
    clearFilters,
    periodOptions: PERIOD_OPTIONS,
  };
}
