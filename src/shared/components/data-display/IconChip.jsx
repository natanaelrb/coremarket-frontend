import { cn } from '../../utils/cn.js';

/**
 * Rounded colored square that hosts a Lucide icon — used on KPI cards and
 * quick-report tiles.
 */
export function IconChip({ icon: Icon, colorClassName, className }) {
  return (
    <span
      className={cn(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
        colorClassName,
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}
