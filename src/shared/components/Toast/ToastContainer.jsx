// Container de notificações toast, posicionado no canto inferior direito.
import { CheckCircle2, XCircle, Info } from 'lucide-react';

const ICONS = { success: CheckCircle2, error: XCircle, info: Info };
const COLORS = {
  success: 'text-emerald-500',
  error: 'text-red-500',
  info: 'text-blue-500',
};

export function ToastContainer({ toasts, onDismiss }) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-2">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.type] ?? Info;
        return (
          <div
            key={toast.id}
            onClick={() => onDismiss(toast.id)}
            className="flex w-72 cursor-pointer items-start gap-2.5 rounded-xl border border-gray-100 bg-white p-3.5 shadow-lg shadow-gray-200/60 animate-in slide-in-from-bottom-2 fade-in duration-200 dark:border-gray-800 dark:bg-[#151936] dark:shadow-black/40"
          >
            <Icon size={18} className={`mt-0.5 shrink-0 ${COLORS[toast.type]}`} />
            <p className="text-sm text-gray-700 dark:text-gray-200">{toast.message}</p>
          </div>
        );
      })}
    </div>
  );
}
