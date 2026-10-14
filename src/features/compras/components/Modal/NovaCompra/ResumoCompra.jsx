
import { Calculator, ReceiptText } from "lucide-react";

const moeda = (valor) =>
  Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const campo =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 dark:border-white/10 dark:bg-[#111827] dark:text-white";

function ValorAdicional({ label, value, onChange }) {
  return (
    <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">
      {label}
      <input
        type="number"
        min="0"
        step="0.01"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={campo}
      />
    </label>
  );
}

export function ResumoCompra({ form }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-[#151b28] sm:p-5">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
          <Calculator size={20} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">
            Resumo financeiro
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Confira os valores antes de registrar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ValorAdicional
          label="Desconto (R$)"
          value={form.desconto}
          onChange={form.setDesconto}
        />
        <ValorAdicional
          label="Frete (R$)"
          value={form.frete}
          onChange={form.setFrete}
        />
        <ValorAdicional
          label="Outras despesas (R$)"
          value={form.outrasDespesas}
          onChange={form.setOutrasDespesas}
        />
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-600 dark:text-slate-300">
        Observações
        <textarea
          rows={3}
          maxLength={1000}
          value={form.observacoes}
          onChange={(event) => form.setObservacoes(event.target.value)}
          placeholder="Informações adicionais sobre esta compra..."
          className={`${campo} resize-y`}
        />
      </label>

      <div className="mt-5 rounded-xl border border-green-200 bg-green-50/80 p-4 dark:border-green-500/20 dark:bg-green-500/[0.06]">
        <div className="flex items-center gap-2 text-sm font-semibold text-green-800 dark:text-green-300">
          <ReceiptText size={17} />
          Valores da compra
        </div>

        <div className="mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between gap-4 text-slate-600 dark:text-slate-300">
            <span>Subtotal dos produtos</span>
            <span>{moeda(form.subtotal)}</span>
          </div>
          <div className="flex justify-between gap-4 text-slate-600 dark:text-slate-300">
            <span>Desconto</span>
            <span className="text-green-700 dark:text-green-400">
              − {moeda(form.valorDesconto)}
            </span>
          </div>
          <div className="flex justify-between gap-4 text-slate-600 dark:text-slate-300">
            <span>Frete</span>
            <span>{moeda(form.valorFrete)}</span>
          </div>
          <div className="flex justify-between gap-4 text-slate-600 dark:text-slate-300">
            <span>Outras despesas</span>
            <span>{moeda(form.valorOutrasDespesas)}</span>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-green-200 pt-3 dark:border-green-500/20">
            <span className="font-bold text-slate-900 dark:text-white">
              Total da compra
            </span>
            <span className="text-xl font-extrabold text-green-700 dark:text-green-400">
              {moeda(form.total)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
