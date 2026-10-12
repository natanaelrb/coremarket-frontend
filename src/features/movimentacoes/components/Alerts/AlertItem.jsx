import {
  AlertTriangle,
  AlertCircle,
  Info,
  ChevronRight,
} from 'lucide-react';

import { motion } from '../shared/motion';

const SEVERITY_CONFIG = {
  critica: {
    icon: AlertTriangle,
    iconColor: 'text-red-500 dark:text-red-400',
    iconBg: 'bg-red-50 dark:bg-red-500/10',
    badge: 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/20',
    label: 'Alta',
  },

  atencao: {
    icon: AlertCircle,
    iconColor: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-50 dark:bg-amber-500/10',
    badge: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20',
    label: 'Média',
  },

  info: {
    icon: Info,
    iconColor: 'text-blue-500 dark:text-blue-400',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    badge: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20',
    label: 'Baixa',
  },
};

export default function AlertItem({
  alert,
  delay = 0,
  onDetails,
}) {
  const config =
    SEVERITY_CONFIG[alert?.severidade] || SEVERITY_CONFIG.info;

  const Icon = config.icon;

  return (
    <motion.li
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.16, delay }}
      className="
        group
        flex
        min-h-[56px]
        items-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-3
        py-2.5
        transition-all
        duration-100
        hover:border-slate-300
        hover:bg-slate-100
        dark:border-[#1C3150]
        dark:bg-[#081A31]
        dark:hover:border-[#294463]
        dark:hover:bg-[#0B2039]
      "
    >
      {/* Ícone */}
      <div
        className={`
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          ${config.iconBg}
        `}
      >
        <Icon
          className={`h-4 w-4 ${config.iconColor}`}
          strokeWidth={2.2}
        />
      </div>

      {/* Conteúdo */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] font-semibold leading-5 text-slate-700 dark:text-slate-100">
          {alert?.mensagem || 'Alerta do sistema'}
        </p>

        <p className="truncate text-[10px] leading-4 text-slate-400 dark:text-slate-500">
          {alert?.descricao ||
            alert?.detalhe ||
            'Verifique os dados e tome as ações necessárias.'}
        </p>
      </div>

      {/* Prioridade */}
      <span
        className={`
          hidden
          shrink-0
          rounded-lg
          border
          px-2.5
          py-1
          text-[10px]
          font-semibold
          sm:inline-flex
          ${config.badge}
        `}
      >
        {alert?.prioridade || config.label}
      </span>

      {/* Horário */}
      <span className="hidden w-[64px] shrink-0 text-right text-[10px] font-medium text-slate-400 dark:text-slate-500 md:block">
        {alert?.horario || alert?.hora || 'Agora'}
      </span>

      {/* Ação */}
      <button
        type="button"
        onClick={() => onDetails?.(alert)}
        aria-label="Ver detalhes do alerta"
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          text-slate-400
          transition-all
          duration-100
          hover:bg-slate-200
          hover:text-slate-700
          dark:text-slate-500
          dark:hover:bg-white/[0.05]
          dark:hover:text-slate-200
        "
      >
        <ChevronRight
          className="
            h-4
            w-4
            transition-transform
            duration-100
            group-hover:translate-x-0.5
          "
          strokeWidth={2}
        />
      </button>
    </motion.li>
  );
}