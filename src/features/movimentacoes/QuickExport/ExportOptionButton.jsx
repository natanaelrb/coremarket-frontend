import { motion } from 'framer-motion';

export default function ExportOptionButton({ label, icon: Icon, colorClass, onClick, isExporting }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={isExporting}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      className={`flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors disabled:opacity-60 ${colorClass}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </motion.button>
  );
}
