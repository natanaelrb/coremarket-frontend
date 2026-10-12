import { Check, Package, Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function MovimentoProdutoSelect({
  produtos = [],
  value,
  onChange,
}) {
  const [busca, setBusca] = useState("");
  const [open, setOpen] = useState(false);

  const resultados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      return produtos.slice(0, 8);
    }

    return produtos
      .filter((produto) =>
        [
          produto.nome,
          produto.sku,
          produto.codigoBarras,
        ]
          .filter(Boolean)
          .some((campo) =>
            String(campo)
              .toLowerCase()
              .includes(termo),
          ),
      )
      .slice(0, 8);
  }, [produtos, busca]);

  return (
    <div>
      <label
        htmlFor="produto"
        className="
          flex items-center gap-1
          text-[10px] font-semibold uppercase
          tracking-[0.06em] text-gray-500
          dark:text-gray-400
        "
      >
        Produto
        <span className="text-rose-500">*</span>
      </label>

      <div className="relative mt-1.5">
        <div
          className="
            flex h-11 items-center gap-2
            rounded-lg border border-gray-200
            bg-white px-3
            transition-all duration-200
            focus-within:border-emerald-400
            focus-within:ring-2
            focus-within:ring-emerald-500/15
            dark:border-white/10
            dark:bg-[#11142b]
          "
        >
          <Search
            size={16}
            className="shrink-0 text-gray-400"
          />

          <input
            id="produto"
            type="text"
            value={value ? value.nome : busca}
            onFocus={() => setOpen(true)}
            onChange={(event) => {
              setBusca(event.target.value);

              if (value) {
                onChange(null);
              }

              setOpen(true);
            }}
            placeholder="Pesquisar produto..."
            className="
              min-w-0 flex-1
              bg-transparent
              text-sm font-medium
              text-gray-800
              outline-none
              placeholder:text-gray-300
              dark:text-gray-200
              dark:placeholder:text-gray-600
            "
          />
        </div>

        {open && !value && (
          <div
            className="
              absolute left-0 right-0 top-full z-30 mt-1.5
              max-h-64 overflow-y-auto
              rounded-xl border border-gray-200
              bg-white p-1.5
              shadow-xl
              animate-fade-in
              dark:border-white/10
              dark:bg-[#151936]
            "
          >
            {resultados.length > 0 ? (
              resultados.map((produto) => (
                <button
                  key={produto.id}
                  type="button"
                  onClick={() => {
                    onChange(produto);
                    setBusca("");
                    setOpen(false);
                  }}
                  className="
                    flex w-full items-center gap-3
                    rounded-lg px-3 py-2.5
                    text-left
                    transition-colors
                    hover:bg-emerald-50
                    dark:hover:bg-emerald-500/5
                  "
                >
                  <div
                    className="
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-lg
                      bg-emerald-50
                      text-emerald-600
                      dark:bg-emerald-500/10
                      dark:text-emerald-400
                    "
                  >
                    <Package size={15} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {produto.nome}
                    </p>

                    <p className="mt-0.5 text-[10px] text-gray-400">
                      SKU: {produto.sku || "—"} ·{" "}
                      Estoque: {produto.quantidade ?? 0} un.
                    </p>
                  </div>

                  {value?.id === produto.id && (
                    <Check
                      size={15}
                      className="text-emerald-500"
                    />
                  )}
                </button>
              ))
            ) : (
              <div className="px-3 py-6 text-center">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Nenhum produto encontrado.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {value && (
        <div className="mt-2">
          <div
            className="
              flex items-center justify-between
              rounded-lg border
              border-emerald-100
              bg-emerald-50/60
              px-3 py-2
              dark:border-emerald-500/15
              dark:bg-emerald-500/[0.04]
            "
          >
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                {value.nome}
              </p>

              <p className="mt-0.5 text-[10px] text-gray-400">
                SKU: {value.sku || "—"}
              </p>
            </div>

            <span className="shrink-0 text-xs font-bold text-gray-700 dark:text-gray-200">
              {value.quantidade ?? 0} un.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}