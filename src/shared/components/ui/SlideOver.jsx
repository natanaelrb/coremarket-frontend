// Painel lateral deslizante (drawer) reutilizável.
// Anima entrada/saída com translate-x + overlay com fade.

import { useEffect } from 'react';
import { X } from 'lucide-react';

export function SlideOver({
  open,
  onClose,
  width = 'w-[420px]',
  children,
}) {
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          `
            fixed inset-0 z-40
            bg-slate-950/25
            backdrop-blur-[1px]
            transition-opacity duration-300
          `,
          open
            ? 'opacity-100'
            : 'pointer-events-none opacity-0',
        ].join(' ')}
      />

      {/* Painel lateral */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Detalhes do produto"
        className={[
          `
            fixed right-0 top-0 z-50
            flex h-dvh flex-col
            overflow-hidden
            border-l
            border-slate-200/80
            bg-white
            shadow-2xl
            transition-transform
            duration-300
            ease-out
            dark:border-[#252a4a]
            dark:bg-[#0F1230]
          `,
          width,
          open
            ? 'translate-x-0'
            : 'translate-x-full',
        ].join(' ')}
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
      </aside>
    </>
  );
}

export function SlideOverCloseButton({ onClose }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Fechar painel"
      className="
        flex h-8 w-8
        shrink-0 items-center justify-center
        rounded-lg
        text-slate-400
        transition-colors duration-150
        hover:bg-slate-100
        hover:text-slate-700
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-500/50
        dark:hover:bg-white/5
        dark:hover:text-slate-200
      "
    >
      <X
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}