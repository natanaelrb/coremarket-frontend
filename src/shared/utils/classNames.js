/**
 * Small utility to conditionally join class names, avoiding a hard dependency
 * on libraries like clsx/tailwind-merge.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
