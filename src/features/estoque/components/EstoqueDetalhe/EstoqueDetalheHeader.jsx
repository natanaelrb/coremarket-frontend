import {
  ArrowLeft,
  ArrowDownToLine,
  ArrowUpToLine,
  Barcode,
  Boxes,
  MapPin,
  Tag,
} from "lucide-react";

import ProductImage from "../ProductTable/ProductImage.jsx";
import StatusBadge from "../ProductTable/StatusBadge.jsx";

export default function EstoqueDetalheHeader({
  produto,
  onBack,
  onEntrada,
  onSaida,
}) {
  return (
    <header className="animate-fade-in-up">
      {/* Navegação */}
      <div className="mb-4 -ml-3">
        <button
          type="button"
          onClick={onBack}
          className="
            group inline-flex items-center gap-1.5
            text-sm font-medium text-gray-400
            transition-colors duration-200
            hover:text-emerald-600
            dark:text-gray-500 dark:hover:text-emerald-400
          "
        >
          <ArrowLeft
            size={15}
            strokeWidth={2}
            className="
              transition-transform duration-200
              group-hover:-translate-x-0.5
            "
          />

          <span>Estoque</span>
        </button>

        <span className="mx-2 text-gray-300 dark:text-gray-600">
          /
        </span>

        <span
          className="
            text-sm font-medium text-gray-700
            dark:text-gray-200
          "
        >
          {produto?.nome}
        </span>
      </div>

      {/* Header principal */}
      <div
        className="
          relative overflow-hidden rounded-2xl
          border border-gray-100 bg-white shadow-sm
          dark:border-white/10 dark:bg-[#151936]
        "
      >
        <div
          className="
            pointer-events-none absolute right-0 top-0
            h-40 w-40 rounded-bl-full
            bg-emerald-500/[0.035]
            dark:bg-emerald-400/[0.035]
          "
        />

        <div className="relative p-5 sm:p-6">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            {/* Produto */}
            <div className="flex min-w-0 items-start gap-4">
              <div
                className="
                  shrink-0 rounded-2xl border border-gray-100
                  bg-gray-50 p-1.5 shadow-sm
                  dark:border-white/10 dark:bg-white/[0.03]
                "
              >
                <ProductImage
                  src={produto?.imagem}
                  alt={produto?.nome}
                  size={72}
                />
              </div>

              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1
                    className="
                      min-w-0 text-xl font-bold tracking-tight
                      text-gray-900 dark:text-white
                      sm:text-2xl
                    "
                  >
                    {produto?.nome}
                  </h1>

                  <StatusBadge status={produto?.status} />
                </div>

                <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                  {produto?.marca || "Marca não informada"}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <MetaItem
                    icon={Tag}
                    label="SKU"
                    value={produto?.sku}
                  />

                  <MetaItem
                    icon={Barcode}
                    label="Código"
                    value={produto?.codigoBarras}
                  />

                  <MetaItem
                    icon={Boxes}
                    label="Categoria"
                    value={produto?.categoria}
                  />

                  {produto?.localizacao && (
                    <MetaItem
                      icon={MapPin}
                      label="Localização"
                      value={produto.localizacao}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Ações do produto */}
            <div className="flex shrink-0 flex-wrap gap-2 xl:justify-end">
              <ActionButton
                icon={ArrowDownToLine}
                label="Entrada"
                tone="green"
                onClick={onEntrada}
              />

              <ActionButton
                icon={ArrowUpToLine}
                label="Saída"
                tone="red"
                onClick={onSaida}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div
      className="
        inline-flex min-w-0 max-w-full items-center gap-2
        rounded-lg border border-gray-100 bg-gray-50/70
        px-2.5 py-2
        dark:border-white/10 dark:bg-white/[0.025]
      "
    >
      <Icon
        size={13}
        strokeWidth={2}
        className="shrink-0 text-gray-400 dark:text-gray-500"
      />

      <div className="min-w-0">
        <span className="mr-1.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-gray-400 dark:text-gray-500">
          {label}
        </span>

        <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-200">
          {value || "—"}
        </span>
      </div>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  tone,
  onClick,
}) {
  const styles = {
    green: `
      border-emerald-500 bg-emerald-500 text-white
      shadow-sm shadow-emerald-500/20
      hover:border-emerald-600 hover:bg-emerald-600
    `,
    red: `
      border-rose-500 bg-rose-500 text-white
      shadow-sm shadow-rose-500/20
      hover:border-rose-600 hover:bg-rose-600
    `,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex h-10 items-center justify-center gap-2
        rounded-lg border px-4
        text-sm font-semibold
        transition-all duration-200
        hover:-translate-y-px hover:shadow-md
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-500/40
        ${styles[tone] ?? styles.green}
      `}
    >
      <Icon size={16} strokeWidth={2} />
      {label}
    </button>
  );
}