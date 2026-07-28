import React from "react";
import { Loader2 } from "lucide-react";

/**
 * Botão primário violeta, usado para "Novo cliente" e "Salvar cliente".
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
      className={`flex items-center gap-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-[var(--sidebar-text)] px-4 py-2.5 text-[13px] font-medium transition-colors shadow-sm shadow-violet-900/20 disabled:opacity-60 ${className}`}
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
