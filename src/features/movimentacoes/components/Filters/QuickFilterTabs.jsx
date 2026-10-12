import QuickFilterTab from './QuickFilterTab';

const TAB_TYPES = {
  TODAS: 'todos',
  ENTRADA: 'entradas',
  SAIDA: 'saidas',
  AJUSTE_POSITIVO: 'ajustes',
  AJUSTE_NEGATIVO: 'ajustes',
  TRANSFERENCIA: 'transferencia',
  DEVOLUCAO_CLIENTE: 'devolucao',
  PERDA: 'perdas',
  INVENTARIO: 'inventario',
};

export default function QuickFilterTabs({
  tabs,
  activeTab,
  onSelect,
}) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-1.5
        overflow-x-auto
        rounded-xl
        border border-slate-200
        bg-white
        p-1.5
        shadow-sm
        shadow-slate-900/[0.03]
        scrollbar-thin
      "
    >
      {tabs.map((tab) => (
        <QuickFilterTab
          key={tab.key}
          label={tab.label}
          count={tab.count}
          sign={tab.sign}
          type={TAB_TYPES[tab.key] || 'todos'}
          isActive={activeTab === tab.key}
          onClick={() => onSelect(tab.key)}
        />
      ))}
    </div>
  );
}