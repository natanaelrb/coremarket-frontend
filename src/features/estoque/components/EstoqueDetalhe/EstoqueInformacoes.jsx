import {
  Barcode,
  Boxes,
  MapPin,
  Package,
  Scale,
  Tag,
  Truck,
} from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";

export default function EstoqueInformacoes({ produto }) {
  return (
    <section className="grid grid-cols-1 gap-5 xl:grid-cols-2 animate-slide-up">
      {/* Informações do produto */}
      <Card className="group overflow-hidden border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10">
        <SectionHeader
          icon={Boxes}
          title="Informações do produto"
          description="Dados cadastrais e identificação do produto."
          tone="green"
        />

        <div className="grid grid-cols-1 gap-2.5 p-5 sm:grid-cols-2">
          <InfoItem
            icon={Tag}
            label="Categoria"
            value={produto?.categoria}
          />

          <InfoItem
            icon={Truck}
            label="Fornecedor"
            value={produto?.fornecedor}
          />

          <InfoItem
            icon={Package}
            label="Unidade"
            value={produto?.unidade}
          />

          <InfoItem
            icon={Scale}
            label="Peso líquido"
            value={produto?.pesoLiquido}
          />

          <InfoItem
            icon={Tag}
            label="SKU"
            value={produto?.sku}
          />

          <InfoItem
            icon={Barcode}
            label="Código de barras"
            value={produto?.codigoBarras}
          />
        </div>
      </Card>

      {/* Localização */}
      <Card className="group overflow-hidden border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10">
        <SectionHeader
          icon={MapPin}
          title="Localização e armazenamento"
          description="Onde o produto está armazenado e informações operacionais."
          tone="blue"
        />

        <div className="space-y-4 p-5">
          <InfoItem
            icon={MapPin}
            label="Localização"
            value={produto?.localizacao}
            highlight
          />

          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.07em] text-gray-400 dark:text-gray-500">
                Observações
              </p>

              {produto?.observacoes && (
                <span className="text-[10px] text-gray-400 dark:text-gray-500">
                  Informação adicional
                </span>
              )}
            </div>

            <div
              className="
                rounded-xl border border-gray-100 bg-gray-50/70 p-4
                transition-all duration-200
                hover:border-emerald-100 hover:bg-emerald-50/30
                dark:border-white/10 dark:bg-white/[0.025]
                dark:hover:border-emerald-500/20 dark:hover:bg-emerald-500/[0.03]
              "
            >
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                {produto?.observacoes || "Nenhuma observação registrada."}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  description,
  tone = "green",
}) {
  const toneStyles = {
    green: {
      icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    },
    blue: {
      icon: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
    },
  };

  const style = toneStyles[tone] ?? toneStyles.green;

  return (
    <div className="border-b border-gray-100 px-5 py-4 dark:border-white/10">
      <div className="flex items-center gap-3">
        <div
          className={`
            flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
            transition-transform duration-200
            group-hover:scale-105
            ${style.icon}
          `}
        >
          <Icon size={17} strokeWidth={2} />
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
            {title}
          </h2>

          <p className="mt-0.5 text-[11px] leading-4 text-gray-400 dark:text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
  highlight = false,
}) {
  return (
    <div
      className={`
        group/item min-w-0 rounded-xl border px-3.5 py-3
        transition-all duration-200
        ${
          highlight
            ? `
              border-sky-100 bg-sky-50/60
              hover:border-sky-200 hover:bg-sky-50
              dark:border-sky-500/15 dark:bg-sky-500/[0.04]
              dark:hover:border-sky-500/25 dark:hover:bg-sky-500/[0.07]
            `
            : `
              border-gray-100 bg-gray-50/60
              hover:border-emerald-100 hover:bg-emerald-50/30
              dark:border-white/10 dark:bg-white/[0.025]
              dark:hover:border-emerald-500/20 dark:hover:bg-emerald-500/[0.03]
            `
        }
      `}
    >
      <div className="flex items-center gap-2">
        <div
          className={`
            flex h-7 w-7 shrink-0 items-center justify-center rounded-lg
            transition-all duration-200
            ${
              highlight
                ? `
                  bg-sky-100 text-sky-600
                  group-hover/item:bg-sky-200
                  dark:bg-sky-500/10 dark:text-sky-400
                `
                : `
                  bg-white text-gray-400 shadow-sm
                  group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600
                  dark:bg-white/5 dark:text-gray-500
                  dark:group-hover/item:bg-emerald-500/10
                  dark:group-hover/item:text-emerald-400
                `
            }
          `}
        >
          <Icon size={13} strokeWidth={2} />
        </div>

        <p className="min-w-0 truncate text-[10px] font-semibold uppercase tracking-[0.06em] text-gray-400 dark:text-gray-500">
          {label}
        </p>
      </div>

      <p
        className={`
          mt-2 truncate text-sm font-semibold
          ${
            highlight
              ? "text-sky-700 dark:text-sky-400"
              : "text-gray-700 dark:text-gray-200"
          }
        `}
        title={value || "—"}
      >
        {value || "—"}
      </p>
    </div>
  );
}