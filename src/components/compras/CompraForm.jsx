import Input from "../ui/Input";

const STATUS_COMPRA_OPTIONS = [
  { value: "PENDENTE", label: "Pendente" },
  { value: "ENTREGUE", label: "Entregue" },
  { value: "EM_TRANSITO", label: "Em trânsito" },
  { value: "CANCELADA", label: "Cancelada" },
];

const STATUS_PAGAMENTO_OPTIONS = [
  { value: "PENDENTE", label: "Pendente" },
  { value: "PAGO", label: "Pago" },
  { value: "PARCIAL", label: "Parcial" },
  { value: "VENCIDO", label: "Vencido" },
];

const FORMA_PAGAMENTO_OPTIONS = [
  { value: "DINHEIRO", label: "Dinheiro" },
  { value: "CARTAO", label: "Cartão" },
  { value: "PIX", label: "Pix" },
  { value: "FIADO", label: "Fiado" },
  { value: "TRANSFERENCIA", label: "Transferência" },
];

const selectClass = `
  w-full rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-white/5
  text-sm text-slate-800 dark:text-[var(--sidebar-text)]/90
  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/30
  focus:border-violet-400 hover:border-slate-300 dark:hover:border-white/20 transition duration-150
`;

export default function CompraForm({
  dados,
  onChange,
  clientes = [],
  errors = {},
}) {
  function handle(campo) {
    return (e) => onChange({ ...dados, [campo]: e.target.value });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-600 dark:text-[var(--sidebar-text)]/60">
          Cliente *
        </label>
        <select
          value={dados.clienteId || ""}
          onChange={handle("clienteId")}
          className={selectClass}
        >
          <option value="">Selecione um cliente</option>
          {clientes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </select>
        {errors.clienteId && (
          <p className="text-xs text-red-500">{errors.clienteId}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Valor total (R$) *"
          type="number"
          placeholder="0,00"
          min="0"
          step="0.01"
          value={dados.valorTotal || ""}
          onChange={handle("valorTotal")}
          error={errors.valorTotal}
        />
        <Input
          label="Valor pago (R$)"
          type="number"
          placeholder="0,00"
          min="0"
          step="0.01"
          value={dados.valorPago || ""}
          onChange={handle("valorPago")}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-600 dark:text-[var(--sidebar-text)]/60">
            Forma de pagamento *
          </label>
          <select
            value={dados.formaPagamento || ""}
            onChange={handle("formaPagamento")}
            className={selectClass}
          >
            <option value="">Selecione</option>
            {FORMA_PAGAMENTO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.formaPagamento && (
            <p className="text-xs text-red-500">{errors.formaPagamento}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-600 dark:text-[var(--sidebar-text)]/60">
            Status pagamento
          </label>
          <select
            value={dados.statusPagamento || ""}
            onChange={handle("statusPagamento")}
            className={selectClass}
          >
            <option value="">Selecione</option>
            {STATUS_PAGAMENTO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-600 dark:text-[var(--sidebar-text)]/60">
            Status da compra
          </label>
          <select
            value={dados.status || ""}
            onChange={handle("status")}
            className={selectClass}
          >
            <option value="">Selecione</option>
            {STATUS_COMPRA_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <Input
          label="Data de vencimento"
          type="date"
          value={dados.dataVencimento || ""}
          onChange={handle("dataVencimento")}
        />
      </div>
    </div>
  );
}
