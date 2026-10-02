import {
  Barcode,
  FileText,
  Truck,
} from "lucide-react";

import {
  GeralCard,
  GeralField,
  GeralSectionTitle,
} from "./GeralShared";

export function GeralInfoFiscais({ produto }) {
  const codigoBarras =
    produto.codigoBarras ||
    produto.ean ||
    "—";

  return (
    <GeralCard className="p-5 -mt-2 ml-1">
      <GeralSectionTitle
        icon={FileText}
        title="Informações fiscais"
        iconClassName="
            border-blue-200
            bg-blue-50
            text-blue-600
            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
        "
        />

      <div className="space-y-5">
        <GeralField
            icon={Truck}
            label="Fornecedor"
            value={produto.fornecedor}
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
            icon={FileText}
            label="NCM"
            value={produto.ncm}
            iconClassName="
                border-indigo-200
                bg-indigo-50
                text-indigo-600
                dark:border-indigo-500/20
                dark:bg-indigo-500/10
                dark:text-indigo-400
            "
            />

        <GeralField
            icon={Barcode}
            label="EAN"
            value={codigoBarras}
            iconClassName="
                border-emerald-200
                bg-emerald-50
                text-emerald-600
                dark:border-emerald-500/20
                dark:bg-emerald-500/10
                dark:text-emerald-400
            "
            />
      </div>
    </GeralCard>
  );
}