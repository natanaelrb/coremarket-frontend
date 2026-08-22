import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import useClickOutside from "../../hooks/useClickOutside";

export default function Dropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative w-full" ref={ref}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="
          w-full
          h-12
          px-4
          flex
          items-center
          justify-between
          rounded-xl
          border
          border-slate-200
          dark:border-slate-200 dark:border-white/10
          bg-slate-50
          dark:bg-[#0E1226]
          text-sm
          text-slate-700
          dark:text-slate-200
          transition-all
          duration-200
          hover:border-violet-400
          dark:hover:border-violet-500
          focus:ring-2
          focus:ring-violet-500/20
        "
      >
        <span className="truncate">{value}</span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            z-[9999]
            mt-2
            w-full
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            dark:border-slate-200 dark:border-white/10
            bg-white
            dark:bg-[#161B36]
            shadow-2xl
          "
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`
                w-full
                px-4
                py-3
                text-left
                text-sm
                transition-colors

                ${
                  opt === value
                    ? "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-100 dark:hover:bg-white/5"
                }
              `}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function DropdownItem({
  children,
  onClick,
  icon: Icon,
  danger = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors duration-100",
        danger
          ? "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
          : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/5",
      ].join(" ")}
    >
      {Icon && <Icon size={14} />}
      {children}
    </button>
  );
}
