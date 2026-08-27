import { motion } from 'framer-motion';
import AnimatedNumber from '../shared/AnimatedNumber';
import { formatPercentual } from "../utils/formatQuantity";

// Card individual genérico de estatística — usado pelas variantes Entradas/Saídas.
export default function StatCard({
  icon: Icon, iconBg, iconColor, title, value, unitLabel,
  variacao, tendencia, delay = 0, children,
}) {
  const tendenciaColor = tendencia === 'up' ? 'text-emerald-400' : 'text-red-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -2 }}
      className="flex-1 min-w-[220px] rounded-2xl border border-white/5 bg-[#141833] p-5 shadow-lg shadow-black/10"
    >
      <div className="mb-3 flex items-center gap-2">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-slate-300">{title}</span>
      </div>

      <div className="mb-1 flex items-baseline gap-1">
        <AnimatedNumber value={value} className="text-2xl font-bold text-white" />
        {unitLabel && <span className="text-sm text-slate-400">{unitLabel}</span>}
      </div>

      {variacao !== undefined && (
        <p className={`mb-2 text-xs font-medium ${tendenciaColor}`}>
          {formatPercentual(variacao)} em relação ao período anterior
        </p>
      )}

      {children}
    </motion.div>
  );
}
