import { useTheme } from "../../../../shared/contexts/ThemeContext";

/**
 * Hook que retorna cores apropriadas para gráficos Recharts
 * de acordo com o tema atual (claro/escuro).
 *
 * Recharts não herda CSS automaticamente — então os valores
 * de stroke/fill dos eixos, grid e tooltip precisam ser
 * recalculados conforme o tema muda.
 */
export function useChartTheme() {
  const { tema } = useTheme();
  const dark = tema === "dark";

  return {
    dark,
    axisColor: dark ? "#7A7FA3" : "#94A3B8",
    gridColor: dark ? "rgba(255,255,255,0.06)" : "#F1F5F9",
    cursorFill: dark ? "rgba(255,255,255,0.04)" : "#F8F7FF",
    tooltipBg: dark ? "#1C1F3B" : "#FFFFFF",
    tooltipBorder: dark ? "rgba(255,255,255,0.1)" : "#F1F5F9",
    tooltipText: dark ? "#A8ACC9" : "#94A3B8",
    // Paleta principal — consistente nos dois temas, ajustada para contraste
    violet: dark ? "#8B5CF6" : "#7C3AED",
    violetSoft: dark ? "rgba(139,92,246,0.18)" : "#EDE9FE",
    red: dark ? "#F87171" : "#EF4444",
    amber: dark ? "#FBBF24" : "#F59E0B",
    green: dark ? "#34D399" : "#10B981",
    blue: dark ? "#60A5FA" : "#3B82F6",
  };
}
