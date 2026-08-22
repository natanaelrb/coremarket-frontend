import DetailSectionCard from './DetailSectionCard';

export default function ProductInfoSection({ produto }) {
  return (
    <DetailSectionCard title="Produto">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
          {produto.imagem}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{produto.nome}</p>
          <p className="text-xs text-slate-500">SKU: {produto.sku}</p>
          <p className="text-xs text-slate-500">Categoria: {produto.categoria}</p>
        </div>
      </div>
    </DetailSectionCard>
  );
}
