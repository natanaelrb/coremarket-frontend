// Card individual de KPI. Puramente apresentacional — recebe todos os dados via props.
export function KpiCard({
  icon: Icon,
  iconBgClass,
  iconColorClass,
  label,
  value,
  helperText,
  helperTextClass = 'text-slate-400 dark:text-slate-500',
}) {
  return (
    <div
      className="
        group relative isolate overflow-hidden
        flex min-w-0 items-start gap-3
        rounded-2xl border border-slate-200/80
        bg-white p-4
        shadow-[0_2px_8px_rgba(15,23,42,0.03)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        dark:border-white/[0.07]
        dark:bg-[#151c2b]
        dark:shadow-none
        dark:hover:border-white/[0.14]
        dark:hover:bg-[#192235]
        dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
      "
    >
      {/* Brilho sutil no hover */}
      <div
        className="
          pointer-events-none absolute -right-8 -top-8
          h-24 w-24 rounded-full
          bg-slate-100/70 blur-2xl
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          dark:bg-white/[0.04]
        "
        aria-hidden="true"
      />

      {/* Ícone */}
      <div
        className={`
          relative flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl
          ring-1 ring-inset ring-black/[0.03]
          transition-transform duration-300 ease-out
          group-hover:scale-105 group-hover:rotate-[-3deg]
          motion-reduce:transform-none
          ${iconBgClass}
        `}
      >
        <Icon
          size={19}
          strokeWidth={2}
          className={iconColorClass}
        />
      </div>

      {/* Informações */}
      <div className="relative min-w-0 flex-1">
        <p
          className="
            truncate text-[11px] font-semibold uppercase
            tracking-[0.04em]
            text-slate-500 dark:text-slate-400
          "
          title={label}
        >
          {label}
        </p>

        <p
          className="
            mt-1 truncate text-xl font-bold leading-tight
            tracking-[-0.025em]
            text-slate-900
            dark:text-white
          "
          title={String(value)}
        >
          {value}
        </p>

        {helperText && (
          <p
            className={`
              mt-1 truncate text-[11px] font-medium
              leading-tight
              ${helperTextClass}
            `}
            title={helperText}
          >
            {helperText}
          </p>
        )}
      </div>

      {/* Linha de destaque discreta no hover */}
      <div
        className="
          pointer-events-none absolute inset-x-4 bottom-0
          h-px origin-left scale-x-0
          bg-gradient-to-r from-emerald-500/60 to-transparent
          transition-transform duration-300
          group-hover:scale-x-100
        "
        aria-hidden="true"
      />
    </div>
  );
}