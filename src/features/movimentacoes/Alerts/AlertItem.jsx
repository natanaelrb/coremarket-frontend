import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const SEVERITY_CONFIG = {
  critica: { icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-500/10' },
  atencao: { icon: AlertCircle, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  info: { icon: Info, color: 'text-blue-400', bg: 'bg-blue-500/10' },
};

export default function AlertItem({ alert, delay = 0 }) {
  const config = SEVERITY_CONFIG[alert.severidade] || SEVERITY_CONFIG.info;
  const Icon = config.icon;

  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`flex items-start gap-3 rounded-lg px-3 py-2.5 ${config.bg}`}
    >
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${config.color}`} />
      <p className="flex-1 text-sm text-slate-300">{alert.mensagem}</p>
      <button className="shrink-0 text-xs font-medium text-violet-400 hover:underline">Ver detalhes</button>
    </motion.li>
  );
}
