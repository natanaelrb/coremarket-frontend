import { cn } from "../../utils/classNames.js";

/**
 * Campo de formulário com label e mensagem de validação.
 */
export function FormField({
  label,
  required,
  error,
  className,
  children,
}) {
  return (
    <label className={cn("block", className)}>
      <span
        className="
          mb-1.5 block
          text-[12px]
          font-medium
          text-slate-600
          dark:text-slate-300
        "
      >
        {label}

        {required && (
          <span
            className="ml-0.5 text-cm-red"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </span>

      {children}

      {error && (
        <span
          className="
            mt-1.5 block
            text-[11px]
            font-medium
            text-cm-red
          "
        >
          {error}
        </span>
      )}
    </label>
  );
}

/**
 * Base visual compartilhada pelos campos.
 */
const baseInputClasses = `
  w-full
  min-h-[42px]
  rounded-lg

  border
  border-slate-200
  bg-white

  px-3
  text-sm
  text-slate-800

  placeholder:text-slate-400

  shadow-[0_1px_2px_rgba(15,23,42,0.03)]

  outline-none

  transition-all
  duration-150
  ease-out

  hover:border-slate-300

  focus:border-emerald-500
  focus:ring-4
  focus:ring-emerald-500/10
  focus:shadow-[0_0_0_1px_rgba(16,185,129,0.08)]

  disabled:cursor-not-allowed
  disabled:bg-slate-50
  disabled:text-slate-400

  dark:border-slate-700
  dark:bg-slate-900
  dark:text-white
  dark:placeholder:text-slate-500

  dark:hover:border-slate-600

  dark:focus:border-emerald-400
  dark:focus:ring-4
  dark:focus:ring-emerald-400/10

  dark:disabled:bg-slate-950
`;

/**
 * Input de texto, número, data etc.
 */
export function TextInput({
  className,
  error,
  ...rest
}) {
  return (
    <input
      className={cn(
        baseInputClasses,
        error && `
          border-cm-red
          focus:border-cm-red
          focus:ring-cm-red/10
        `,
        className
      )}
      {...rest}
    />
  );
}

/**
 * Select estilizado.
 */
export function SelectInput({
  className,
  error,
  children,
  ...rest
}) {
  return (
    <select
      className={cn(
        baseInputClasses,
        "cursor-pointer",
        error && `
          border-cm-red
          focus:border-cm-red
          focus:ring-cm-red/10
        `,
        className
      )}
      {...rest}
    >
      {children}
    </select>
  );
}

/**
 * Campo de texto multilinha.
 */
export function TextArea({
  className,
  error,
  ...rest
}) {
  return (
    <textarea
      className={cn(
        baseInputClasses,
        `
          min-h-[100px]
          py-2.5
          resize-none
        `,
        error && `
          border-cm-red
          focus:border-cm-red
          focus:ring-cm-red/10
        `,
        className
      )}
      {...rest}
    />
  );
}