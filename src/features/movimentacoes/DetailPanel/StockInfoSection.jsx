import DetailSectionCard from './DetailSectionCard';

export default function StockInfoSection({ movement }) {
  return (
    <DetailSectionCard title="Estoque">
      <div className="mb-3 grid grid-cols-2 gap-3">
        <div>
          <p className="mb-1 text-xs text-slate-500">Estoque anterior</p>
          <p className="text-sm font-medium text-slate-200">{movement.estoqueAnterior} unidades</p>
        </div>
        <div>
          <p className="mb-1 text-xs text-slate-500">Quantidade movimentada</p>
          <p className={`text-sm font-medium ${movement.quantidade > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {movement.quantidade > 0 ? '+' : ''}{movement.quantidade} unidades
          </p>
        </div>
      </div>
      <div className="rounded-lg bg-white/5 px-3 py-2 text-center">
        <p className="text-lg font-bold text-white">{movement.estoqueDepois} unidades</p>
        <p className="text-xs text-slate-500">Estoque atual</p>
      </div>
    </DetailSectionCard>
  );
}
