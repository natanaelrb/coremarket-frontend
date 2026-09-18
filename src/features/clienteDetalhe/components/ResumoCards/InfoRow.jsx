/** One label/value row inside a summary card. */
export function InfoRow({
  label,
  value,
  tone = "text-[#0f172a] dark:text-white",
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        border-b
        border-slate-100
        py-2.5
        text-sm
        last:border-b-0
        dark:border-white/5
      "
    >
      <span className="text-[#64748b] dark:text-slate-400">
        {label}
      </span>

      <span
        className={`
          shrink-0
          font-medium
          ${tone}
        `}
      >
        {value}
      </span>
    </div>
  );
}