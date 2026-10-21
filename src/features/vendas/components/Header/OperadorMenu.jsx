import { useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";

export function OperadorMenu({ operador }) {
  const [aberto, setAberto] = useState(false);

  const iniciais = (operador.nome || "Operador")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative min-w-0 flex-1">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-haspopup="menu"
        className="flex min-h-[56px] w-full min-w-0 items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-200 hover:bg-green-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/30 dark:hover:bg-green-950/20"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-700 ring-1 ring-green-100 dark:bg-green-950/40 dark:text-green-400 dark:ring-green-900/50">
          {iniciais}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-xs font-medium text-cm-text-muted">
            Operador
          </span>

          <span className="mt-1 block truncate text-sm font-semibold leading-tight text-cm-text">
            {operador.nome}
          </span>
        </span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-cm-text-muted transition-transform duration-200 ${
            aberto ? "rotate-180" : ""
          }`}
        />
      </button>

      {aberto && (
        <>
          <button
            type="button"
            aria-label="Fechar menu do operador"
            className="fixed inset-0 z-20 cursor-default"
            onClick={() => setAberto(false)}
          />

          <div
            role="menu"
            className="absolute right-0 top-full z-30 mt-2 w-52 origin-top-right animate-scale-in rounded-xl border border-cm-border bg-white p-1.5 shadow-xl shadow-black/10 dark:bg-cm-surface"
          >
            <button
              type="button"
              role="menuitem"
              onClick={() => setAberto(false)}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-cm-text-muted transition-colors hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-950/30 dark:hover:text-green-400"
            >
              <User className="h-4 w-4 shrink-0" />
              Meu perfil
            </button>

            <div className="my-1 border-t border-cm-border" />

            <button
              type="button"
              role="menuitem"
              onClick={() => setAberto(false)}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              Encerrar turno
            </button>
          </div>
        </>
      )}
    </div>
  );
}
