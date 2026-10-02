import {
  Edit3,
  Copy,
  Barcode,
  Tag,
  History,
} from "lucide-react";

const actions = [
  {
    label: "Editar",
    icon: Edit3,
    primary: true,
  },
  {
    label: "Duplicar",
    icon: Copy,
  },
  {
    label: "Código de barras",
    icon: Barcode,
  },
  {
    label: "Etiqueta",
    icon: Tag,
  },
  {
    label: "Histórico",
    icon: History,
  },
];

export function QuickActions({
  onEdit,
  onDuplicate,
  onBarcode,
  onLabel,
  onHistory,
}) {
  const handlers = [
    onEdit,
    onDuplicate,
    onBarcode,
    onLabel,
    onHistory,
  ];

  return (
    <section
      className="-ml-4
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-[0_2px_10px_rgba(15,23,42,0.04)]
        transition-all duration-300
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]

        dark:border-[#12365f]
        dark:bg-[#061c38]
        dark:shadow-[0_2px_10px_rgba(0,0,0,0.12)]
        dark:hover:border-[#1d4c78]
      "
    >
      <div className="mb-3 flex items-center gap-2">
        <div
          className="
            flex h-7 w-7 items-center justify-center
            rounded-lg
            border border-cyan-200
            bg-cyan-50
            text-cyan-600

            dark:border-cyan-400/20
            dark:bg-cyan-400/10
            dark:text-cyan-300
          "
        >
          <Edit3 size={15} strokeWidth={2} />
        </div>

        <div>
          <h3
            className="
              text-[11px]
              font-bold
              text-slate-700

              dark:text-[#d7e5f7]
            "
          >
            Ações rápidas
          </h3>

          <p
            className="
              text-[9px]
              text-slate-400

              dark:text-[#7290b4]
            "
          >
            Acesse as principais ações deste produto
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              onClick={handlers[index]}
              className={`
                group
                flex h-9
                items-center justify-center
                gap-2
                rounded-lg
                border
                text-[10px]
                font-medium
                transition-all
                duration-200

                ${
                  action.primary
                    ? `
                      border-emerald-500
                      bg-emerald-500
                      text-white
                      shadow-[0_4px_12px_rgba(16,185,129,0.12)]
                      hover:bg-emerald-400
                      hover:border-emerald-400

                      dark:border-emerald-500/40
                      dark:bg-emerald-500
                      dark:text-white
                      dark:hover:bg-emerald-400
                    `
                    : `
                      border-slate-200
                      bg-slate-50
                      text-slate-600
                      hover:border-cyan-200
                      hover:bg-cyan-50
                      hover:text-slate-800

                      dark:border-[#123b68]
                      dark:bg-[#071f3d]
                      dark:text-[#b8cbe2]
                      dark:hover:border-cyan-400/30
                      dark:hover:bg-[#09294d]
                      dark:hover:text-white
                    `
                }
              `}
            >
              <Icon
                size={14}
                strokeWidth={2}
                className={`
                  transition-transform
                  duration-200
                  group-hover:scale-110

                  ${
                    action.primary
                      ? "text-white"
                      : `
                        text-cyan-600
                        dark:text-cyan-300
                      `
                  }
                `}
              />

              {action.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}