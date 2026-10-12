import { ChevronRight } from 'lucide-react';

import { motion } from '../shared/motion';

export default function ExportOptionButton({
  label,
  icon: Icon,
  onClick,
  isExporting,
  config,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={isExporting}
      whileTap={{ scale: 0.98 }}
      className={`
        group
        relative
        flex
        min-h-[88px]
        w-full
        items-center
        gap-3
        rounded-xl
        border
        bg-white
        px-3.5
        py-3
        text-left
        outline-none
        transition-all
        duration-150
        hover:-translate-y-0.5
        hover:shadow-md
        disabled:pointer-events-none
        disabled:opacity-60
        dark:bg-[#10152A]
        ${config?.border || 'border-slate-200'}
        ${config?.darkBorder || ''}
      `}
    >
      {/* Ícone */}
      <div
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${config?.iconBg || 'bg-slate-100 text-slate-600'}
          ${config?.darkIconBg || ''}
        `}
      >
        {Icon && (
          <Icon
            className="h-5 w-5"
            strokeWidth={2}
          />
        )}
      </div>

      {/* Informações */}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
          {label}
        </p>

        <p className="mt-0.5 truncate text-[10px] font-medium text-slate-400 dark:text-slate-500">
          {config?.description || 'Exportar dados'}
        </p>
      </div>

      {/* Seta */}
      <span
        className={`
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          transition-all
          duration-150
          group-hover:translate-x-0.5
          ${config?.arrow || 'bg-slate-100 text-slate-500'}
          ${config?.darkArrow || ''}
        `}
      >
        <ChevronRight
          className="h-3.5 w-3.5"
          strokeWidth={2}
        />
      </span>

      {/* Loading */}
      {isExporting && (
        <span
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            rounded-xl
            bg-white/80
            backdrop-blur-[1px]
            dark:bg-[#10152A]/80
          "
        >
          <span
            className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-slate-200
              border-t-emerald-500
            "
          />
        </span>
      )}
    </motion.button>
  );
}