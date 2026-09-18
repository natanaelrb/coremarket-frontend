/** Shared card chrome (title + padded body) for the "Visão geral" tab cards. */
export function CardShell({ title, children, action }) {
  return (
    <div
      className="
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-[0_1px_2px_rgba(15,23,42,0.02),0_4px_12px_rgba(15,23,42,0.035)]
        transition-all
        duration-200
        hover:border-slate-300
        hover:shadow-[0_6px_18px_rgba(15,23,42,0.06)]
        dark:border-white/10
        dark:bg-zinc-900
      "
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold tracking-tight text-[#0f172a] dark:text-white">
          {title}
        </p>

        {action}
      </div>

      {children}
    </div>
  );
}