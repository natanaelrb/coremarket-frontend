import { cn } from "../../utils/classNames.js";

export default function Card({
  children,
  className,
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-gray-100 bg-white dark:border-[#22254A] dark:bg-[#12142E]",
        "shadow-sm shadow-gray-200/40 dark:shadow-black/20",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function CardStepHeader({
  step,
  title,
  description,
  children,
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div className="flex min-w-0 items-start gap-3">
        {step && (
          <span
            className="
              flex h-8 w-8 shrink-0 items-center justify-center
              rounded-lg border border-green-500/20
              bg-green-500/10 text-sm font-bold
              text-green-700 transition-colors duration-200
              dark:text-green-400
            "
          >
            {step}
          </span>
        )}

        <div className="min-w-0">
          {title && (
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
      </div>

      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
