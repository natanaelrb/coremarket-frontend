
// Skeleton animado exibido enquanto os produtos estão carregando.

const skeletonClass = `
  animate-pulse
  rounded-md
  bg-slate-200/80
  dark:bg-white/[0.08]
`;

function SkeletonCell({ className = "" }) {
  return <div className={`${skeletonClass} ${className}`} />;
}

export function TableSkeleton({ rows = 8 }) {
  const skeletonRows = Array.from({ length: rows });

  return (
    <div
      className="
        divide-y divide-slate-100
        dark:divide-white/[0.06]
      "
      role="status"
      aria-label="Carregando produtos"
    >
      {skeletonRows.map((_, index) => (
        <div
          key={index}
          className="
            flex min-w-[900px]
            items-center gap-3
            px-4 py-3.5
          "
        >
          {/* Checkbox */}
          <div className="flex w-8 shrink-0 justify-center">
            <SkeletonCell className="h-4 w-4 rounded" />
          </div>

          {/* Imagem */}
          <SkeletonCell className="h-10 w-10 shrink-0 rounded-xl" />

          {/* Código */}
          <div className="w-20 shrink-0">
            <SkeletonCell className="h-3 w-14" />
          </div>

          {/* Código de barras */}
          <div className="w-28 shrink-0">
            <SkeletonCell className="h-3 w-24" />
          </div>

          {/* Nome */}
          <div className="min-w-44 flex-1 space-y-2">
            <SkeletonCell className="h-3 w-32" />
            <SkeletonCell className="h-2.5 w-20 opacity-60" />
          </div>

          {/* Categoria */}
          <div className="w-24 shrink-0">
            <SkeletonCell className="h-6 w-20 rounded-full" />
          </div>

          {/* Marca */}
          <div className="w-20 shrink-0">
            <SkeletonCell className="h-3 w-16" />
          </div>

          {/* Preço */}
          <div className="w-20 shrink-0">
            <SkeletonCell className="ml-auto h-3 w-16" />
          </div>

          {/* Estoque */}
          <div className="w-16 shrink-0">
            <SkeletonCell className="ml-auto h-3 w-10" />
          </div>

          {/* Estoque mínimo */}
          <div className="w-16 shrink-0">
            <SkeletonCell className="ml-auto h-3 w-10" />
          </div>

          {/* Validade */}
          <div className="w-24 shrink-0">
            <SkeletonCell className="h-3 w-20" />
          </div>

          {/* Status */}
          <div className="w-20 shrink-0">
            <SkeletonCell className="h-6 w-16 rounded-full" />
          </div>

          {/* Ações */}
          <div className="flex w-8 shrink-0 justify-center">
            <SkeletonCell className="h-7 w-7 rounded-lg" />
          </div>
        </div>
      ))}

      <span className="sr-only">Carregando produtos...</span>
    </div>
  );
}

