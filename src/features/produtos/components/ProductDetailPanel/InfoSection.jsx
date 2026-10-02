// Bloco com título + grade de InfoField.
// Usado para organizar cada seção da aba Geral.

export function InfoSection({
  title,
  columns = 3,
  children,
}) {
  const gridColumns = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  };

  return (
    <section
      className="
        border-b border-slate-200/80
        py-4
        last:border-0
        dark:border-[#252a4a]
      "
    >
      <h4
        className="
          mb-4
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.08em]
          text-slate-400
          dark:text-slate-500
        "
      >
        {title}
      </h4>

      <div
        className={[
          "grid",
          "gap-x-4 gap-y-5",
          gridColumns[columns] ?? gridColumns[3],
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}