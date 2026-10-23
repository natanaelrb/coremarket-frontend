import { useRef, useState } from 'react';
import {
  MoreHorizontal,
  Eye,
  Download,
  RotateCcw,
} from 'lucide-react';

import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import useClickOutside from '../../../../shared/hooks/useClickOutside.js';

/**
 * "..." row actions dropdown: ver detalhes, baixar comprovante, estornar.
 */
export function RowActionsMenu({
  pagamento,
  onVerDetalhes,
  onBaixarComprovante,
  onEstornar,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="relative inline-flex" ref={ref}>
      <IconButton
        icon={MoreHorizontal}
        label="Mais ações"
        onClick={() => setOpen((current) => !current)}
      />

      {open && (
        <div
          className="
            absolute right-0 top-full z-20 mt-1
            w-48 overflow-hidden rounded-xl
            border border-slate-200 bg-white p-1
            shadow-lg shadow-slate-900/10
            animate-scale-in
            dark:border-white/10 dark:bg-slate-900
          "
          role="menu"
          aria-label="Ações do pagamento"
        >
          <MenuItem
            icon={Eye}
            label="Ver detalhes"
            onClick={() => {
              setOpen(false);
              onVerDetalhes();
            }}
          />

          <MenuItem
            icon={Download}
            label="Baixar comprovante"
            onClick={() => {
              setOpen(false);
              onBaixarComprovante();
            }}
          />

          <div
            className="my-1 border-t border-slate-100 dark:border-white/[0.08]"
            aria-hidden="true"
          />

          <MenuItem
            icon={RotateCcw}
            label="Estornar"
            danger
            onClick={() => {
              setOpen(false);
              onEstornar();
            }}
          />
        </div>
      )}
    </div>
  );
}

function MenuItem({ icon: Icon, label, onClick, danger = false }) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={`
        flex w-full items-center gap-2.5
        rounded-lg px-3 py-2.5
        text-left text-sm font-medium
        transition-colors duration-150
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-green-500/40
        ${
          danger
            ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10'
            : 'text-slate-700 hover:bg-green-50 hover:text-green-700 dark:text-slate-200 dark:hover:bg-green-500/10 dark:hover:text-green-400'
        }
      `}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}