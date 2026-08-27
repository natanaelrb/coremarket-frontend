import DetailSectionCard from './DetailSectionCard';
import { formatFullDateTime } from "../utils/formatDate";

export default function AdditionalInfoSection({ movement }) {
  return (
    <DetailSectionCard title="Informações adicionais">
      <div className="space-y-2 text-sm">
        <p className="flex justify-between text-slate-400">
          <span>ID da movimentação</span>
          <span className="font-mono text-slate-200">{movement.id}</span>
        </p>
        <p className="flex justify-between text-slate-400">
          <span>Criado em</span>
          <span className="text-slate-200">{formatFullDateTime(movement.dataHora)}</span>
        </p>
        <p className="flex justify-between text-slate-400">
          <span>Última atualização</span>
          <span className="text-slate-200">{formatFullDateTime(movement.dataHora)}</span>
        </p>
      </div>
    </DetailSectionCard>
  );
}
