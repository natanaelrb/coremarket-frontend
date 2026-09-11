/**
 * Configurações reutilizáveis para os gráficos Recharts do módulo Dashboard.
 * Centraliza cores, grid, eixos e tooltip para evitar repetição por componente.
 */

export const CHART_COLORS = {
  vendas: '#3b82f6',
  compras: '#ef4444',
  lucro: '#22c55e',
  brand: '#7c3aed',
  categorias: ['#3b82f6', '#22c55e', '#8b5cf6', '#f59e0b', '#9ca3af'],
};

export function getGridConfig(isDark) {
  return {
    stroke: isDark ? '#23274a' : '#e6e8f0',
    strokeDasharray: '3 3',
    vertical: false,
  };
}

export function getAxisConfig(isDark) {
  return {
    stroke: isDark ? '#6b6f8f' : '#9ca3af',
    tick: { fill: isDark ? '#9497b3' : '#6b7280', fontSize: 12 },
    tickLine: false,
    axisLine: false,
  };
}

export function getTooltipContentStyle(isDark) {
  return {
    backgroundColor: isDark ? '#171a38' : '#ffffff',
    border: `1px solid ${isDark ? '#23274a' : '#e6e8f0'}`,
    borderRadius: 10,
    color: isDark ? '#f3f4f9' : '#10121c',
    fontSize: 13,
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  };
}

export const CHART_ANIMATION_DURATION = 600;
