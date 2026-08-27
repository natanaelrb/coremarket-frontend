import DetailSectionCard from './DetailSectionCard';

export default function ReasonSection({ motivo, observacao }) {
  return (
    <DetailSectionCard title="Motivo / Observação">
      <p className="text-sm text-slate-300">Motivo: <span className="text-slate-200">{motivo}</span></p>
      {observacao && (
        <p className="mt-1 text-sm text-slate-400">Observação: {observacao}</p>
      )}
    </DetailSectionCard>
  );
}
