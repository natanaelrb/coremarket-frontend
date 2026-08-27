import { useState, useRef } from "react";
import { Columns3 } from "lucide-react";
import useClickOutside from "../../../../shared/hooks/useClickOutside";
import SecondaryButton from "../../../../shared/components/actions/SecondaryButton";
import { COLUMN_DEFS } from "../../constants/columns";

export default function ColumnsMenu({ visibleCols, onToggleColumn }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative z-[9999]" ref={ref}>
      <SecondaryButton icon={Columns3} onClick={() => setOpen((o) => !o)}>
        Colunas
      </SecondaryButton>

      {open && (
        <div
          className="
              cm-pop
              absolute
              left-0
              top-full
              mt-2
              z-[999]
              w-56
              overflow-hidden
              rounded-xl
              border
              border-slate-200 dark:border-white/10
              bg-[#161B36]
              shadow-2xl
           "
        >
          {COLUMN_DEFS.map((c) => (
            <label
              key={c.key}
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                cursor-pointer
                text-sm
                font-semibold
                text-slate-800
                dark:text-[var(--sidebar-text)]
                hover:bg-slate-100
                dark:hover:bg-slate-100 dark:hover:bg-white/5
                transition-all
                duration-200
                "
            >
              <input
                type="checkbox"
                checked={visibleCols[c.key]}
                onChange={() => onToggleColumn(c.key)}
                className="accent-violet-600"
              />
              {c.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
