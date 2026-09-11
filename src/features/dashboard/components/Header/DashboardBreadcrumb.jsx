import { ChevronRight } from "lucide-react";

/** Breadcrumb "Home > Dashboard > {aba atual}". */
export default function DashboardBreadcrumb({ activeLabel }) {
  const items = ["Home", "Dashboard", activeLabel];

  return (
    <nav
      className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]"
      aria-label="breadcrumb"
    >
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight
              className="h-3.5 w-3.5 text-[var(--text-tertiary)]"
              aria-hidden="true"
            />
          )}

          <span
            className={
              i === items.length - 1
                ? "font-medium text-emerald-600"
                : "transition-colors hover:text-emerald-600"
            }
          >
            {item}
          </span>
        </span>
      ))}
    </nav>
  );
}