import { cn } from "../../utils/classNames.js";

/** Labeled form field wrapper with inline validation error message. */
export function FormField({ label, required, error, className, children }) {
  return (
    <label className={cn('block', className)}>
      <span className="block text-xs font-medium text-slate-300 light:text-slate-600 mb-1.5">
        {label} {required && <span className="text-cm-red">*</span>}
      </span>
      {children}
      {error && <span className="block text-[11px] text-cm-red mt-1">{error}</span>}
    </label>
  )
}

const baseInputClasses =
  'w-full rounded-lg bg-white/5 light:bg-black/5 border border-cm-border-dark light:border-cm-border-light ' +
  'px-3 py-2 text-sm text-white light:text-slate-900 placeholder:text-slate-500 ' +
  'focus:outline-none focus:ring-2 focus:ring-cm-violet/50 transition-shadow'

/** Plain text/number/date input styled to match FormField. */
export function TextInput({ className, error, ...rest }) {
  return (
    <input className={cn(baseInputClasses, error && 'ring-2 ring-cm-red/40', className)} {...rest} />
  )
}

/** Select input styled to match FormField. */
export function SelectInput({ className, error, children, ...rest }) {
  return (
    <select className={cn(baseInputClasses, error && 'ring-2 ring-cm-red/40', className)} {...rest}>
      {children}
    </select>
  )
}

/** Multi-line textarea styled to match FormField. */
export function TextArea({ className, error, ...rest }) {
  return (
    <textarea className={cn(baseInputClasses, 'resize-none', error && 'ring-2 ring-cm-red/40', className)} {...rest} />
  )
}
