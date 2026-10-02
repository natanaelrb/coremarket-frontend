import { DollarSign } from "lucide-react";

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
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
          <span className="ml-1 text-emerald-500">*</span>
        )}
      </label>

      <div className="relative">
        <DollarSign
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id={name}
          name={name}
          type="number"
          min="0"
          step="0.01"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 dark:border-white/[0.08] dark:bg-[#111827] dark:text-white"
        />
      </div>
    </div>
  );
}

export function ProdutoPrecos({
  form,
  onChange,
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-white/[0.06] dark:bg-[#151c2b]">
      <div className="mb-5">
        <h2 className="text-sm font-bold text-slate-800 dark:text-white">
          Preços
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Defina os valores de compra e venda.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field
          label="Preço de compra"
          name="precoCompra"
          value={form.precoCompra}
          onChange={onChange}
          placeholder="0,00"
        />

        <Field
          label="Preço de venda"
          name="precoVenda"
          value={form.precoVenda}
          onChange={onChange}
          placeholder="0,00"
          required
        />
      </div>
    </section>
  );
}