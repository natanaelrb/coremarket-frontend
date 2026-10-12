export default function AjusteForm({ formData, onChange }) {
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
        <span className="text-xs font-medium text-slate-400">Novo estoque</span>
        <input
          type="number"
          value={formData.novoEstoque || ''}
          onChange={(e) => onChange('novoEstoque', e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-slate-400">Motivo do ajuste</span>
        <input
          value={formData.motivo || ''}
          onChange={(e) => onChange('motivo', e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
        />
      </label>
    </div>
  );
}
