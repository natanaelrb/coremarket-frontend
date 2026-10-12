import { X, Package, Tag } from "lucide-react";
import ProductImage from "../ProductTable/ProductImage.jsx";
import StatusBadge from "../ProductTable/StatusBadge.jsx";

export default function ProductDetailHeader({ produto, onClose }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        border-b
        border-gray-100
        bg-white
        px-5
        pb-5
        pt-5
        dark:border-white/10
        dark:bg-[#151936]
        animate-fade-in
      "
    >
      {/* Detalhe visual sutil da identidade CoreMarket */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-24
          w-24
          rounded-bl-full
          bg-emerald-500/[0.04]
          dark:bg-emerald-400/[0.04]
        "
      />

      <div className="relative flex items-start gap-3.5">
        {/* Imagem */}
        <div
          className="
            shrink-0
            rounded-xl
            border
            border-gray-100
            bg-gray-50
            p-1
            shadow-sm
            dark:border-white/10
            dark:bg-white/[0.03]
          "
        >
          <ProductImage
            src={produto?.imagem}
            alt={produto?.nome}
            size={58}
          />
        </div>

        {/* Informações */}
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex min-w-0 items-center gap-2 pr-8">
            <Package
              size={14}
              className="shrink-0 text-emerald-500"
              strokeWidth={2}
            />

            <p
              className="truncate text-[15px] font-bold tracking-tight text-gray-900 dark:text-white"
              title={produto?.nome}
            >
              {produto?.nome}
            </p>
          </div>

          <div className="mt-1 flex min-w-0 items-center gap-1.5">
            <Tag
              size={12}
              className="shrink-0 text-gray-400 dark:text-gray-500"
              strokeWidth={2}
            />

            <p
              className="truncate text-xs text-gray-400 dark:text-gray-500"
              title={produto?.marca}
            >
              {produto?.marca || "Marca não informada"}
            </p>
          </div>

          <div className="mt-2.5">
            <StatusBadge status={produto?.status} />
          </div>
        </div>

        {/* Fechar */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-0
            top-0
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-gray-400
            transition-all
            duration-200
            hover:bg-gray-100
            hover:text-gray-700
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-500/40
            dark:hover:bg-white/5
            dark:hover:text-gray-200
          "
          aria-label="Fechar detalhes"
        >
          <X
            size={17}
            strokeWidth={2}
            className="transition-transform duration-200 hover:rotate-90"
          />
        </button>
      </div>
    </div>
  );
}