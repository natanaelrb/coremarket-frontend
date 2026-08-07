// Painel lateral deslizante (drawer) reutilizável, usado pelo ProductDetailPanel.
// Anima entrada/saída com translate-x + overlay com fade.
import { useEffect } from 'react';
import { X } from 'lucide-react';

export function SlideOver({ open, onClose, width = 'w-[420px]', children }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={[
          'fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className={[
          'fixed right-0 top-0 z-50 h-full overflow-y-auto border-l border-gray-100 bg-white shadow-2xl transition-transform duration-300 ease-out dark:border-gray-800 dark:bg-[#0F1230]',
          width,
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {children}
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
      className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-200"
    >
      <X size={16} />
    </button>
  );
}
