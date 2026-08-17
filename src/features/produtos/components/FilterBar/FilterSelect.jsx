// Combinação label + Select, usada para cada filtro simples da barra (Categoria, Fornecedor...).
import { Select } from '../../../../shared/components/ui/Select';

export function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="min-w-[140px] flex-1">
      <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">{label}</label>
      <Select value={value} onChange={onChange} options={options} ariaLabel={label} />
    </div>
  );
}
