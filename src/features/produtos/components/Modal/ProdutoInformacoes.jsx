import {
  Barcode,
  Boxes,
  Building2,
  Tag,
} from "lucide-react";

import {
  CATEGORIAS,
  TIPOS,
  UNIDADES,
} from "../../constants/novoProduto.constants";

const INPUT =
  "h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 dark:border-white/[0.08] dark:bg-[#111827] dark:text-white dark:placeholder:text-slate-500";

const INPUT_ICON =
  "h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 dark:border-white/[0.08] dark:bg-[#111827] dark:text-white";

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300"
      >
        {label}

        {required && (
          <span className="ml-1 text-emerald-500">
            *
          </span>
        )}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={Icon ? INPUT_ICON : INPUT}
        />
      </div>
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  required,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300"
      >
        {label}

        {required && (
          <span className="ml-1 text-emerald-500">
            *
          </span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={INPUT}
      >
        <option value="">Selecione...</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ProdutoInformacoes({
  form,
  onChange,
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-white/[0.06] dark:bg-[#151c2b]">
      <div className="mb-5">
        <h2 className="text-sm font-bold text-slate-800 dark:text-white">
          Informações básicas
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Identificação e classificação do produto.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <Field
            label="Nome do produto"
            name="nome"
            value={form.nome}
            onChange={onChange}
            placeholder="Ex.: Coca-Cola 2L"
            icon={Tag}
            required
          />
        </div>

        <Field
          label="Código de barras"
          name="codigoBarras"
          value={form.codigoBarras}
          onChange={onChange}
          placeholder="Ex.: 7894900011517"
          icon={Barcode}
        />

        <Field
          label="SKU"
          name="sku"
          value={form.sku}
          onChange={onChange}
          placeholder="Ex.: COC-2L"
          icon={Boxes}
        />

        <Select
          label="Categoria"
          name="categoria"
          value={form.categoria}
          onChange={onChange}
          options={CATEGORIAS}
          required
        />

        <Field
          label="Marca"
          name="marca"
          value={form.marca}
          onChange={onChange}
          placeholder="Ex.: Coca-Cola"
        />

        <Field
          label="Fornecedor"
          name="fornecedor"
          value={form.fornecedor}
          onChange={onChange}
          placeholder="Ex.: Coca-Cola FEMSA"
          icon={Building2}
        />

        <Select
          label="Tipo"
          name="tipo"
          value={form.tipo}
          onChange={onChange}
          options={TIPOS}
        />

        <Select
          label="Unidade"
          name="unidade"
          value={form.unidade}
          onChange={onChange}
          options={UNIDADES}
          required
        />

        <Field
          label="NCM"
          name="ncm"
          value={form.ncm}
          onChange={onChange}
          placeholder="Ex.: 2202.10.00"
        />
      </div>
    </section>
  );
}