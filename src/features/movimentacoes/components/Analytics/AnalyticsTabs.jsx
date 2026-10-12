import { BarChart3, SlidersHorizontal } from 'lucide-react';
import { motion } from '../shared/motion';

const TABS = [
  {
    key: 'geral',
    label: 'Visão Geral',
    icon: BarChart3,
  },
  {
    key: 'avancado',
    label: 'Avançado',
    icon: SlidersHorizontal,
  },
];

export default function AnalyticsTabs({ activeView, onChange }) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-1
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        p-1
        shadow-sm
        shadow-slate-900/[0.03]
        dark:border-white/[0.06]
        dark:bg-[#10152A]
        dark:shadow-black/10
      "
    >
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeView === tab.key;

        return (
          <motion.button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            whileTap={{ scale: 0.97 }}
            className={`
              relative
              flex
              h-9
              items-center
              gap-2
              rounded-lg
              px-3
              text-xs
              font-semibold
              outline-none
              transition-all
              duration-100
              ${
                isActive
                  ? `
                    bg-white
                    text-emerald-600
                    shadow-sm
                    ring-1
                    ring-slate-200/80
                    dark:bg-[#1A223D]
                    dark:text-emerald-400
                    dark:ring-white/[0.06]
                  `
                  : `
                    text-slate-500
                    hover:bg-white/70
                    hover:text-slate-700
                    dark:text-slate-500
                    dark:hover:bg-white/[0.04]
                    dark:hover:text-slate-300
                  `
              }
            `}
          >
            <Icon
              className={`
                h-3.5
                w-3.5
                shrink-0
                transition-colors
                duration-100
                ${
                  isActive
                    ? 'text-emerald-500 dark:text-emerald-400'
                    : 'text-slate-400 dark:text-slate-500'
                }
              `}
              strokeWidth={2}
            />

            <span>{tab.label}</span>

            {isActive && (
              <span
                className="
                  absolute
                  bottom-0.5
                  left-1/2
                  h-0.5
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-emerald-500
                  dark:bg-emerald-400
                "
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}