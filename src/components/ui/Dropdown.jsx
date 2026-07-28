import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-1.5">
        {label}
      </p>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E1226] px-3 py-2 text-[13px] text-slate-700 dark:text-slate-200 hover:border-violet-400 dark:hover:border-violet-500/60 transition-colors duration-200"
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          size={15}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="cm-pop absolute z-20 mt-1.5 w-full min-w-[10rem] rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B36] shadow-xl shadow-slate-900/10 dark:shadow-black/40 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-[13px] transition-colors duration-150 ${
                opt === value
                  ? "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 font-medium"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
