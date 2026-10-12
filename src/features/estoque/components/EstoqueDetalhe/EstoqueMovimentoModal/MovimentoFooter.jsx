import { Check } from "lucide-react";

export default function MovimentoFooter({
  tipo,
  disabled,
  onClose,
  actionLabel,
}) {
  const isEntrada = tipo === "entrada";

  return (
    <footer className="
      flex shrink-0 flex-col-reverse gap-2
      border-t border-gray-100 bg-gray-50/60
      px-5 py-4
      sm:flex-row sm:justify-end
      dark:border-white/10
      dark:bg-white/[0.02]
      sm:px-6
    ">
      <button
        type="button"
        onClick={onClose}
        className="
          h-10 rounded-lg
          border border-gray-200 bg-white
          px-4 text-sm font-medium
          text-gray-700 transition-all
          hover:bg-gray-50
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-emerald-500/40
          dark:border-white/10
          dark:bg-[#171A38]
          dark:text-gray-200
          dark:hover:bg-white/5
        "
      >
        Cancelar
      </button>

      <button
        type="submit"
        disabled={disabled}
        className={`
          inline-flex h-10 items-center
          justify-center gap-2 rounded-lg
          px-4 text-sm font-semibold
          text-white shadow-sm
          transition-all duration-200
          focus:outline-none
          focus-visible:ring-2
          disabled:cursor-not-allowed
          disabled:opacity-40
          ${
            isEntrada
              ? `
                bg-emerald-500
                shadow-emerald-500/20
                hover:bg-emerald-600
                focus-visible:ring-emerald-500/40
              `
              : `
                bg-rose-500
                shadow-rose-500/20
                hover:bg-rose-600
                focus-visible:ring-rose-500/40
              `
          }
        `}
      >
        <Check size={16} strokeWidth={2.2} />
        {actionLabel}
      </button>
    </footer>
  );
}