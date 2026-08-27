export default function TransferenciaForm({ formData, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <label className="col-span-2 flex flex-col gap-1.5">
        <span className="text-xs font-medium text-slate-400">Produto</span>
        <input
          value={formData.produto || ''}
          onChange={(e) => onChange('produto', e.target.value)}
          placeholder="Buscar produto por nome ou SKU"
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-slate-400">Origem</span>
        <input
          value={formData.origem || ''}
          onChange={(e) => onChange('origem', e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-slate-400">Destino</span>
        <input
          value={formData.destino || ''}
          onChange={(e) => onChange('destino', e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-slate-400">Quantidade</span>
        <input
          type="number"
          value={formData.quantidade || ''}
          onChange={(e) => onChange('quantidade', e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
      </label>
    </div>
  );
}
