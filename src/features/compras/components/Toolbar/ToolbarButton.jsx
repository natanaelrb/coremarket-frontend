import { Loader2 } from "lucide-react";

export function ToolbarButton({ icon: Icon, label, primary = false, loading = false, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 disabled:opacity-60 ${
        primary
          ? "bg-violet-600 hover:bg-violet-500 text-white shadow-sm shadow-violet-600/30"
          : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10"
      }`}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Icon className="w-4 h-4" />}
      {label}
    </button>
  );
}
