export default function DetailSectionCard({
  title,
  children,
  className = '',
}) {
  return (
    <section
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-[0_2px_10px_rgba(15,23,42,0.035)]
        transition-all
        duration-200
        hover:-translate-y-[1px]
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]
        ${className}
      `}
    >
      {title && (
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-100
            bg-gradient-to-r
            from-white
            to-slate-50/60
            px-5
            py-3.5
          "
        >
          <div className="flex items-center gap-2.5">
            <span
              className="
                h-4
                w-1
                rounded-full
                bg-emerald-500
                transition-all
                duration-200
                group-hover:h-5
                group-hover:bg-emerald-600
              "
            />

            <h2
              className="
                text-sm
                font-semibold
                tracking-tight
                text-slate-800
                transition-colors
                duration-200
                group-hover:text-slate-900
              "
            >
              {title}
            </h2>
          </div>
        </div>
      )}

      <div className="px-5 py-5">
        {children}
      </div>
    </section>
  );
}