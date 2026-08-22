import { motion } from 'framer-motion';
import ProductCell from './ProductCell';
import TypeBadge from './TypeBadge';
import OriginCell from './OriginCell';
import UserCell from './UserCell';
import StatusBadge from './StatusBadge';
import RowActionsMenu from './RowActionsMenu';
import { formatDateTime } from "../utils/formatDate";
import { formatQuantitySigned } from "../utils/formatQuantity";

export default function MovementsTableRow({ movement, isSelected, onSelect }) {
  const { dateLabel, timeLabel } = formatDateTime(movement.dataHora);
  const qtyColor = movement.quantidade > 0 ? 'text-emerald-400' : 'text-red-400';

  return (
    <motion.tr
      layout
      onClick={() => onSelect(movement.id)}
      className={`cursor-pointer border-b border-white/5 text-sm transition-colors ${
        isSelected ? 'bg-violet-500/10' : 'hover:bg-white/[0.03]'
      }`}
    >
      <td className="px-4 py-3 text-slate-300">
        <p>{dateLabel}</p>
        <p className="text-xs text-slate-500">{timeLabel}</p>
      </td>
      <td className="px-4 py-3"><ProductCell produto={movement.produto} /></td>
      <td className="px-4 py-3"><TypeBadge tipo={movement.tipo} /></td>
      <td className="px-4 py-3"><OriginCell label={movement.origemLabel} isLink={movement.origemLink} /></td>
      <td className={`px-4 py-3 font-semibold ${qtyColor}`}>
        {formatQuantitySigned(movement.quantidade, movement.unidade.toLowerCase())}
      </td>
      <td className="px-4 py-3 text-slate-400">{movement.estoqueAnterior}</td>
      <td className="px-4 py-3 font-medium text-slate-200">{movement.estoqueDepois}</td>
      <td className="px-4 py-3"><UserCell usuario={movement.usuario} /></td>
      <td className="px-4 py-3"><StatusBadge status={movement.status} /></td>
      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
        <RowActionsMenu onView={() => onSelect(movement.id)} />
      </td>
    </motion.tr>
  );
}
