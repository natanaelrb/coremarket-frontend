import { cn } from "../../../../shared/utils/classNames.js";

const TONES = {
  amber: "bg-[#fffbeb] text-[#b45309] border-[#f59e0b]/20",
  blue: "bg-[#eff6ff] text-[#2563eb] border-[#2563eb]/20",
  violet: "bg-[#f5f3ff] text-[#7c3aed] border-[#7c3aed]/20",
};

/** One contextual alert item in the alerts banner row. */
export function AlertItem({ tone, texto, icon }) {
  return (
    <div
      className={cn(
        `
          flex
          min-w-0
          items-center
          gap-2
          rounded-md
          border
          px-3
          py-2
          text-[11px]
          font-medium
          whitespace-nowrap
          transition-colors
          duration-200
        `,
        TONES[tone] ?? TONES.blue
      )}
    >
      <span className="shrink-0">
        {icon}
      </span>

      <span className="truncate">
        {texto}
      </span>
    </div>
  );
}