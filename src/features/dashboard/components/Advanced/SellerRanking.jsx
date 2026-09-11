import { Trophy } from 'lucide-react';
import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import {
  formatCurrency,
  formatNumber,
} from '../../utils/dashboardFormatters';

const MEDAL_COLOR = {
  1: '#eab308',
  2: '#9ca3af',
  3: '#b45309',
};

/**
 * Ranking de vendedores — depende da entidade Vendedor/Usuário no backend.
 * Enquanto essa estrutura não existe, o componente já fica pronto para
 * receber os dados reais via dashboardService (ver mockRankingVendedores).
 */
export default function SellerRanking({ data, onViewAll }) {
  return (
    <DashboardCard className="h-[310px] p-3.5 animate-card-in flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <DashboardSection
        title="Ranking de vendedores"
        subtitle="Desempenho por vendedor no período"
      />

      <div className="mt-2 flex-1 overflow-hidden">
        {/* Cabeçalho */}
        <div className="grid grid-cols-[22px_1fr_90px_58px] items-center rounded-md bg-[var(--bg-surface-alt)] px-2 py-1.5 text-[10px] text-[var(--text-secondary)]">
          <span>#</span>
          <span>Vendedor</span>
          <span className="text-right">Vendas (R$)</span>
          <span className="text-right">Nº de vendas</span>
        </div>

        {/* Ranking */}
        <ul>
          {data.map((seller) => (
            <li
              key={seller.posicao}
              className="
                grid
                grid-cols-[22px_1fr_90px_58px]
                items-center
                gap-0
                border-t
                border-[var(--border-subtle)]
                px-2
                py-1.5
                text-xs
                transition-colors
                hover:bg-[var(--bg-hover)]
              "
            >
              <span className="flex items-center">
                {seller.posicao <= 3 ? (
                  <Trophy
                    className="h-3.5 w-3.5"
                    style={{
                      color: MEDAL_COLOR[seller.posicao],
                    }}
                    aria-hidden="true"
                  />
                ) : (
                  <span className="text-[var(--text-tertiary)]">
                    {seller.posicao}
                  </span>
                )}
              </span>

              <span className="truncate text-[var(--text-primary)]">
                {seller.nome}
              </span>

              <span className="whitespace-nowrap text-right font-medium text-[var(--text-primary)]">
                {formatCurrency(seller.faturamento)}
              </span>

              <span className="whitespace-nowrap text-right text-[var(--text-secondary)]">
                {formatNumber(seller.numeroVendas)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onViewAll}
        className="
          mt-2
          h-7
          w-full
          shrink-0
          rounded-md
          border
          border-[var(--border-subtle)]
          text-[10px]
          font-medium
          text-[var(--color-brand-600,#16a34a)]
          transition-colors
          hover:bg-[var(--bg-hover)]
        "
      >
        Ver ranking completo
      </button>
    </DashboardCard>
  );
}