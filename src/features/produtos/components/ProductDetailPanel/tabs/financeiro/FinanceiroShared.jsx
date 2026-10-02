export function FinanceiroKpi({
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

export function FinanceiroField({
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
        items-center
        gap-3
        rounded-xl
        border
        border-slate-100
        bg-slate-50
        px-3
        py-3
        transition-all
        duration-200
        hover:border-slate-200
        hover:bg-white

        dark:border-[#17375d]
        dark:bg-[#09213f]
        dark:hover:bg-[#0c2a4d]
      "
    >
      <div
        className={[
          "flex h-9 w-9 shrink-0 items-center justify-center",
          "rounded-lg border",
          "transition-transform duration-300",
          "group-hover:scale-105",
          iconClassName,
        ].join(" ")}
      >
        <Icon
          size={16}
          strokeWidth={2}
        />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[10px]
            font-medium
            text-slate-400
            dark:text-[#7290b4]
          "
        >
          {label}
        </p>

        <p
          className={[
            "mt-0.5 truncate text-xs font-bold",
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

export function FinanceiroSection({
  icon: Icon,
  title,
  children,
  iconClassName = "",
}) {
  return (
    <section
      className="
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-[0_2px_10px_rgba(15,23,42,0.025)]
        transition-all
        duration-300
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)]

        dark:border-[#17375d]
        dark:bg-[#061c38]
        dark:hover:border-[#24517f]
      "
    >
      <div className="mb-4 flex items-center gap-2.5">
        <div
          className={[
            "flex h-8 w-8 items-center justify-center",
            "rounded-lg border",
            iconClassName,
          ].join(" ")}
        >
          <Icon size={15} strokeWidth={2} />
        </div>

        <h3
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-wide
            text-slate-700
            dark:text-[#d7e5f7]
          "
        >
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
}