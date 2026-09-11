export default function PageHeader({
  title,
  subtitle,
  action = null,
  children,
}) {
  if (!title && !subtitle && !action && !children) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 border-b border-slate-200/70 pb-6 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
      
      {(title || subtitle) && (
        <div>
          {title && (
            <h2 className="text-xl font-semibold tracking-tight text-slate-800 dark:text-white">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {(action || children) && (
        <div className="flex items-center gap-3">
          {children}
          {action}
        </div>
      )}

    </div>
  );
}