import { motion } from 'framer-motion';

const TABS = [
  { key: 'geral', label: 'Visão Geral' },
  { key: 'avancado', label: 'Avançado' },
];

export default function AnalyticsTabs({ activeView, onChange }) {
  return (
    <div className="inline-flex items-center rounded-lg bg-white/5 p-1">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`relative rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
            activeView === tab.key ? 'text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {activeView === tab.key && (
            <motion.span
              layoutId="analyticsTabIndicator"
              className="absolute inset-0 rounded-md bg-violet-600"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
