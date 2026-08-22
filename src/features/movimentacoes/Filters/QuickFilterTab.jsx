import { motion } from 'framer-motion';

export default function QuickFilterTab({ label, count, sign, isActive, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`relative flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
        isActive ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
      }`}
    >
      {label}
      {sign && <span className={isActive ? 'text-white/80' : 'text-slate-500'}>{sign}</span>}
      <span className={`rounded-full px-1.5 py-0.5 text-xs ${isActive ? 'bg-white/20' : 'bg-white/10 text-slate-400'}`}>
        {count}
      </span>
      {isActive && (
        <motion.span
          layoutId="quickFilterActiveIndicator"
          className="absolute inset-0 -z-10 rounded-lg bg-violet-600"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
}
