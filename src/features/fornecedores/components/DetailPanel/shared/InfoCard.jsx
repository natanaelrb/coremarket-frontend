export default function InfoCard({ title, rows }) {
  return (
    <section
      className="
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:shadow-black/10
      "
    >
      <h4
        className="
          mb-4
          text-sm
          font-semibold
          text-slate-800
          dark:text-slate-100
        "
      >
        {title}
      </h4>

      <dl className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.label}
            className="
              flex
              items-start
              justify-between
              gap-4
              text-sm
            "
          >
            <dt
              className="
                min-w-0
                text-slate-500
                dark:text-slate-400
              "
            >
              {row.label}
            </dt>

            <dd
              className="
                max-w-[65%]
                break-words
                text-right
                font-medium
                text-slate-700
                dark:text-slate-200
              "
            >
              {row.value ?? "—"}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}