import { Construction } from "lucide-react";

export default function EmConstrucao({ titulo }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
      <div className="w-14 h-14 bg-violet-50 dark:bg-violet-500/15 rounded-2xl flex items-center justify-center mb-4">
        <Construction
          size={24}
          className="text-violet-500 dark:text-violet-400"
        />
      </div>
      <h2 className="text-lg font-semibold text-slate-700 dark:text-[var(--sidebar-text)]/85">
        {titulo}
      </h2>
      <p className="text-sm text-slate-400 dark:text-[var(--sidebar-text)]/40 mt-1 max-w-sm">
        Esta página ainda não foi implementada no backend. Em breve estará
        disponível.
      </p>
    </div>
  );
}
