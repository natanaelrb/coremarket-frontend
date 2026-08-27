// Prepara os datasets usados pelos três gráficos da página (Recharts):
// evolução temporal, distribuição por fornecedor e distribuição por status.
import { useMemo } from "react";
import { agruparComprasPorFornecedor } from "../utils/compraCalculations";
import { getStatusConfig, getStatusLabel } from "../utils/statusHelpers";
import { formatShortDate } from "../utils/formatters";

const CHART_PALETTE = ["#7C3AED", "#0EA5E9", "#10B981", "#F59E0B", "#EC4899", "#94A3B8"];

export function useComprasCharts(compras) {
  const evolucaoData = useMemo(() => {
    const porDia = new Map();
    compras.forEach((c) => {
      const dia = c.data.slice(0, 10);
      porDia.set(dia, (porDia.get(dia) || 0) + c.total);
    });
    return Array.from(porDia.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([dia, total]) => ({ dia: formatShortDate(dia), total: Math.round(total) }));
  }, [compras]);

  const fornecedorData = useMemo(() => {
    const agrupado = agruparComprasPorFornecedor(compras);
    const total = agrupado.reduce((acc, f) => acc + f.total, 0);
    const top5 = agrupado.slice(0, 5);
    const outros = agrupado.slice(5).reduce((acc, f) => acc + f.total, 0);
    const dataset = top5.map((f, i) => ({
      name: f.fornecedor,
      value: Math.round(f.total),
      percent: total ? Math.round((f.total / total) * 100) : 0,
      color: CHART_PALETTE[i % CHART_PALETTE.length],
    }));
    if (outros > 0) {
      dataset.push({ name: "Outros", value: Math.round(outros), percent: total ? Math.round((outros / total) * 100) : 0, color: CHART_PALETTE[5] });
    }
    return { dataset, total: Math.round(total) };
  }, [compras]);

  const statusData = useMemo(() => {
    const grupos = new Map();
    compras.forEach((c) => grupos.set(c.status, (grupos.get(c.status) || 0) + 1));
    const total = compras.length;
    const dataset = Array.from(grupos.entries())
      .map(([status, count]) => ({
        name: getStatusLabel(status),
        value: count,
        percent: total ? Math.round((count / total) * 100) : 0,
        color: getStatusConfig(status).chartColor,
      }))
      .sort((a, b) => b.value - a.value);
    return { dataset, total };
  }, [compras]);

  return { evolucaoData, fornecedorData, statusData };
}
