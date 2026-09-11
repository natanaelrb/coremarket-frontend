/**
 * Definição das abas do Dashboard e dos períodos de filtro disponíveis.
 */

export const DASHBOARD_TABS = {
  OVERVIEW: 'overview',
  ADVANCED: 'advanced',
};

export const DASHBOARD_TAB_ITEMS = [
  { id: DASHBOARD_TABS.OVERVIEW, label: 'Visão Geral' },
  { id: DASHBOARD_TABS.ADVANCED, label: 'Avançado' },
];

export const PERIOD_OPTIONS = [
  { id: 'today', label: 'Hoje' },
  { id: 'last7', label: 'Últimos 7 dias' },
  { id: 'last30', label: 'Últimos 30 dias' },
  { id: 'thisMonth', label: 'Este mês' },
  { id: 'lastMonth', label: 'Mês anterior' },
  { id: 'last3Months', label: 'Últimos 3 meses' },
  { id: 'last12Months', label: 'Últimos 12 meses' },
  { id: 'custom', label: 'Período personalizado' },
];

export const DEFAULT_PERIOD_ID = 'last30';
