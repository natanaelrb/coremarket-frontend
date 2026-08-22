import { PDV_SHORTCUTS } from '../../constants/shortcuts.js';

/**
 * Lista de atalhos de teclado do PDV, exibida na barra lateral.
 */
export function AtalhosPDV() {
  return (
    <div className="rounded-xl border border-cm-border bg-cm-surface p-4">
      <p className="mb-3 text-xs font-semibold text-cm-text-faint">Atalhos do PDV</p>
      <ul className="space-y-2">
        {PDV_SHORTCUTS.map((shortcut) => (
          <li key={shortcut.action} className="flex items-center justify-between text-xs">
            <span className="rounded bg-cm-surface-hover px-1.5 py-0.5 font-mono font-semibold text-cm-text-muted">
              {shortcut.key}
            </span>
            <span className="text-cm-text-faint">{shortcut.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

