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
        "rounded-2xl border border-gray-100 dark:border-[#22254A] bg-white dark:bg-[#12142E]",
        "shadow-sm shadow-gray-200/40 dark:shadow-black/20",
        className,
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
    <div className="flex items-start justify-between gap-4 mb-5">
      <div className="flex items-start gap-3">
        {step && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm font-semibold text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            {step}
          </span>
        )}

        <div>
          {title && (
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}