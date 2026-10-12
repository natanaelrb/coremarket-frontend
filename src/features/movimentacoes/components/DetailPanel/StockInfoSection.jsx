import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Package,
  TrendingUp,
} from 'lucide-react';

import DetailSectionCard from './DetailSectionCard';

export default function StockInfoSection({ movement }) {
  const quantidade = Number(movement?.quantidade ?? 0);
  const estoqueAnterior = Number(movement?.estoqueAnterior ?? 0);
  const estoqueDepois = Number(movement?.estoqueDepois ?? 0);
  const unidade = movement?.unidade || 'UN';

  const isPositive = quantidade > 0;
  const isNegative = quantidade < 0;
  const isNeutral = quantidade === 0;

  const movementConfig = isPositive
    ? {
        label: 'Entrada',
        color: 'text-emerald-600',
        valueColor: 'text-emerald-700',
        bg: 'bg-emerald-50/70',
        hoverBg: 'hover:bg-emerald-50',
        border: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-300',
        iconBg: 'bg-emerald-100',
        iconBorder: 'border-emerald-200',
        dot: 'bg-emerald-500',
        shadow: 'hover:shadow-[0_8px_24px_rgba(16,185,129,0.10)]',
        Icon: ArrowUpRight,
      }
    : isNegative
      ? {
          label: 'Saída',
          color: 'text-red-600',
          valueColor: 'text-red-700',
          bg: 'bg-red-50/70',
          hoverBg: 'hover:bg-red-50',
          border: 'border-red-200',
          hoverBorder: 'hover:border-red-300',
          iconBg: 'bg-red-100',
          iconBorder: 'border-red-200',
          dot: 'bg-red-500',
          shadow: 'hover:shadow-[0_8px_24px_rgba(239,68,68,0.10)]',
          Icon: ArrowDownRight,
        }
      : {
          label: 'Sem alteração',
          color: 'text-slate-500',
          valueColor: 'text-slate-700',
          bg: 'bg-slate-50',
          hoverBg: 'hover:bg-slate-100',
          border: 'border-slate-200',
          hoverBorder: 'hover:border-slate-300',
          iconBg: 'bg-slate-100',
          iconBorder: 'border-slate-200',
          dot: 'bg-slate-400',
          shadow: 'hover:shadow-sm',
          Icon: Package,
        };

  const QuantityIcon = movementConfig.Icon;

  return (
    <DetailSectionCard title="Estoque">
      <div className="space-y-4">
        {/* Fluxo principal */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          {/* Estoque anterior */}
          <div
            className="
              group
              rounded-2xl
              border
              border-blue-100
              bg-blue-50/50
              p-4
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-blue-200
              hover:bg-blue-50
              hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)]
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-blue-500/80">
                  Estoque anterior
                </p>

                <p className="mt-2 text-2xl font-bold tracking-tight text-blue-700">
                  {estoqueAnterior}
                </p>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-100
                  bg-white
                  text-blue-500
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover:scale-105
                  group-hover:border-blue-200
                  group-hover:bg-blue-50
                "
              >
                <Package className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
            </div>

            <p className="mt-2 text-xs text-blue-600/65">
              {unidade} disponíveis antes da operação
            </p>
          </div>

          {/* Conector */}
          <div className="hidden items-center justify-center md:flex">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-300
                shadow-sm
                transition-all
                duration-200
                hover:border-slate-300
                hover:text-slate-500
              "
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </span>
          </div>

          {/* Movimentação */}
          <div
            className={`
              group
              rounded-2xl
              border
              p-4
              transition-all
              duration-200
              hover:-translate-y-0.5
              ${movementConfig.bg}
              ${movementConfig.border}
              ${movementConfig.hoverBorder}
              ${movementConfig.hoverBg}
              ${movementConfig.shadow}
            `}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p
                  className={`
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    ${movementConfig.color}
                  `}
                >
                  Movimentação
                </p>

                <p
                  className={`
                    mt-2
                    text-2xl
                    font-bold
                    tracking-tight
                    ${movementConfig.valueColor}
                  `}
                >
                  {quantidade > 0 ? '+' : ''}
                  {quantidade}
                </p>
              </div>

              <span
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  bg-white
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover:scale-105
                  ${movementConfig.iconBorder}
                  ${movementConfig.color}
                `}
              >
                <QuantityIcon className="h-5 w-5" strokeWidth={2} />
              </span>
            </div>

            <p className="mt-2 text-xs font-medium text-slate-500">
              {movementConfig.label} de {unidade}
            </p>
          </div>

          {/* Conector */}
          <div className="hidden items-center justify-center md:flex">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-300
                shadow-sm
                transition-all
                duration-200
                hover:border-slate-300
                hover:text-slate-500
              "
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </span>
          </div>

          {/* Estoque atual */}
          <div
            className="
              group
              rounded-2xl
              border
              border-violet-200
              bg-violet-50/60
              p-4
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-violet-300
              hover:bg-violet-50
              hover:shadow-[0_8px_24px_rgba(139,92,246,0.09)]
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-violet-500/80">
                  Estoque atual
                </p>

                <p className="mt-2 text-2xl font-bold tracking-tight text-violet-700">
                  {estoqueDepois}
                </p>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-violet-200
                  bg-white
                  text-violet-600
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover:scale-105
                  group-hover:bg-violet-50
                "
              >
                <TrendingUp className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
            </div>

            <p className="mt-2 text-xs font-medium text-violet-600/70">
              {unidade} disponíveis após a operação
            </p>
          </div>
        </div>

        {/* Resumo */}
        <div
          className={`
            flex
            flex-col
            gap-3
            rounded-xl
            border
            bg-white
            px-4
            py-3
            transition-all
            duration-200
            sm:flex-row
            sm:items-center
            sm:justify-between
            ${
              isPositive
                ? 'border-emerald-100 hover:border-emerald-200'
                : isNegative
                  ? 'border-red-100 hover:border-red-200'
                  : 'border-slate-200 hover:border-slate-300'
            }
          `}
        >
          <div className="flex items-center gap-2.5">
            <span
              className={`
                h-2
                w-2
                rounded-full
                ${movementConfig.dot}
              `}
            />

            <span className="text-xs font-semibold text-slate-500">
              Impacto no estoque
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold">
            <span className="text-blue-600">
              {estoqueAnterior} {unidade}
            </span>

            <ArrowRight className="h-3.5 w-3.5 text-slate-300" />

            <span className={movementConfig.valueColor}>
              {estoqueDepois} {unidade}
            </span>

            {!isNeutral && (
              <span
                className={`
                  ml-1
                  rounded-md
                  px-1.5
                  py-0.5
                  text-[10px]
                  font-bold
                  ${
                    isPositive
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-red-50 text-red-600'
                  }
                `}
              >
                {isPositive ? 'ENTRADA' : 'SAÍDA'}
              </span>
            )}
          </div>
        </div>
      </div>
    </DetailSectionCard>
  );
}