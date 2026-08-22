import DetailSectionCard from './DetailSectionCard';
import TypeBadge from '../MovementsTable/TypeBadge';
import { formatQuantitySigned } from "../utils/formatQuantity";

export default function MovementInfoSection({ movement }) {
  return (
    <DetailSectionCard title="Movimentação">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="mb-1 text-xs text-slate-500">Tipo de movimentação</p>
          <TypeBadge tipo={movement.tipo} />
        </div>
        <div>
          <p className="mb-1 text-xs text-slate-500">Quantidade</p>
          <p className={`text-sm font-semibold ${movement.quantidade > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {formatQuantitySigned(movement.quantidade, movement.unidade.toLowerCase())}
          </p>
        </div>
      </div>
    </DetailSectionCard>
  );
}
