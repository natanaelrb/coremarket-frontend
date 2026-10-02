export function StockRow({
  icon: Icon,
  label,
  value,
  iconClassName = "",
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        border-b border-slate-100
        px-3
        py-2.5
        last:border-b-0

        dark:border-[#12365a]
      "
    >
      <div
        className={[
          "flex h-7 w-7 shrink-0 items-center justify-center",
          "rounded-lg",
          iconClassName,
        ].join(" ")}
      >
        <Icon size={14} strokeWidth={2} />
      </div>

      <span
        className="
          flex-1
          text-[11px]
          font-medium
          text-slate-600
          dark:text-[#a9c0db]
        "
      >
        {label}
      </span>

      <span
        className="
          text-[12px]
          font-bold
          text-slate-800
          dark:text-[#e3edfc]
        "
      >
        {value}
      </span>
    </div>
  );
}