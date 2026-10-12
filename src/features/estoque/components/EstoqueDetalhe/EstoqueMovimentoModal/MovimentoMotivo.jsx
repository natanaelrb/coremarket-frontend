const MOTIVOS = [
  "Venda",
  "Perda",
  "Avaria",
  "Consumo interno",
  "Transferência",
  "Outro",
];

export default function MovimentoMotivo({
  value,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor="motivo"
        className="
          text-[10px] font-semibold uppercase
          tracking-[0.06em] text-gray-500
          dark:text-gray-400
        "
      >
        Motivo da saída
        <span className="ml-1 text-rose-500">*</span>
      </label>

      <select
        id="motivo"
        name="motivo"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          mt-1.5 h-11 w-full rounded-lg
          border border-gray-200 bg-white px-3
          text-sm font-medium text-gray-800
          outline-none transition-all duration-200
          focus:border-emerald-400
          focus:ring-2 focus:ring-emerald-500/15
          dark:border-white/10
          dark:bg-[#11142b]
          dark:text-gray-200
        "
      >
        {MOTIVOS.map((motivo) => (
          <option key={motivo} value={motivo}>
            {motivo}
          </option>
        ))}
      </select>
    </div>
  );
}