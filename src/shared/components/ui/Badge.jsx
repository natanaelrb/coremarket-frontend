const TONES = {
  green: "bg-[#dcfce7] text-[#15803d] border border-[#16a34a]/20",
  red: "bg-[#fee2e2] text-[#dc2626] border border-[#dc2626]/20",
  amber: "bg-[#fef3c7] text-[#b45309] border border-[#f59e0b]/20",
  blue: "bg-[#dbeafe] text-[#2563eb] border border-[#2563eb]/20",
  violet: "bg-[#ede9fe] text-[#7c3aed] border border-[#7c3aed]/20",
  neutral: "bg-slate-100 text-slate-600 border border-slate-200",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-md
        px-2
        py-0.5
        text-xs
        font-medium
        whitespace-nowrap
        ${TONES[tone] ?? TONES.neutral}
        ${className}
      `}
    >
      {children}
    </span>
  );
}