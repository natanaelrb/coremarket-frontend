/** Shared card chrome (title + padded body) for the "Visão geral" tab cards. */
export function CardShell({ title, children, action }) {
  return (
    <div className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-white light:text-slate-900">{title}</p>
        {action}
      </div>
      {children}
    </div>
  )
}
