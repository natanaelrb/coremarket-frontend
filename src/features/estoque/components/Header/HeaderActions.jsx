import { Button } from "../../../../shared/components/ui/Button.jsx";
import { PRIMARY_HEADER_ACTIONS, SECONDARY_HEADER_ACTIONS } from '../../constants/headerActionsConfig.js'

/**
 * Renders the two rows/groups of header buttons declared in
 * headerActionsConfig.js, delegating clicks to the page-level handler.
 */
export default function HeaderActions({ onAction }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {PRIMARY_HEADER_ACTIONS.map(({ action, label, icon, variant }) => (
        <Button key={action} icon={icon} variant={variant} onClick={() => onAction(action)}>
          {label}
        </Button>
      ))}
      <div className="mx-1 hidden h-6 w-px bg-gray-200 dark:bg-[#2A2E4A] sm:block" />
      {SECONDARY_HEADER_ACTIONS.map(({ action, label, icon }) => (
        <Button key={action} icon={icon} variant="outline" size="sm" onClick={() => onAction(action)}>
          {label}
        </Button>
      ))}
    </div>
  )
}
