
import { useState, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import useClickOutside from "../../hooks/useClickOutside";

export default function Dropdown({
  label,
  value,
  options = [],
  onChange,
  trigger,
  items = [],
  align = "left",
  children,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false));

  const toggleDropdown = () => {
    setOpen((current) => !current);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  // Dropdown de seleção
  if (!trigger) {
    return (
      <div className="relative w-full" ref={ref}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
            {label}
          </label>
        )}

        <button
          type="button"
          onClick={toggleDropdown}
          aria-expanded={open}
          aria-haspopup="listbox"
          className="
            flex h-10 w-full items-center justify-between
            rounded-lg border border-slate-200
            bg-white px-3
            text-sm text-slate-700
            outline-none
            transition-all duration-200
            hover:border-slate-300
            focus:border-violet-500
            focus:ring-4 focus:ring-violet-500/10
            dark:border-white/[0.10]
            dark:bg-[#151c2b]
            dark:text-slate-200
            dark:hover:border-white/[0.18]
            dark:focus:border-violet-400
          "
        >
          <span className="truncate">
            {value || "Selecione uma opção"}
          </span>

          <ChevronDown
            size={15}
            strokeWidth={2}
            className={`
              shrink-0 text-slate-400
              transition-transform duration-200
              dark:text-slate-500
              ${open ? "rotate-180" : ""}
            `}
            aria-hidden="true"
          />
        </button>

        {open && (
          <div
            role="listbox"
            className="
              absolute z-[9999] mt-2 max-h-64 w-full
              overflow-y-auto
              rounded-xl border border-slate-200/80
              bg-white p-1.5
              shadow-[0_12px_35px_rgba(15,23,42,0.12)]
              animate-in fade-in slide-in-from-top-1
              duration-150
              dark:border-white/[0.10]
              dark:bg-[#151c2b]
              dark:shadow-[0_12px_35px_rgba(0,0,0,0.28)]
            "
          >
            {options.length > 0 ? (
              options.map((option) => (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={option === value}
                  onClick={() => {
                    onChange?.(option);
                    closeDropdown();
                  }}
                  className={`
                    flex w-full items-center justify-between
                    rounded-lg px-3 py-2.5
                    text-left text-sm
                    transition-colors duration-150
                    ${
                      option === value
                        ? "bg-violet-50 font-semibold text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
                        : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                    }
                  `}
                >
                  <span className="truncate">{option}</span>

                  {option === value && (
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="ml-3 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>
              ))
            ) : (
              <p className="px-3 py-2.5 text-sm text-slate-400">
                Nenhuma opção disponível
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  // Dropdown de ações
  return (
    <div className="relative" ref={ref}>
      <div
        onClick={toggleDropdown}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {trigger}
      </div>

      {open && (
        <div
          role="menu"
          onClick={closeDropdown}
          className={[
            "absolute z-[9999] mt-2 min-w-[210px]",
            "rounded-xl border border-slate-200/80",
            "bg-white p-1.5",
            "shadow-[0_12px_35px_rgba(15,23,42,0.12)]",
            "animate-in fade-in slide-in-from-top-1",
            "duration-150",
            "dark:border-white/[0.10]",
            "dark:bg-[#151c2b]",
            "dark:shadow-[0_12px_35px_rgba(0,0,0,0.28)]",
            align === "right" ? "right-0" : "left-0",
          ].join(" ")}
        >
          {children ||
            items.map((item, index) => (
              <DropdownItem
                key={item.label ?? index}
                icon={item.icon}
                danger={item.tone === "danger"}
                onClick={item.onClick}
              >
                {item.label}
              </DropdownItem>
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
      role="menuitem"
      onClick={onClick}
      className={[
        "flex w-full items-center gap-2.5",
        "rounded-lg px-3 py-2.5",
        "text-left text-sm font-medium",
        "outline-none",
        "transition-colors duration-150",
        "focus-visible:ring-2 focus-visible:ring-violet-500/40",
        danger
          ? [
              "text-red-600",
              "hover:bg-red-50",
              "dark:text-red-400",
              "dark:hover:bg-red-500/10",
            ].join(" ")
          : [
              "text-slate-600",
              "hover:bg-slate-50",
              "dark:text-slate-300",
              "dark:hover:bg-white/[0.06]",
            ].join(" "),
      ].join(" ")}
    >
      {Icon && (
        <Icon
          size={15}
          strokeWidth={2}
          className="shrink-0"
          aria-hidden="true"
        />
      )}

      <span className="truncate">{children}</span>
    </button>
  );
}