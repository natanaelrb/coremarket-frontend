export default function Breadcrumb({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Navegação estrutural" className="mt-0.5">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li
              key={`${item}-${index}`}
              className="flex items-center gap-1.5"
            >
              {index > 0 && (
                <span
                  className="text-base font-medium text-slate-500"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}

              <span
                className={
                  isLastItem
                    ? "text-base font-medium text-emerald-600"
                    : "text-base text-slate-500"
                }
                aria-current={isLastItem ? "page" : undefined}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}