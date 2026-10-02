import { Boxes } from "lucide-react";

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300"
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <Boxes
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          id={name}
          name={name}
          type="number"
          min="0"
          step="0.01"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-10 w-full rounded-lg border border-slate-200 bg-white pr-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/10 dark:border-white/[0.08] dark:bg-[#111827] dark:text-white ${
            icon ? "pl-9" : "pl-3"
          }`}
        />
      </div>
    </div>
  );
}

export function ProdutoEstoque({
  form,
  onChange,
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-white/[0.06] dark:bg-[#151c2b]">
      <div className="mb-5">
        <h2 className="text-sm font-bold text-slate-800 dark:text-white">
          Estoque
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Configure a quantidade inicial e os limites de estoque.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Field
          label="Estoque inicial"
          name="estoque"
          value={form.estoque}
          onChange={onChange}
          placeholder="0"
          icon
        />

        <Field
          label="Estoque mínimo"
          name="estoqueMinimo"
          value={form.estoqueMinimo}
          onChange={onChange}
          placeholder="0"
        />

        <Field
          label="Estoque máximo"
          name="estoqueMaximo"
          value={form.estoqueMaximo}
          onChange={onChange}
          placeholder="0"
        />
      </div>
    </section>
  );
}