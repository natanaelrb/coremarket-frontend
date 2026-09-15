import { SearchToolbarRow } from './SearchToolbarRow.jsx'

/** Composes the search + quick-filters + actions toolbar above the table. */
export function FiltersToolbar(props) {
  return (
    <div className="animate-slide-up" style={{ animationDelay: '140ms', animationFillMode: 'backwards' }}>
      <SearchToolbarRow {...props} />
    </div>
  )
}
