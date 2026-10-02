// Par label/valor reutilizado dentro das abas do painel de detalhes.

export function InfoField({
  label,
  value,
  valueClassName = "",
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
        {label}
      </p>

      <p
        className={[
          "mt-1 break-words text-sm font-medium leading-relaxed",
          "text-slate-800 dark:text-slate-100",
          valueClassName,
        ].join(" ")}
      >
        {value ?? "—"}
      </p>
    </div>
  );
}