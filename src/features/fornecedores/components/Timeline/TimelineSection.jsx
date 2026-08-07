import TimelineTabsNav from './TimelineTabsNav.jsx'
import TimelineList from './TimelineList.jsx'

export default function TimelineSection({ activeSidePanel, onChangeSidePanel, detalhe }) {
  return (
    <div className="animate-fade-in-up stagger-4 flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-[#1c2044] dark:bg-[#141833]">
      <TimelineTabsNav activeSidePanel={activeSidePanel} onChangeSidePanel={onChangeSidePanel} />
      <div className="p-4">
        {activeSidePanel === 'timeline' && <TimelineList items={detalhe.timeline} />}
        {activeSidePanel !== 'timeline' && (
          <p className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">
            Nenhum registro disponível ainda.
          </p>
        )}
      </div>
    </div>
  )
}
