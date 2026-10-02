import { useEffect, useRef, useState } from "react";
import { MoreVertical, Eye, Pencil, Ban, Trash2 } from "lucide-react";

export default function RowActionsMenu({ fornecedor }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const actions = [
    {
      icon: Eye,
      label: "Ver detalhes",
    },
    {
      icon: Pencil,
      label: "Editar",
    },
    {
      icon: Ban,
      label: "Bloquear",
    },
    {
      icon: Trash2,
      label: "Excluir",
      danger: true,
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Ações do fornecedor ${fornecedor?.nome ?? ""}`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="
          rounded-lg p-1.5
          text-slate-400
          transition-all duration-150
          hover:bg-slate-100 hover:text-slate-700
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-emerald-500/30
          dark:text-slate-500
          dark:hover:bg-[#252a4a]
          dark:hover:text-slate-200
        "
      >
        <MoreVertical size={16} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="
            animate-scale-in
            absolute right-0 top-9 z-20
            w-44 origin-top-right
            overflow-hidden rounded-xl
            border border-slate-200
            bg-white py-1
            shadow-lg shadow-slate-900/10
            dark:border-[#252a4a]
            dark:bg-[#141833]
            dark:shadow-black/20
          "
        >
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.label}
                type="button"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className={`
                  flex w-full items-center gap-2
                  px-3 py-2.5
                  text-left text-sm
                  transition-colors duration-150
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-emerald-500/40
                  ${
                    action.danger
                      ? `
                        text-rose-600
                        hover:bg-rose-50
                        dark:text-rose-400
                        dark:hover:bg-rose-500/10
                      `
                      : `
                        text-slate-600
                        hover:bg-emerald-50
                        hover:text-emerald-700
                        dark:text-slate-300
                        dark:hover:bg-emerald-500/10
                        dark:hover:text-emerald-400
                      `
                  }
                `}
              >
                <Icon size={14} aria-hidden="true" />
                <span>{action.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}