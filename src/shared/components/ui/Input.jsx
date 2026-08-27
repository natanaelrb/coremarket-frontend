import { forwardRef } from 'react';
import { cn } from '../../utils/cn.js';

/**
 * Base text input with optional leading icon, shared across filters/forms.
 */
export const Input = forwardRef(function Input(
  { className, icon: Icon, containerClassName, ...props },
  ref
) {
  return (
    <div className={cn('relative', containerClassName)}>
      {Icon ? (
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      ) : null}
      <input
        ref={ref}
        className={cn(
          'h-10 w-full rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400',
          'transition-colors focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/20',
          'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500',
          Icon ? 'pl-9 pr-3' : 'px-3',
          className
        )}
        {...props}
      />
    </div>
  );
});
