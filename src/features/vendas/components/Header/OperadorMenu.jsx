import { useState } from 'react';
import { ChevronDown, LogOut, User } from 'lucide-react';

/**
 * Exibe o operador logado com avatar e um menu suspenso simples.
 * @param {{ operador: { nome: string, avatarUrl?: string | null } }} props
 */
export function OperadorMenu({ operador }) {
  const [aberto, setAberto] = useState(false);
  const iniciais = operador.nome
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        className="flex items-center gap-2.5 rounded-lg border border-cm-border bg-cm-surface px-3 py-2 transition-colors hover:bg-cm-surface-hover"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cm-accent-soft text-xs font-semibold text-cm-accent">
          {iniciais}
        </span>
        <div className="text-left">
          <p className="text-[11px] text-cm-text-faint leading-tight">Operador</p>
          <p className="text-sm font-medium text-cm-text leading-tight">{operador.nome}</p>
        </div>
        <ChevronDown className={`h-4 w-4 text-cm-text-faint transition-transform ${aberto ? 'rotate-180' : ''}`} />
      </button>

      {aberto && (
        <div className="absolute right-0 top-full z-20 mt-2 w-48 animate-scale-in rounded-lg border border-cm-border bg-cm-surface p-1.5 shadow-lg shadow-black/30">
          <button
            type="button"
            className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-cm-text-muted transition-colors hover:bg-cm-surface-hover hover:text-cm-text"
          >
            <User className="h-4 w-4" /> Meu perfil
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-cm-danger transition-colors hover:bg-cm-danger-soft"
          >
            <LogOut className="h-4 w-4" /> Encerrar turno
          </button>
        </div>
      )}
    </div>
  );
}

