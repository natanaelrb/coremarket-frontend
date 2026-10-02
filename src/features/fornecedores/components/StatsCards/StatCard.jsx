export default function StatCard({
  icon: Icon,
  iconBg = "bg-slate-100 dark:bg-slate-500/10",
  iconColor = "text-slate-600 dark:text-slate-300",
  label,
  value,
  caption,
  captionColor = "text-slate-500 dark:text-slate-400",
  delayIndex = 0,
}) {
  const hasLabel = Boolean(label);
  const hasValue = value !== undefined && value !== null;
  const hasCaption = Boolean(caption);

  return (
    <div
      className={`
        group relative
        card-hover
        stagger-${Math.min(delayIndex + 1, 6)}
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm
        transition-all 
        hover:-translate-y-1
        hover:border-emerald-200
        hover:shadow-lg
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:hover:border-emerald-500/20
        dark:hover:shadow-black/20
        
      `}
    >
      <div className="flex min-w-0 items-center gap-3">
        {/* Ícone */}
        <div
          className={`
            flex h-10 w-10 flex-shrink-0 items-center justify-center
            rounded-lg transition-transform duration-200
            group-hover:scale-105
            ${iconBg}
          `}
        >
          <Icon
            size={19}
            strokeWidth={2}
            className={iconColor}
            aria-hidden="true"
          />
        </div>

        {/* Informações */}
        <div className="min-w-0 flex-1">
          {/* Label */}
          {hasLabel && (
            <div className="group/label relative min-w-0">
              <p
                className="
                  mb-1 truncate text-[11px] font-semibold uppercase
                  tracking-wide text-slate-500
                  dark:text-slate-400
                "
              >
                {label}
              </p>

              <div
                role="tooltip"
                className="
                  pointer-events-none invisible absolute bottom-full
                  left-0 z-30 mb-2 w-max max-w-[220px]
                  -translate-y-1 rounded-lg border border-slate-200
                  bg-white px-3 py-2 text-xs font-medium normal-case
                  tracking-normal text-slate-700 opacity-0 shadow-lg
                  transition-all duration-150
                  group-hover/label:visible
                  group-hover/label:translate-y-0
                  group-hover/label:opacity-100
                  dark:border-[#3a4168] dark:bg-[#0f1230]
                  dark:text-slate-200
                "
              >
                {label}
              </div>
            </div>
          )}

          {/* Valor */}
          {hasValue && (
            <div className="group/value relative min-w-0">
              <p
                className="
                  truncate text-xl font-bold leading-tight
                  tracking-tight text-slate-900
                  dark:text-white
                "
              >
                {value}
              </p>

              <div
                role="tooltip"
                className="
                  pointer-events-none invisible absolute bottom-full
                  left-0 z-30 mb-2 w-max max-w-[240px]
                  -translate-y-1 rounded-lg border border-slate-200
                  bg-white px-3 py-2 text-sm font-semibold
                  text-slate-800 opacity-0 shadow-lg
                  transition-all duration-150
                  group-hover/value:visible
                  group-hover/value:translate-y-0
                  group-hover/value:opacity-100
                  dark:border-[#3a4168] dark:bg-[#0f1230]
                  dark:text-slate-100
                "
              >
                {value}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Legenda */}
      {hasCaption && (
        <div className="group/caption relative min-w-0">
          <p
            className={`
              mt-3 truncate text-xs font-medium
              ${captionColor}
            `}
          >
            {caption}
          </p>

          <div
            role="tooltip"
            className="
              pointer-events-none invisible absolute bottom-full
              left-0 z-30 mb-2 w-max max-w-[240px]
              -translate-y-1 rounded-lg border border-slate-200
              bg-white px-3 py-2 text-xs font-medium
              text-slate-700 opacity-0 shadow-lg
              transition-all duration-150
              group-hover/caption:visible
              group-hover/caption:translate-y-0
              group-hover/caption:opacity-100
              dark:border-[#3a4168] dark:bg-[#0f1230]
              dark:text-slate-200
            "
          >
            {caption}
          </div>
        </div>
      )}
    </div>
  );
}