import { motion } from 'framer-motion';

export default function IconButton({ icon: Icon, label, onClick, variant = 'ghost', className = '' }) {
  const variants = {
    ghost: 'bg-white/5 hover:bg-white/10 text-slate-300',
    primary: 'bg-violet-600 hover:bg-violet-500 text-white',
    outline: 'border border-white/10 hover:border-white/20 text-slate-300',
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      title={label}
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </motion.button>
  );
}
