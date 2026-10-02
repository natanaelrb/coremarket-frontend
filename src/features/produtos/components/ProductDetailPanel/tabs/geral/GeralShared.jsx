export function GeralCard({
  children,
  className = "",
}) {
  return (
    <section
      className={[
        "group rounded-xl border",
        "border-slate-200 bg-white",
        "shadow-[0_2px_10px_rgba(15,23,42,0.025)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-[1px]",
        "hover:border-slate-300",
        "hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]",
        "dark:border-[#17375d]",
        "dark:bg-[#061c38]",
        "dark:hover:border-[#24517f]",
        "dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

export function GeralSectionTitle({
  icon: Icon,
  title,
  iconClassName = "",
}) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <div
        className={[
          "flex h-7 w-7 items-center justify-center",
          "rounded-lg border",
          "transition-all duration-300",
          "group-hover:scale-105",
          iconClassName,
        ].join(" ")}
      >
        <Icon
          size={14}
          strokeWidth={2.1}
          className="transition-transform duration-300 group-hover:rotate-[-3deg]"
        />
      </div>

      <h3
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.04em]
          text-slate-700
          dark:text-[#d7e5f7]
        "
      >
        {title}
      </h3>
    </div>
  );
}

export function GeralField({
  icon: Icon,
  label,
  value,
  iconClassName = "",
  valueClassName = "",
}) {
  return (
    <div
      className="
        group/field
        flex min-w-0 items-center gap-3
        rounded-xl
        transition-all duration-200
      "
    >
      <div
        className={[
          "flex h-10 w-10 shrink-0 items-center justify-center",
          "rounded-xl border",
          "transition-all duration-300",
          "group-hover/field:scale-105",
          "group-hover/field:shadow-sm",
          iconClassName,
        ].join(" ")}
      >
        <Icon
          size={17}
          strokeWidth={1.9}
          className="
            transition-transform
            duration-300
            group-hover/field:scale-110
          "
        />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[10px]
            font-medium
            text-slate-400
            transition-colors
            duration-200
            dark:text-[#7290b4]
          "
        >
          {label}
        </p>

        <p
          className={[
            "mt-0.5 truncate text-xs font-semibold",
            "text-slate-700 dark:text-[#e3edfc]",
            valueClassName,
          ].join(" ")}
        >
          {value ?? "—"}
        </p>
      </div>
    </div>
  );
}

export function GeralPriceField({
  icon: Icon,
  label,
  value,
  iconClassName = "",
  valueClassName = "",
}) {
  return (
    <div
      className="
        group/price
        flex min-w-0 items-center gap-3
      "
    >
      <div
        className={[
          "flex h-10 w-10 shrink-0 items-center justify-center",
          "rounded-xl border",
          "transition-all duration-300",
          "group-hover/price:scale-105",
          "group-hover/price:shadow-sm",
          iconClassName,
        ].join(" ")}
      >
        <Icon
          size={17}
          strokeWidth={1.9}
          className="
            transition-transform
            duration-300
            group-hover/price:scale-110
          "
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
            "mt-0.5 text-sm font-semibold",
            "text-slate-800 dark:text-[#e7f0ff]",
            valueClassName,
          ].join(" ")}
        >
          {value}
        </p>
      </div>
    </div>
  );
}