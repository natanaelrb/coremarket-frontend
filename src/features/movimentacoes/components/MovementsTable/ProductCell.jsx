import { Package } from 'lucide-react';

export default function ProductCell({ produto }) {
  return (
    <div
      className="
        flex
        min-w-0
        w-full
        items-center
        gap-3
      "
    >
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border border-slate-200
          bg-slate-50
          text-lg
          transition-colors
          duration-200
          group-hover:border-emerald-200
          group-hover:bg-emerald-50
        "
      >
        {produto?.imagem || (
          <Package
            className="h-5 w-5 text-slate-400"
            strokeWidth={1.8}
          />
        )}
      </span>

      <div className="min-w-0">
        <p
          className="
            truncate
            text-sm
            font-semibold
            text-slate-700
            transition-colors
            duration-200
            group-hover:text-emerald-700
          "
        >
          {produto?.nome || 'Produto não informado'}
        </p>

        <p className="mt-0.5 truncate text-xs font-medium text-slate-400">
          SKU: {produto?.sku || '—'}
        </p>
      </div>
    </div>
  );
}