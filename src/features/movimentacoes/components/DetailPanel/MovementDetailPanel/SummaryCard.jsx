import { motion } from 'framer-motion';

export default function SummaryCard({
  label,
  value,
  description,
  icon,
  tone = 'green',
}) {
  const tones = {
    green: {
      iconBg: 'bg-emerald-50',
      iconBorder: 'border-emerald-100',
      iconText: 'text-emerald-600',
      value: 'text-slate-800',
      hover: 'hover:border-emerald-200',
    },

    red: {
      iconBg: 'bg-red-50',
      iconBorder: 'border-red-100',
      iconText: 'text-red-600',
      value: 'text-red-700',
      hover: 'hover:border-red-200',
    },

    blue: {
      iconBg: 'bg-blue-50',
      iconBorder: 'border-blue-100',
      iconText: 'text-blue-600',
      value: 'text-slate-800',
      hover: 'hover:border-blue-200',
    },

    amber: {
      iconBg: 'bg-amber-50',
      iconBorder: 'border-amber-100',
      iconText: 'text-amber-600',
      value: 'text-slate-800',
      hover: 'hover:border-amber-200',
    },
  };

  const currentTone = tones[tone] || tones.green;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`
        relative
        min-h-[104px]
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        px-4
        py-3.5
        shadow-[0_2px_10px_rgba(15,23,42,0.04)]
        transition-all
        duration-200
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.07)]
        ${currentTone.hover}
      `}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div
            className={`
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              ${currentTone.iconBg}
              ${currentTone.iconBorder}
              ${currentTone.iconText}
            `}
          >
            {icon}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
            {label}
          </p>

          <p
            className={`
              mt-1.5
              truncate
              text-[15px]
              font-semibold
              leading-tight
              ${currentTone.value}
            `}
          >
            {value}
          </p>

          {description && (
            <p className="mt-1 truncate text-[11px] text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}