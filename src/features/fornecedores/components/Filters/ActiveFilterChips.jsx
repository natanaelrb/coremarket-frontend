import { X } from "lucide-react";

const LABELS = {
  situacao: "Situação",
  tipo: "Tipo",
  cidade: "Cidade",
  estado: "Estado",
  produto: "Produto",
  ultimaCompra: "Última Compra",
  valorComprado: "Valor Comprado",
};

export default function ActiveFilterChips({
  chips,
  onRemove,
}) {
  return (
    <div
      className="
        animate-fade-in-up
        mt-3
        flex flex-wrap gap-2
        border-t border-slate-100
        pt-3
        dark:border-[#252a4a]
      "
    >
      {chips.map((chip) => (
        <span
          key={chip.key}
          className="
            flex items-center gap-1.5
            rounded-full
            border border-slate-200
            bg-slate-50
            px-3 py-1
            text-xs font-medium
            text-slate-600
            dark:border-[#3a4168]
            dark:bg-slate-500/10
            dark:text-slate-300
          "
        >
          {LABELS[chip.key] ?? chip.key}: {chip.value}

          <button
            type="button"
            onClick={() => onRemove(chip.key)}
            aria-label={`Remover filtro ${LABELS[chip.key] ?? chip.key}`}
            className="
              rounded-full
              p-0.5
              text-slate-400
              transition-colors
              hover:bg-emerald-100
              hover:text-emerald-700
              dark:text-slate-500
              dark:hover:bg-emerald-500/20
              dark:hover:text-emerald-400
            "
          >
            <X size={12} strokeWidth={2.2} />
          </button>
        </span>
      ))}
    </div>
  );
}