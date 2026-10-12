import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Package,
} from 'lucide-react';

import StatusBadge from '../MovementsTable/StatusBadge';
import TypeBadge from '../MovementsTable/TypeBadge';
import { formatFullDateTime } from '../../utils/formatDate';

export default function DetailPanelHeader({
  movement,
  onClose,
  onBack,
}) {
  if (!movement) return null;

  const handleBack = onBack || onClose;

  return (
    <header className="-mt-7 -ml-8 -mr-8 border-b border-slate-200 bg-transparent">
      <div className="px-5 sm:px-6 lg:px-7">
        {/* Topo */}
        <div
          className="
            flex
            items-center
            justify-between
            border-slate-100
            py-3
          "
        >
          <button
            type="button"
            onClick={handleBack}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-lg
              px-2
              py-1.5
              text-xs
              font-medium
              text-slate-500
              transition-all
              duration-200
              hover:bg-emerald-50
              hover:text-emerald-600
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/30
            "
          >
            <ArrowLeft
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-200
                group-hover:-translate-x-0.5
              "
              strokeWidth={2}
            />

            <span>Voltar para movimentações</span>
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="
                rounded-lg
                p-2
                text-slate-400
                transition-all
                duration-200
                hover:bg-slate-100
                hover:text-slate-700
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-slate-400/30
              "
            >
              <span className="text-lg leading-none">×</span>
            </button>
          )}
        </div>

        {/* Conteúdo principal */}
        <div
          className="
            flex
            flex-col
            gap-4
            py-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Título */}
          <div className="flex min-w-0 items-start gap-3.5">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-emerald-200
                bg-emerald-50
                text-emerald-600
                shadow-[0_2px_8px_rgba(16,185,129,0.08)]
                transition-all
                duration-200
                hover:scale-105
                hover:bg-emerald-100
              "
            >
              <Package
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </div>

            <div className="min-w-0">
              <h3
                className="
                  text-xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-slate-900
                  sm:text-2xl
                "
              >
                Detalhes da movimentação
              </h3>

              <p
                className="
                  mt-1
                  max-w-xl
                  text-xs
                  leading-5
                  text-slate-500
                  sm:text-sm
                "
              >
                Consulte as informações e o histórico desta operação de estoque.
              </p>
            </div>
          </div>

          {/* Metadados */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
            {/* ID */}
            <span
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                px-2.5
                py-2
                font-mono
                text-[11px]
                font-semibold
                text-slate-600
              "
            >
              #{movement.id}
            </span>

            {/* Tipo */}
            <TypeBadge tipo={movement.tipo} />

            {/* Status */}
            <StatusBadge status={movement.status} />

            {/* Data */}
            <div
              className="
                flex
                min-w-[220px]
                items-center
                gap-3
                rounded-xl
                border
                border-blue-100
                bg-blue-50/40
                px-3
                py-2.5
                transition-all
                duration-200
                hover:border-blue-200
                hover:bg-blue-50/70
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-blue-100
                  bg-white
                  text-blue-600
                  shadow-sm
                "
              >
                <CalendarDays
                  className="h-3.5 w-3.5"
                  strokeWidth={1.8}
                />
              </span>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-slate-400
                    "
                  >
                    Registrada em
                  </p>

                  <Clock3
                    className="h-3 w-3 text-slate-300"
                    strokeWidth={2}
                  />
                </div>

                <p className="mt-0.5 whitespace-nowrap text-xs font-semibold text-slate-700">
                  {formatFullDateTime(movement.dataHora)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}