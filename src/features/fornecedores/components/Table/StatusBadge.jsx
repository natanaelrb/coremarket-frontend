import { STATUS_STYLES } from "../../constants/tableConfig.js";

const DEFAULT_STATUS_STYLE =
  "border border-slate-200 bg-slate-100 text-slate-600 dark:border-[#3a4168] dark:bg-slate-500/10 dark:text-slate-300";

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] ?? DEFAULT_STATUS_STYLE;

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-2.5
        py-1
        text-xs
        font-semibold
        whitespace-nowrap
        ${style}
      `}
    >
      {status}
    </span>
  );
}