import {
  Droplets,
  FileText,
  Package,
  Tag,
  Weight,
} from "lucide-react";

import {
  formatWeightKg,
  formatVolumeL,
} from "../../../../utils/formatters";

import {
  GeralCard,
  GeralField,
  GeralSectionTitle,
} from "./GeralShared";

export function GeralInfoBasicas({ produto }) {
  return (
    <GeralCard className="p-5 -mt-2 -ml-4">
      <GeralSectionTitle
        icon={Package}
        title="Informações básicas"
        iconClassName="
            border-emerald-200
            bg-emerald-50
            text-emerald-600
            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
        "
        />

      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <GeralField
            icon={Tag}
            label="Categoria"
            value={produto.categoria}
            iconClassName="
                border-emerald-200
                bg-emerald-50
                text-emerald-600
                dark:border-emerald-500/20
                dark:bg-emerald-500/10
                dark:text-emerald-400
            "
            />

        <GeralField
            icon={Tag}
            label="Marca"
            value={produto.marca}
            iconClassName="
                border-blue-200
                bg-blue-50
                text-blue-600
                dark:border-blue-500/20
                dark:bg-blue-500/10
                dark:text-blue-400
            "
            />

        <GeralField
            icon={Package}
            label="Unidade"
            value={produto.unidade}
            iconClassName="
                border-cyan-200
                bg-cyan-50
                text-cyan-600
                dark:border-cyan-500/20
                dark:bg-cyan-500/10
                dark:text-cyan-400
            "
            />

        <GeralField
            icon={FileText}
            label="Tipo"
            value={produto.tipo}
            iconClassName="
                border-emerald-200
                bg-emerald-50
                text-emerald-600
                dark:border-emerald-500/20
                dark:bg-emerald-500/10
                dark:text-emerald-400
            "
            />

        <GeralField
            icon={Weight}
            label="Peso"
            value={formatWeightKg(produto.pesoKg)}
            iconClassName="
                border-orange-200
                bg-orange-50
                text-orange-600
                dark:border-orange-500/20
                dark:bg-orange-500/10
                dark:text-orange-400
            "
            />

        <GeralField
            icon={Droplets}
            label="Volume"
            value={
                produto.volumeL
                ? formatVolumeL(produto.volumeL)
                : "—"
            }
            iconClassName="
                border-sky-200
                bg-sky-50
                text-sky-600
                dark:border-sky-500/20
                dark:bg-sky-500/10
                dark:text-sky-400
            "
            />
      </div>
    </GeralCard>
  );
}