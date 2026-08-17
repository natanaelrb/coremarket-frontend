// Campo de busca por nome, código, SKU ou código de barras.
import { Search } from 'lucide-react';

export function SearchInput({ value, onChange }) {
  return (
    <div className="relative flex-1 min-w-[220px]">
      <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquisar produto..."
        className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 outline-none transition-colors duration-150 placeholder:text-gray-400 hover:border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-gray-700 dark:bg-[#151936] dark:text-gray-200 dark:hover:border-gray-600 dark:focus:ring-violet-500/20"
      />
    </div>
  );
}
