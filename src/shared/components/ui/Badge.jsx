const TONES = {
  green:
    "bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",

  red:
    "bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",

  amber:
    "bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",

  blue:
    "bg-blue-50 text-blue-700 border-blue-200/80 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",

  violet:
    "bg-violet-50 text-violet-700 border-violet-200/80 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20",

  teal:
    "bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20",

  neutral:
    "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
};

const DOTS = {
  green: "bg-emerald-500",
  red: "bg-rose-500",
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  teal: "bg-teal-500",
  neutral: "bg-slate-400",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
  textClass,
  bgClass,
  borderClass,
  dotClass,
}) {
  const customClasses = [bgClass, textClass, borderClass]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none tracking-[0.01em] transition-colors",
        customClasses || TONES[tone] || TONES.neutral,
        className,
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 shrink-0 rounded-full",
          dotClass || DOTS[tone] || DOTS.neutral,
        ].join(" ")}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
