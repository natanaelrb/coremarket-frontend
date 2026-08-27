import DetailSectionCard from './DetailSectionCard';

export default function OriginInfoSection({ movement }) {
  if (!movement.origemLink && !movement.fornecedor) return null;

  return (
    <DetailSectionCard title="Origem">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="mb-1 text-xs text-slate-500">Origem da movimentação</p>
          <p className="text-sm font-medium text-violet-400">{movement.origemLabel}</p>
        </div>
        {movement.fornecedor && (
          <div>
            <p className="mb-1 text-xs text-slate-500">Fornecedor</p>
            <p className="text-sm font-medium text-slate-200">{movement.fornecedor}</p>
          </div>
        )}
        {movement.notaFiscal && (
          <div>
            <p className="mb-1 text-xs text-slate-500">Nota Fiscal</p>
            <p className="text-sm font-medium text-slate-200">{movement.notaFiscal}</p>
          </div>
        )}
        <div>
          <p className="mb-1 text-xs text-slate-500">Data da compra</p>
          <p className="text-sm font-medium text-slate-200">{new Date(movement.dataHora).toLocaleDateString('pt-BR')}</p>
        </div>
      </div>
    </DetailSectionCard>
  );
}
