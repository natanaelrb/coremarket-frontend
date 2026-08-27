import { ChevronRight } from "lucide-react";

export default function PageHeader({
  icon: Icon,
  title,
  subtitle,
  breadcrumb = [],
  action = null,
  children,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

      {/* Lado esquerdo */}
      <div className="flex items-start gap-4">

        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <Icon size={24} strokeWidth={2} />
          </div>
        )}

        <div className="space-y-1">

          {breadcrumb.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-white/40">
              {breadcrumb.map((item, index) => (
                <div key={item} className="flex items-center gap-1">
                  {index > 0 && <ChevronRight size={12} />}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-white/50">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Lado direito */}
      {(action || children) && (
        <div className="flex items-center gap-3">
          {children}
          {action}
        </div>
      )}
    </div>
  );
}