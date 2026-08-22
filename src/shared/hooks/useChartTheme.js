// Hook compartilhado que resolve as cores dos gráficos (Recharts) de acordo com o tema ativo.
import { useTheme } from "../contexts/ThemeContext.jsx";

const PALETTE = {
  light: {
    grid: "#E5E7EB",
    text: "#6B7280",
    tooltipBg: "#FFFFFF",
    tooltipBorder: "#E5E7EB",
    accent: "#7C3AED",
    danger: "#EF4444",
    warning: "#F59E0B",
    success: "#10B981",
    info: "#3B82F6",
  },
  dark: {
    grid: "#242847",
    text: "#9CA3AF",
    tooltipBg: "#151936",
    tooltipBorder: "#242847",
    accent: "#8B5CF6",
    danger: "#F87171",
    warning: "#FBBF24",
    success: "#34D399",
    info: "#60A5FA",
  },
};

export function useChartTheme() {
  const { theme } = useTheme();
  return PALETTE[theme] ?? PALETTE.light;
}
