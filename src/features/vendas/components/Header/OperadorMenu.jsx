import { useState } from "react";
import {
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";

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
    <div className="relative flex h-full min-h-[150px] min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-white/10 dark:bg-[#15182D]">

     {/* Detalhe lateral */}
      <div className="absolute inset-y-0 left-0 w-1 bg-blue-600" />

      <div className="flex flex-1 flex-col justify-between p-3 pl-5">

        {/* Informações principais */}
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-haspopup="menu"
          className="flex w-full min-w-0 items-center gap-3 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-xl font-bold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            {iniciais}
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-cm-text-muted">
              Operador
            </span>

            <span className="mt-1.5 block truncate text-xl font-bold tracking-tight text-cm-text">
              {operador.nome}
            </span>
          </span>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800 transition-colors hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400">
            <ChevronDown
              size={19}
              className={`transition-transform duration-200 ${
                aberto ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>

        {/* Divisor */}
        <div className="my-3 border-t border-gray-100 dark:border-white/10" />

        {/* Informações inferiores */}
        <div className="flex items-center gap-3">
          <User
            size={22}
            strokeWidth={1.8}
            className="shrink-0 text-cm-text"
          />

          <div className="min-w-0">
            <span className="block text-xs text-cm-text-muted">
              Usuário logado
            </span>

            <span className="mt-0.5 block truncate text-sm font-medium text-cm-text">
              Responsável pelo atendimento
            </span>
          </div>
        </div>
      </div>

      {/* Menu suspenso */}
      {aberto && (
        <>
          <button
            type="button"
            aria-label="Fechar menu do operador"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setAberto(false)}
          />

          <div
            role="menu"
            className="absolute right-4 top-[85px] z-50 w-56 origin-top-right animate-scale-in rounded-xl border border-cm-border bg-white p-1.5 shadow-xl shadow-slate-900/10 dark:bg-cm-surface dark:shadow-black/30"
          >
            <div className="border-b border-cm-border px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cm-text-muted">
                Conta do operador
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-cm-text">
                {operador.nome}
              </p>
            </div>

            <div className="py-1">
              <button
                type="button"
                role="menuitem"
                onClick={() => setAberto(false)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-cm-text-muted transition-colors hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
              >
                <User size={17} />
                Meu perfil
              </button>

              <div className="my-1 border-t border-cm-border" />

              <button
                type="button"
                role="menuitem"
                onClick={() => setAberto(false)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
              >
                <LogOut size={17} />
                Encerrar turno
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
