import { cn } from "../../../../shared/utils/classNames.js";

const TONES = {
  green: {
    icon: "bg-[#dcfce7] text-[#16a34a]",
    accent: "text-[#16a34a]",
  },
  blue: {
    icon: "bg-[#dbeafe] text-[#2563eb]",
    accent: "text-[#2563eb]",
  },
  red: {
    icon: "bg-[#fee2e2] text-[#dc2626]",
    accent: "text-[#dc2626]",
  },
  amber: {
    icon: "bg-[#fef3c7] text-[#d97706]",
    accent: "text-[#d97706]",
  },
  violet: {
    icon: "bg-[#ede9fe] text-[#7c3aed]",
    accent: "text-[#7c3aed]",
  },
};

/**
 * Single KPI card.
 * Hierarquia:
 * 1. Label
 * 2. Valor principal
 * 3. Informação complementar colorida
 */
export function KPICard({
  icon,
  tone = "green",
  value,
  label,
  caption,
  delay = 0,
}) {
  const toneConfig = TONES[tone] ?? TONES.green;

  return (
    <div
      className="
        group
        flex
        min-w-0
        items-start
        gap-3
        rounded-xl
        border
        border-[var(--border-subtle)]
        bg-white
        p-4
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]
      "
      style={{
        "--delay": `${delay}ms`,
      }}
    >
      {/* Ícone */}
      <div
        className={cn(
          `
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            transition-transform
            duration-200
            group-hover:scale-105
          `,
          toneConfig.icon
        )}
      >
        {icon}
      </div>

      {/* Conteúdo */}
      <div className="min-w-0 flex-1">
        {/* Nome do indicador */}
        <p className="truncate text-xs font-medium text-slate-500">
          {label}
        </p>

        {/* Número principal */}
        <p className="mt-1 text-2xl font-bold leading-none tracking-tight text-slate-900">
          {value}
        </p>

        {/* Informação complementar */}
        {caption && (
          <p
            className={cn(
              "mt-2 truncate text-[11px] font-semibold",
              toneConfig.accent
            )}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}