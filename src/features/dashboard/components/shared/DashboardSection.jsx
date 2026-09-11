/**
 * Cabeçalho padrão de seção (título + subtítulo + ação opcional, ex: "Ver todos").
 */
export default function DashboardSection({ title, subtitle, action, children, className = '' }) {
  return (
    <div className={className}>
      {(title || action) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">{title}</h3>}
            {subtitle && <p className="text-xs text-[var(--text-secondary)] mt-0.5">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
