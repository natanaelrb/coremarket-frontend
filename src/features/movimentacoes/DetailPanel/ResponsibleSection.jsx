import DetailSectionCard from './DetailSectionCard';

export default function ResponsibleSection({ usuario }) {
  return (
    <DetailSectionCard title="Responsável">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-lg">
          {usuario.avatar}
        </span>
        <div>
          <p className="text-sm font-medium text-white">{usuario.nome}</p>
          <p className="text-xs text-slate-500">{usuario.cargo}</p>
        </div>
      </div>
    </DetailSectionCard>
  );
}
