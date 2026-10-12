import { Bell, ChevronRight } from 'lucide-react';

import AlertItem from './AlertItem';
import { motion } from '../shared/motion';

export default function AlertsPanel({
  alerts = [],
  onViewAll,
  onAlertDetails,
}) {
  const totalAlerts = alerts.length;

  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        shadow-slate-900/[0.03]
        transition-all
        duration-200
        hover:border-slate-300
        dark:border-white/[0.06]
        dark:bg-[#141833]
        dark:shadow-black/10
        dark:hover:border-white/10
      "
    >
      {/* Cabeçalho */}
      <div
        className="
          flex
          flex-col
          gap-3
          border-b
          border-slate-200
          px-5
          py-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          dark:border-white/[0.06]
        "
      >
        {/* Título */}
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-emerald-50
              text-emerald-600
              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          >
            <Bell
              className="h-4 w-4"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Alertas e Avisos
            </h3>

            <p className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
              Atenção aos principais eventos do período.
            </p>
          </div>
        </div>

        {/* Ações */}
        <div className="flex shrink-0 items-center gap-4">
          {/* Contador */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-red-200
              bg-red-50
              px-2.5
              py-1
              text-[10px]
              font-semibold
              text-red-600
              dark:border-red-500/20
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 dark:bg-red-400" />

            {totalAlerts}{' '}
            {totalAlerts === 1 ? 'alerta' : 'alertas'}
          </span>

          {/* Ver todos */}
          <motion.button
            type="button"
            onClick={onViewAll}
            whileTap={{ scale: 0.97 }}
            className="
              group
              flex
              items-center
              gap-1
              rounded-lg
              px-1
              py-1
              text-[13px]
              font-semibold
              text-green-600
              transition-colors
              duration-100
              hover:text-green-700
              dark:text-green-400
              dark:hover:text-green-300
            "
          >
            <span>Ver todos</span>

            <ChevronRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-100
                group-hover:translate-x-0.5
              "
              strokeWidth={2}
            />
          </motion.button>
        </div>
      </div>

      {/* Lista */}
      <div className="p-4">
        {alerts.length > 0 ? (
          <ul className="space-y-2">
            {alerts.map((alert, index) => (
              <AlertItem
                key={alert.id}
                alert={alert}
                delay={index * 0.025}
                onDetails={onAlertDetails}
              />
            ))}
          </ul>
        ) : (
          <div
            className="
              flex
              min-h-[120px]
              items-center
              justify-center
              rounded-xl
              border
              border-dashed
              border-slate-200
              bg-slate-50
              px-4
              text-center
              dark:border-white/[0.06]
              dark:bg-[#10152A]
            "
          >
            <div>
              <Bell className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" />

              <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                Nenhum alerta no período.
              </p>

              <p className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-600">
                Tudo parece estar funcionando normalmente.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}