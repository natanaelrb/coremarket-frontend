export function LoteCard({
  icon: Icon,
  label,
  value,
  helper,
  iconClassName = "",
}) {
  return (
    <div
      className="
        group
        flex
        min-w-0
        items-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-white
        px-3
        py-3
        transition-all
        duration-300
        hover:-translate-y-[1px]
        hover:border-slate-300
        hover:shadow-[0_8px_20px_rgba(15,23,42,0.05)]

        dark:border-[#17375d]
        dark:bg-[#061c38]
        dark:hover:border-[#24517f]
      "
    >
      <div
        className={[
          "flex h-10 w-10 shrink-0 items-center justify-center",
          "rounded-xl border",
          "transition-transform duration-300",
          "group-hover:scale-105",
          iconClassName,
        ].join(" ")}
      >
        <Icon size={18} strokeWidth={2} />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[10px]
            font-medium
            text-slate-500
            dark:text-[#7290b4]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-0.5
            truncate
            text-[15px]
            font-bold
            text-slate-800
            dark:text-[#e3edfc]
          "
        >
          {value}
        </p>

        {helper && (
          <p
            className="
              mt-0.5
              text-[9px]
              text-slate-400
              dark:text-[#7290b4]
            "
          >
            {helper}
          </p>
        )}
      </div>
    </div>
  );
}

export function LoteStatusBadge({ status }) {
  const styles = {
    success: `
      bg-emerald-50
      text-emerald-600
      dark:bg-emerald-500/10
      dark:text-emerald-300
    `,

    warning: `
      bg-amber-50
      text-amber-600
      dark:bg-amber-500/10
      dark:text-amber-300
    `,

    danger: `
      bg-red-50
      text-red-600
      dark:bg-red-500/10
      dark:text-red-300
    `,

    neutral: `
      bg-slate-100
      text-slate-500
      dark:bg-slate-500/10
      dark:text-slate-300
    `,
  };

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5",
        "rounded-full",
        "px-2.5 py-1",
        "text-[9px] font-bold",
        styles[status?.type] || styles.neutral,
      ].join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      {status?.label || "—"}
    </span>
  );
}