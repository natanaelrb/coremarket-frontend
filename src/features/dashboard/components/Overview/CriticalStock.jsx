import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import { classificarUrgenciaEstoque } from '../../utils/dashboardCalculations';

const URGENCIA_COLOR = {
  CRITICO: '#ef4444',
  ATENCAO: '#f59e0b',
  OK: '#22c55e',
};

/** Lista de produtos com estoque próximo/abaixo do mínimo, com barra de criticidade. */
export default function CriticalStock({ data, onViewAll }) {
  return (
    <DashboardCard className="p-5 animate-card-in rounded-lg hover:-translate-y-1 hover:shadow-md">
      <DashboardSection
        title="Estoque crítico"
        action={
          <button
            type="button"
            onClick={onViewAll}
            className="text-xs font-medium text-[var(--color-brand-600,#16a34a)] hover:underline"
          >
            Ver todos
          </button>
        }
      />

      <ul className="space-y-3.5">
        {data.map((item) => {
          const percentual = item.minimo
            ? Math.min(100, (item.quantidade / item.minimo) * 100)
            : 100;

          const urgencia = classificarUrgenciaEstoque(
            item.quantidade <= 2
              ? 1
              : item.quantidade <= 6
                ? 5
                : 10
          );

          const color = URGENCIA_COLOR[urgencia];

          return (
            <li key={item.produto}>
              {/* Produto + quantidade */}
              <div className="mb-1 flex items-center justify-between gap-3">
                
                <div className="flex min-w-0 items-center gap-2.5">
                  {/* Foto real do produto */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                    {item.imagemUrl ? (
                      <img
                        src={item.imagemUrl}
                        alt={item.produto}
                        className="h-full w-full object-contain p-1"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full rounded-lg bg-[var(--bg-surface-alt)]" />
                    )}
                  </div>

                  {/* Nome */}
                  <span className="truncate text-sm text-[var(--text-primary)]">
                    {item.produto}
                  </span>
                </div>

                {/* Quantidade */}
                <span className="shrink-0 font-medium text-[var(--text-primary)]">
                  {item.quantidade} un.
                </span>
              </div>

              {/* Barra de criticidade */}
              <div className="ml-[46px] h-1.5 overflow-hidden rounded-full bg-[var(--bg-surface-alt)]">
                <div
                  className="h-full rounded-full transition-[width] duration-700 ease-out"
                  style={{
                    width: `${percentual}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </DashboardCard>
  );
}