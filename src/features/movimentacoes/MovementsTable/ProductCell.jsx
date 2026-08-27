export default function ProductCell({ produto }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-lg">
        {produto.imagem}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-white">{produto.nome}</p>
        <p className="truncate text-xs text-slate-500">SKU: {produto.sku}</p>
      </div>
    </div>
  );
}
