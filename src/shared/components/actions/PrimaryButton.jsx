import { Loader2 } from "lucide-react";

/**
 * Botão primário do CoreMarket.
 */
export default function PrimaryButton({
  icon: Icon,
  children,
  onClick,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-1.5
        rounded-lg bg-[#1D4ED8] px-4 py-2.5
        text-[13px] font-medium text-white
        shadow-sm shadow-blue-900/20
        transition-colors hover:bg-[#1E40AF]
        disabled:cursor-not-allowed disabled:opacity-60
        ${className}
      `}
    >
      {loading ? (
        <Loader2 size={15} className="animate-spin" />
      ) : (
        Icon && <Icon size={16} />
      )}

      {children}
    </button>
  );
}
