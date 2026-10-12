import {
  Barcode,
  Boxes,
  MapPin,
  Package,
  Store,
  Tag,
} from "lucide-react";
import { cn } from "../../../../shared/utils/classNames.js";

const ROW_CONFIG = [
  {
    key: "sku",
    label: "SKU",
    icon: Tag,
  },
  {
    key: "codigoBarras",
    label: "Código de Barras",
    icon: Barcode,
  },
  {
    key: "categoria",
    label: "Categoria",
    icon: Boxes,
  },
  {
    key: "fornecedor",
    label: "Fornecedor",
    icon: Store,
  },
  {
    key: "unidade",
    label: "Unidade",
    icon: Package,
  },
  {
    key: "localizacao",
    label: "Localização",
    icon: MapPin,
  },
];

export default function ProductInfoList({ produto }) {
  return (
    <div className="px-5 py-4 animate-fade-in">
      {/* Título da seção */}
      <div className="mb-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.07em] text-gray-400 dark:text-gray-500">
          Informações do produto
        </p>
      </div>

      {/* Informações */}
      <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {ROW_CONFIG.map((row, index) => {
          const Icon = row.icon;
          const value = produto?.[row.key] ?? "—";

          return (
            <div
              key={row.key}
              className="
                group
                flex
                min-w-0
                items-center
                gap-2.5
                rounded-lg
                border
                border-gray-100
                bg-gray-50/60
                px-3
                py-2.5
                transition-all
                duration-200
                hover:border-emerald-100
                hover:bg-emerald-50/30
                dark:border-white/10
                dark:bg-white/[0.025]
                dark:hover:border-emerald-500/20
                dark:hover:bg-emerald-500/[0.03]
                animate-slide-up
              "
              style={{
                animationDelay: `${index * 40}ms`,
              }}
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  text-gray-400
                  shadow-sm
                  transition-colors
                  duration-200
                  group-hover:bg-emerald-50
                  group-hover:text-emerald-600
                  dark:bg-white/5
                  dark:text-gray-500
                  dark:group-hover:bg-emerald-500/10
                  dark:group-hover:text-emerald-400
                "
              >
                <Icon size={13} strokeWidth={2} />
              </div>

              <div className="min-w-0 flex-1">
                <dt className="text-[9px] font-semibold uppercase tracking-[0.06em] text-gray-400 dark:text-gray-500">
                  {row.label}
                </dt>

                <dd
                  className={cn(
                    "mt-0.5 truncate text-xs font-semibold",
                    value === "—"
                      ? "text-gray-400 dark:text-gray-500"
                      : "text-gray-700 dark:text-gray-200",
                  )}
                  title={String(value)}
                >
                  {value}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}