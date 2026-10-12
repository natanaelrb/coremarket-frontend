import { motion } from "framer-motion";

import ProductCell from "./ProductCell";
import TypeBadge from "./TypeBadge";
import OriginCell from "./OriginCell";
import UserCell from "./UserCell";
import StatusBadge from "./StatusBadge";
import RowActionsMenu from "./RowActionsMenu";

import { formatDateTime } from "../../utils/formatDate";
import { formatQuantitySigned } from "../../utils/formatQuantity";

export default function MovementsTableRow({ movement, onOpenMovement }) {
  const formattedDateTime = formatDateTime(movement.dataHora);
  const [dateLabel, timeLabel] = formattedDateTime.split(" ");

  const isPositive = movement.quantidade > 0;
  const isNegative = movement.quantidade < 0;

  const quantityColor = isPositive
    ? "text-emerald-600"
    : isNegative
      ? "text-red-600"
      : "text-slate-500";

  const quantityBackground = isPositive
    ? "bg-emerald-50"
    : isNegative
      ? "bg-red-50"
      : "bg-slate-100";

  const handleOpenMovement = () => {
    if (!movement?.id) return;

    onOpenMovement?.(movement.id);
  };

  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleOpenMovement}
      className="
        group
        cursor-pointer
        border-b border-slate-100
        bg-white
        text-sm
        transition-colors
        hover:bg-slate-50/80
        last:border-b-0
      "
    >
      <td className="whitespace-nowrap px-4 py-3.5 align-middle">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-700">
            {dateLabel}
          </span>

          <span className="mt-0.5 text-xs font-medium text-slate-400">
            {timeLabel}
          </span>
        </div>
      </td>

      <td className="px-4 py-3.5 align-middle">
        <ProductCell produto={movement.produto} />
      </td>

      <td className="px-4 py-3.5 align-middle">
        <TypeBadge tipo={movement.tipo} />
      </td>

      <td className="px-4 py-3.5 align-middle">
        <OriginCell label={movement.origemLabel} isLink={movement.origemLink} />
      </td>

      <td className="px-4 py-3.5 align-middle">
        <span
          className={`
            inline-flex
            items-center
            rounded-lg
            px-2
            py-1
            text-sm
            font-bold
            ${quantityColor}
            ${quantityBackground}
          `}
        >
          {formatQuantitySigned(
            movement.quantidade,
            movement.unidade?.toLowerCase() || "un",
          )}
        </span>
      </td>

      <td className="px-4 py-3.5 align-middle">
        <span className="font-medium tabular-nums text-slate-500">
          {movement.estoqueAnterior}
        </span>
      </td>

      <td className="px-4 py-3.5 align-middle">
        <span className="font-semibold tabular-nums text-slate-700">
          {movement.estoqueDepois}
        </span>
      </td>

      <td className="px-4 py-3.5 align-middle">
        <UserCell usuario={movement.usuario} />
      </td>

      <td className="px-4 py-3.5 align-middle">
        <StatusBadge status={movement.status} />
      </td>

      <td
        className="px-4 py-3.5 align-middle"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-end opacity-70 transition-opacity group-hover:opacity-100">
          <RowActionsMenu onView={handleOpenMovement} />
        </div>
      </td>
    </motion.tr>
  );
}
