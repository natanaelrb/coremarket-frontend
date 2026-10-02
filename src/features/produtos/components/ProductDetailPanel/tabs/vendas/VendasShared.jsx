export function VendaKpi({
  icon: Icon,
  label,
  value,
  helper,
  iconClassName = "",
  valueClassName = "",
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
        <Icon
          size={17}
          strokeWidth={2}
        />
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
          className={[
            "mt-0.5 truncate text-[15px] font-bold",
            "text-slate-800 dark:text-[#e3edfc]",
            valueClassName,
          ].join(" ")}
        >
          {value}
        </p>

        {helper && (
          <p
            className="
              mt-0.5
              truncate
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

export function VendaStatusBadge() {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-1.5
        rounded-full
        bg-emerald-50
        px-2
        py-1
        text-[9px]
        font-bold
        text-emerald-600

        dark:bg-emerald-500/10
        dark:text-emerald-300
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      Concluída
    </span>
  );
}