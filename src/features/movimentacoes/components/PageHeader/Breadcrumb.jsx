import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="
        flex
        items-center
        gap-1.5
        text-sm
      "
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-1.5"
          >
            {index > 0 && (
              <ChevronRight
                className="
                  h-3.5
                  w-3.5
                  shrink-0
                  text-slate-300
                  dark:text-slate-600
                "
                strokeWidth={2}
              />
            )}

            <span
              className={`
                whitespace-nowrap
                transition-colors
                duration-200
                ${
                  isLast
                    ? `
                      font-medium
                      text-emerald-600
                      dark:text-emerald-400
                    `
                    : `
                      text-slate-400
                      hover:text-slate-600
                      dark:text-slate-500
                      dark:hover:text-slate-300
                    `
                }
              `}
            >
              {item}
            </span>
          </span>
        );
      })}
    </nav>
  );
}