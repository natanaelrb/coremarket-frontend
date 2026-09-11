import { useRef, useState } from 'react';
import { MoreHorizontal, Eye, Download, RotateCcw } from 'lucide-react';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import useClickOutside from "../../../../shared/hooks/useClickOutside.js";

/**
 * "..." row actions dropdown: ver detalhes, baixar comprovante, estornar.
 * @param {{ pagamento: object, onVerDetalhes: () => void, onBaixarComprovante: () => void, onEstornar: () => void }} props
 */
export function RowActionsMenu({ pagamento, onVerDetalhes, onBaixarComprovante, onEstornar }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="relative inline-block" ref={ref}>
      <IconButton icon={MoreHorizontal} label="Mais ações" onClick={() => setOpen((o) => !o)} />
      {open ? (
        <div className="absolute right-0 z-10 mt-1 w-48 animate-scale-in overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-800 dark:bg-slate-900">
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
      ) : null}
    </div>
  );
}

function MenuItem({ icon: Icon, label, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
        danger
          ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30'
          : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
