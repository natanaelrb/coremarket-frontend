import { motion } from 'framer-motion';
import {
  Boxes,
  MapPin,
  Package,
  Warehouse,
} from 'lucide-react';

import SummaryCard from './SummaryCard';

export default function MovementSummary({
  movement
}) {
  const quantidade = Number(
    movement?.quantidade ?? 0,
  );

  const estoqueDepois = Number(
    movement?.estoqueDepois ?? 0,
  );

  const quantityTone =
    quantidade > 0
      ? 'green'
      : quantidade < 0
        ? 'red'
        : 'blue';

  const quantityPrefix =
    quantidade > 0
      ? '+'
      : '';

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay: 0.05,
        ease: 'easeOut',
      }}
      className="
        mb-[18px]
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      <SummaryCard
        label="Produto"
        value={
          movement?.produto?.nome ||
          'Produto não informado'
        }
        description={
          movement?.produto?.codigoBarras
            ? `Código: ${movement.produto.codigoBarras}`
            : 'Código não informado'
        }
        tone="green"
        icon={
          <Package
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />
        }
      />

      <SummaryCard
        label="Quantidade"
        value={`${quantityPrefix}${quantidade} ${
          movement?.unidade || 'UN'
        }`}
        description={
          quantidade > 0
            ? 'Entrada no estoque'
            : quantidade < 0
              ? 'Saída do estoque'
              : 'Sem alteração'
        }
        tone={quantityTone}
        icon={
          <Boxes
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />
        }
      />

      <SummaryCard
        label="Estoque"
        value={`${estoqueDepois} ${
          movement?.unidade || 'UN'
        }`}
        description="Após a movimentação"
        tone="blue"
        icon={
          <Warehouse
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />
        }
      />

      <SummaryCard
        label="Origem"
        value={
          movement?.origemLabel ||
          movement?.origem ||
          'Não informada'
        }
        description={
          movement?.origem ||
          'Origem não informada'
        }
        tone="amber"
        icon={
          <MapPin
            className="h-[18px] w-[18px]"
            strokeWidth={1.8}
          />
        }
      />
    </motion.div>
  );
}