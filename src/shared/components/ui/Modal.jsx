import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn.js';
import IconButton from '../actions/IconButton.jsx';

/**
 * Centered modal dialog with backdrop, escape-to-close and scroll lock.
 * @param {{ open: boolean, onClose: () => void, title: string, subtitle?: string, children: import('react').ReactNode, footer?: import('react').ReactNode, size?: 'md'|'lg' }} props
 */
export function Modal({ open, onClose, title, subtitle, children, footer, size = 'md' }) {
  useEffect(() => {
    if (!open) return undefined;
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-fade-in dark:bg-slate-950/70"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative w-full animate-scale-in rounded-2xl bg-white shadow-2xl dark:bg-slate-900',
          size === 'lg' ? 'max-w-2xl' : 'max-w-md'
        )}
      >
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
            {subtitle ? (
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
            ) : null}
          </div>
          <IconButton icon={X} label="Fechar" onClick={onClose} />
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">{children}</div>
        {footer ? (
          <div className="flex items-center justify-end gap-2 border-t border-slate-100 px-6 py-4 dark:border-slate-800">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
