import { CalendarDays, Truck } from "lucide-react";

const campo =
  "mt-1.5 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10 dark:border-white/10 dark:bg-[#111827] dark:text-slate-100";

const label =
  "block text-sm font-semibold text-slate-700 dark:text-slate-200";

export function FornecedorSection({ form }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-[#151b28] sm:p-5">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
          <Truck size={20} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">
            Dados da compra
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Informe o fornecedor e as datas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={label}>
          Fornecedor <span className="text-red-500">*</span>
          <select
            required
            value={form.fornecedorId}
            onChange={(event) => form.setFornecedorId(event.target.value)}
            className={campo}
          >
            <option value="">Selecione um fornecedor</option>
            {form.fornecedores.map((fornecedor) => (
              <option key={fornecedor.id} value={fornecedor.id}>
                {fornecedor.nome}
              </option>
            ))}
          </select>
        </label>

        <label className={label}>
          Forma de pagamento
          <select
            value={form.formaPagamento}
            onChange={(event) => form.setFormaPagamento(event.target.value)}
            className={campo}
          >
            <option value="BOLETO">Boleto</option>
            <option value="PIX">PIX</option>
            <option value="DINHEIRO">Dinheiro</option>
            <option value="CARTAO">Cartão</option>
            <option value="TRANSFERENCIA">Transferência</option>
            <option value="PRAZO">A prazo</option>
          </select>
        </label>

        <label className={label}>
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={15} className="text-green-600" />
            Data da compra
          </span>
          <input
            required
            type="date"
            value={form.dataCompra}
            onChange={(event) => form.setDataCompra(event.target.value)}
            className={campo}
          />
        </label>

        <label className={label}>
          Previsão de entrega
          <input
            type="date"
            min={form.dataCompra}
            value={form.previsaoEntrega}
            onChange={(event) => form.setPrevisaoEntrega(event.target.value)}
            className={campo}
          />
        </label>
      </div>
    </section>
  );
}
