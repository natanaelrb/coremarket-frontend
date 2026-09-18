import { cn } from "../../../../shared/utils/classNames.js";

const TONES = {
  green: "bg-[#dcfce7] text-[#16a34a]",
  blue: "bg-[#dbeafe] text-[#2563eb]",
  red: "bg-[#fee2e2] text-[#dc2626]",
  amber: "bg-[#fef3c7] text-[#d97706]",
  violet: "bg-[#ede9fe] text-[#7c3aed]",
};

/**
 * Single KPI card: icon chip, headline value, and a supporting caption.
 */
export function KPICard({
  icon,
  tone = "green",
  value,
  label,
  caption,
  delay = 0,
}) {
  return (
    <div
      className="
        group
        flex items-start gap-3
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        animate-slide-up
        transition-all duration-200
        hover:border-[#42c878]/40
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]
      "
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "backwards",
      }}
    >
      <div
        className={cn(
          `
            shrink-0
            w-10 h-10
            rounded-lg
            flex items-center justify-center
            transition-transform duration-200
            group-hover:scale-105
          `,
          TONES[tone] ?? TONES.green
        )}
      >
        {icon}
      </div>

      <div className="min-w-0 pt-0.5">
        <p className="text-lg font-semibold text-slate-900 leading-tight truncate">
          {value}
        </p>

        <p className="text-xs text-slate-500 mt-1">
          {label}
        </p>

        {caption && (
          <p className="text-[11px] text-slate-500 mt-0.5">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}