import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import { DIAS_SEMANA } from '../../constants/dashboardConstants';
import { normalizarIntensidade } from '../../utils/dashboardCalculations';

/** Retorna a cor de fundo de uma célula do heatmap a partir de uma intensidade 0–1. */
function intensityColor(intensity) {
  const alpha = 0.12 + intensity * 0.78;
  return `rgba(5, 150, 105, ${alpha.toFixed(2)})`;
}

/** Mapa de calor da intensidade de vendas por semana x dia da semana. */
export default function SalesHeatmap({ matrix }) {
  const flat = matrix.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);

  return (
    <DashboardCard className="h-[250px] p-3.5 animate-card-in flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <DashboardSection
        title="Heatmap de vendas"
        subtitle={`Intensidade de vendas por dia — últimas ${matrix.length} semanas`}
      />

      <div className="mt-1 flex-1 overflow-hidden">
        <table className="w-full text-[10px]">
          <thead>
            <tr>
              <th className="w-10" />

              {DIAS_SEMANA.map((dia) => (
                <th
                  key={dia}
                  className="pb-1 font-medium text-[var(--text-secondary)]"
                >
                  {dia}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {matrix.map((week, weekIndex) => (
              <tr key={weekIndex}>
                <td className="pr-1 text-[var(--text-tertiary)]">
                  S{weekIndex + 1}
                </td>

                {week.map((value, dayIndex) => (
                  <td key={dayIndex} className="px-1 py-0.5">
                    <div
                      className="h-[19px] w-full rounded-[5px] transition-transform hover:scale-105"
                      style={{
                        backgroundColor: intensityColor(
                          normalizarIntensidade(value, min, max)
                        ),
                      }}
                      title={`${DIAS_SEMANA[dayIndex]}, semana ${weekIndex + 1}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-1.5 flex items-center justify-center gap-2 text-[9px] text-[var(--text-tertiary)]">
        <span>Menos vendas</span>

        <div className="flex h-2 w-24 overflow-hidden rounded-full">
          {[0.15, 0.35, 0.55, 0.75, 0.95].map((v) => (
            <div
              key={v}
              className="flex-1"
              style={{
                backgroundColor: intensityColor(v),
              }}
            />
          ))}
        </div>

        <span>Mais vendas</span>
      </div>
    </DashboardCard>
  );
}