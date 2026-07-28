import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({
  aberto,
  fechar,
  titulo,
  subtitulo,
  children,
  size = "md",
}) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") fechar();
    }
    if (aberto) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [aberto, fechar]);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  if (!aberto) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-3xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-[2px] animate-fade-in"
        onClick={fechar}
      />

      <div
        className={`relative w-full ${sizes[size]} bg-white dark:bg-surface-dark border border-transparent dark:border-slate-200 dark:border-white/10 rounded-2xl shadow-xl flex flex-col max-h-[90vh] animate-scale-in`}
      >
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-slate-100 dark:border-slate-200 dark:border-white/10">
          <div>
            {titulo && (
              <h2 className="text-base font-semibold text-slate-800 dark:text-[var(--sidebar-text)]/90">
                {titulo}
              </h2>
            )}
            {subtitulo && (
              <p className="text-sm text-slate-400 dark:text-[var(--sidebar-text)]/40 mt-0.5">
                {subtitulo}
              </p>
            )}
          </div>
          <button
            onClick={fechar}
            className="text-slate-400 dark:text-[var(--sidebar-text)]/40 hover:text-slate-600 dark:hover:text-[var(--sidebar-text)]/80 transition w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-white/8"
          >
            <X size={16} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
