import { motion } from 'framer-motion';

const LABELS = {
  ENTRADA: 'Entrada',
  SAIDA: 'Saída',
  AJUSTE: 'Ajuste',
  TRANSFERENCIA: 'Transferência',
};

export default function ModalTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex items-center gap-1 border-b border-white/5 px-5 pt-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative px-3 pb-3 text-sm font-medium transition-colors ${
            activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          {LABELS[tab]}
          {activeTab === tab && (
            <motion.span
              layoutId="newMovementTabIndicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-violet-500"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
