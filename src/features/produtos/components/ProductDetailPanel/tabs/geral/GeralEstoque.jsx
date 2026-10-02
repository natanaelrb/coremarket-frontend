import {
  CheckCircle2,
  Clock3,
  Package,
  Warehouse,
} from "lucide-react";

import {
  GeralCard,
  GeralField,
  GeralSectionTitle,
} from "./GeralShared";

export function GeralEstoque({
  produto,
  disponivel,
}) {
  return (
    <GeralCard className="p-5 -ml-4">
      <GeralSectionTitle
        icon={Warehouse}
        title="Estoque"
        iconClassName="
          border-cyan-200
          bg-cyan-50
          text-cyan-600
          dark:border-cyan-500/20
          dark:bg-cyan-500/10
          dark:text-cyan-400
        "
      />

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        {/* Estoque atual */}
        <GeralField
          icon={Package}
          label="Estoque atual"
          value={produto.estoque}
          iconClassName="
            border-blue-200
            bg-blue-50
            text-blue-600
            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        />

        {/* Reservado */}
        <GeralField
          icon={Clock3}
          label="Reservado"
          value={produto.estoqueReservado}
          iconClassName="
            border-orange-200
            bg-orange-50
            text-orange-600
            dark:border-orange-500/20
            dark:bg-orange-500/10
            dark:text-orange-400
          "
        />

        {/* Disponível */}
        <GeralField
          icon={CheckCircle2}
          label="Disponível"
          value={disponivel}
          valueClassName="
            text-emerald-600
            dark:text-emerald-400
          "
          iconClassName="
            border-emerald-200
            bg-emerald-50
            text-emerald-600
            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
          "
        />

        {/* Estoque mínimo */}
        <GeralField
          icon={Package}
          label="Estoque mínimo"
          value={produto.estoqueMinimo}
          iconClassName="
            border-amber-200
            bg-amber-50
            text-amber-600
            dark:border-amber-500/20
            dark:bg-amber-500/10
            dark:text-amber-400
          "
        />
      </div>
    </GeralCard>
  );
}