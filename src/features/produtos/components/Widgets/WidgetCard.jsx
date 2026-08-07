// Shell comum a todos os widgets do rodapé: título + link "Ver todos/relatório" + corpo.
export function WidgetCard({ title, actionLabel, onAction, children }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-[#151936]">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        {actionLabel && (
          <button
            onClick={onAction}
            className="text-xs font-medium text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            {actionLabel}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
