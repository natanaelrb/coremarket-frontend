export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-slate-400 dark:text-slate-500" />
        </div>
      )}
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">{title}</h3>
      {description && <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 max-w-sm">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
