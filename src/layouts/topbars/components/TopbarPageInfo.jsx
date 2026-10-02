export default function TopbarPageInfo({
  icon: Icon,
  title,
  breadcrumb,
  description,
}) {
  return (
    <div className="min-w-0">
      {/* Breadcrumb */}
      <div className="mb-2 flex items-center gap-1.5 text-xs">
        {breadcrumb.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-slate-300">›</span>
            )}

            <span
              className={
                index === breadcrumb.length - 1
                  ? "font-medium text-slate-500"
                  : "text-slate-400"
              }
            >
              {item}
            </span>
          </span>
        ))}
      </div>

      {/* Título + ícone */}
      <div className="flex items-center gap-2.5">
        {Icon && (
          <div
            className="
              flex h-8 w-8 shrink-0 items-center justify-center
              rounded-lg
              bg-emerald-50
              text-emerald-600
              ring-1 ring-emerald-100
            "
          >
            <Icon size={17} strokeWidth={2.2} />
          </div>
        )}

        <h1
          className="
            truncate
            text-xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          {title}
        </h1>
      </div>

      {/* Descrição */}
      {description && (
        <p className="mt-1.5 max-w-[620px] text-xs text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}