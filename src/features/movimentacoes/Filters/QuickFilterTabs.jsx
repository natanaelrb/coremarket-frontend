import QuickFilterTab from './QuickFilterTab';

export default function QuickFilterTabs({ tabs, activeTab, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
      {tabs.map((tab) => (
        <QuickFilterTab
          key={tab.key}
          label={tab.label}
          count={tab.count}
          sign={tab.sign}
          isActive={activeTab === tab.key}
          onClick={() => onSelect(tab.key)}
        />
      ))}
    </div>
  );
}
