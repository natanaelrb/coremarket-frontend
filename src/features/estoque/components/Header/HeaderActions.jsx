import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '../../../../shared/components/ui/Button.jsx'
import {
  PRIMARY_HEADER_ACTIONS,
  SECONDARY_HEADER_ACTIONS,
} from '../../constants/headerActionsConfig.js'

export default function HeaderActions({ onAction }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSecondaryAction = (action) => {
    onAction(action)
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Ações principais */}
      {PRIMARY_HEADER_ACTIONS.map(({ action, label, icon, variant }) => (
        <Button
          key={action}
          icon={icon}
          variant={variant}
          onClick={() => onAction(action)}
        >
          {label}
        </Button>
      ))}

      {/* Mais ações */}
      <div className="relative">
        <Button
          variant="secondary"
          size="md"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="gap-2"
        >
          Mais ações
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>

        {isMenuOpen && (
          <div
            className="
              absolute right-0 z-50 mt-2 w-52
              overflow-hidden rounded-xl
              border border-slate-200
              bg-white
              p-1.5
              shadow-lg shadow-slate-900/10
              animate-fade-in
              dark:border-white/10
              dark:bg-[#151936]
              dark:shadow-black/30
            "
          >
            {SECONDARY_HEADER_ACTIONS.map(({ action, label, icon: Icon }) => (
              <button
                key={action}
                type="button"
                onClick={() => handleSecondaryAction(action)}
                className="
                  flex w-full items-center gap-2.5
                  rounded-lg px-3 py-2
                  text-left text-sm font-medium
                  text-slate-700
                  transition-colors
                  hover:bg-slate-100
                  dark:text-slate-200
                  dark:hover:bg-white/5
                "
              >
                <Icon
                  size={16}
                  className="shrink-0 text-slate-500 dark:text-slate-400"
                />

                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}