import { ArrowLeft } from "lucide-react";

/** Back-to-clients-list link at the top of the detail page. */
export function VoltarButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-[#64748b]
        transition-colors
        duration-200
        hover:text-[#16a34a]
        dark:text-slate-400
        dark:hover:text-[#4ade80]
      "
    >
      <ArrowLeft
        size={15}
        className="transition-transform duration-200 group-hover:-translate-x-0.5"
      />

      Voltar para clientes
    </button>
  );
}