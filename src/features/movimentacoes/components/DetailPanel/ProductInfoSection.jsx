import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  Barcode,
  ChevronRight,
  Package,
  Tag,
} from 'lucide-react';

import DetailSectionCard from './DetailSectionCard';

export default function ProductInfoSection({ produto }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    if (!produto?.id) return;

    navigate(`/produtos/${produto.id}`);
  };

  return (
    <DetailSectionCard title="Produto">
      <button
        type="button"
        onClick={handleProductClick}
        disabled={!produto?.id}
        className="
          group
          relative
          flex
          w-full
          items-center
          gap-4
          overflow-hidden
          rounded-2xl
          border
          border-blue-100
          bg-blue-50/40
          p-4
          text-left
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-blue-200
          hover:bg-blue-50/70
          hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)]
          disabled:cursor-default
          disabled:hover:translate-y-0
          disabled:hover:border-blue-100
          disabled:hover:bg-blue-50/40
          disabled:hover:shadow-none
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-500/30
          focus-visible:ring-offset-2
        "
      >
        {/* Brilho */}
        <span
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            bg-blue-400/10
            opacity-0
            blur-2xl
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Imagem / ícone */}
        <span
          className="
            relative
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-blue-100
            bg-white
            text-blue-500
            shadow-[0_2px_8px_rgba(59,130,246,0.08)]
            transition-all
            duration-300
            group-hover:scale-[1.03]
            group-hover:border-blue-200
            group-hover:shadow-[0_5px_14px_rgba(59,130,246,0.12)]
          "
        >
          {produto?.imagemUrl ? (
            <img
              src={produto.imagemUrl}
              alt={produto.nome || 'Produto'}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />
          ) : (
            <Package
              className="
                h-6
                w-6
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:text-blue-600
              "
              strokeWidth={1.7}
            />
          )}
        </span>

        {/* Informações */}
        <div className="relative min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <p
              className="
                truncate
                text-sm
                font-bold
                text-slate-800
                transition-colors
                duration-200
                group-hover:text-blue-700
              "
            >
              {produto?.nome || 'Produto não informado'}
            </p>

            {produto?.id && (
              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  shrink-0
                  text-slate-300
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-blue-500
                  group-hover:opacity-100
                "
                strokeWidth={2}
              />
            )}
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
            {/* Código */}
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                text-xs
                font-medium
                text-slate-500
              "
            >
              <Barcode
                className="h-3.5 w-3.5 text-amber-500"
                strokeWidth={1.8}
              />

              {produto?.codigoBarras || 'Código não informado'}
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            {/* Categoria */}
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                truncate
                text-xs
                font-medium
                text-violet-600
              "
            >
              <Tag
                className="h-3 w-3 text-violet-500"
                strokeWidth={1.8}
              />

              {produto?.categoria || 'Categoria não informada'}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-2">
            <span
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-emerald-100
                bg-emerald-50
                px-2
                py-1
                text-[11px]
                font-semibold
                text-emerald-700
                transition-all
                duration-200
                group-hover:border-emerald-200
                group-hover:bg-emerald-100
              "
            >
              Ver detalhes do produto
            </span>
          </div>
        </div>

        {/* Navegação */}
        {produto?.id && (
          <span
            className="
              relative
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-blue-100
              bg-white
              text-blue-400
              shadow-sm
              transition-all
              duration-300
              group-hover:border-emerald-200
              group-hover:bg-emerald-50
              group-hover:text-emerald-600
            "
          >
            <ChevronRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
              strokeWidth={2}
            />
          </span>
        )}
      </button>
    </DetailSectionCard>
  );
}