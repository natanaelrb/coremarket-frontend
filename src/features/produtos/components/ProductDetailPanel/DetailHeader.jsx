// Cabeçalho da página de detalhes:
// imagem, nome, status e identificadores do produto.

import { ArrowLeft } from "lucide-react";
import { ProductImage } from "../ProductsTable/ProductImage";

export function DetailHeader({ produto, onClose }) {
  const identificadores = [
    {
      label: "Código",
      value: produto.codigo,
    },
    {
      label: "SKU",
      value: produto.sku,
    },
    {
      label: "Código de barras",
      value: produto.codigoBarras,
    },
  ];

  return (
    <header
      className="
        rounded-2xl
        border border-slate-200/80
        bg-white
        p-5
        shadow-sm
        dark:border-[#252a4a]
        dark:bg-[#151936]
      "
    >
      {/* Navegação */}
      <button
        type="button"
        onClick={onClose}
        className="
          mb-5
          inline-flex
          items-center
          gap-2
          rounded-lg
          px-2
          py-1.5
          text-sm
          font-medium
          text-slate-500
          transition-colors
          hover:bg-slate-100
          hover:text-slate-900
          dark:text-slate-400
          dark:hover:bg-white/[0.05]
          dark:hover:text-white
        "
      >
        <ArrowLeft size={17} />

        Voltar para produtos
      </button>

      {/* Informações principais */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {/* Imagem do produto */}
        <div
          className="
            w-fit
            shrink-0
            rounded-2xl
            border border-slate-200/80
            bg-slate-50
            p-2
            dark:border-[#252a4a]
            dark:bg-[#0f1230]
          "
        >
          <ProductImage
            emoji={produto.imagemEmoji}
            color={produto.imagemCor}
            size={80}
          />
        </div>

        {/* Nome e status */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1
              className="
                break-words
                text-xl
                font-bold
                leading-snug
                text-slate-900
                dark:text-white
              "
            >
              {produto.nome}
            </h1>

            {/* Status */}
            <span
              className={[
                "inline-flex items-center gap-1.5",
                "rounded-full px-2.5 py-1",
                "text-xs font-semibold",
                produto.ativo
                  ? [
                      "bg-emerald-50 text-emerald-700",
                      "dark:bg-emerald-500/10 dark:text-emerald-400",
                    ].join(" ")
                  : [
                      "bg-slate-100 text-slate-500",
                      "dark:bg-white/5 dark:text-slate-400",
                    ].join(" "),
              ].join(" ")}
            >
              <span
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  produto.ativo
                    ? "bg-emerald-500"
                    : "bg-slate-400 dark:bg-slate-500",
                ].join(" ")}
                aria-hidden="true"
              />

              {produto.ativo ? "Ativo" : "Inativo"}
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Informações e gerenciamento do produto
          </p>
        </div>
      </div>

      {/* Identificadores */}
      <div
        className="
          mt-6
          rounded-xl
          border border-slate-200/80
          bg-slate-50/70
          px-4
          py-4
          dark:border-[#252a4a]
          dark:bg-[#0f1230]
        "
      >
        <dl className="grid gap-4 sm:grid-cols-3">
          {identificadores.map((item) => (
            <div key={item.label} className="min-w-0">
              <dt
                className="
                  text-xs
                  font-medium
                  text-slate-400
                  dark:text-slate-500
                "
              >
                {item.label}
              </dt>

              <dd
                className="
                  mt-1
                  break-all
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-200
                "
              >
                {item.value || "—"}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}