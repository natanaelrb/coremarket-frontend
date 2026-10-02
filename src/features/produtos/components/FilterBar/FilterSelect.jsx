// Combinação label + Select, usada para cada filtro simples da barra.
import { Select } from '../../../../shared/components/ui/Select';

export function FilterSelect({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div className="min-w-0 w-full">
      <label
        className="
          mb-1.5 block
          truncate
          text-[11px] font-semibold uppercase
          tracking-[0.03em]
          text-slate-500
          dark:text-slate-400
        "
        title={label}
      >
        {label}
      </label>

      <div className="w-full">
        <Select
          value={value}
          onChange={onChange}
          options={options}
          ariaLabel={label}
        />
      </div>
    </div>
  );
}