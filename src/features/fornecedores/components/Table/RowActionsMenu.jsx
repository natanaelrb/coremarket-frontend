import { useEffect, useRef, useState } from 'react'
import { MoreVertical, Eye, Pencil, Ban, Trash2 } from 'lucide-react'

export default function RowActionsMenu({ fornecedor }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const actions = [
    { icon: Eye, label: 'Ver detalhes' },
    { icon: Pencil, label: 'Editar' },
    { icon: Ban, label: 'Bloquear' },
    { icon: Trash2, label: 'Excluir', danger: true },
  ]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-[#1f234a] dark:hover:text-gray-200"
      >
        <MoreVertical size={16} />
      </button>

      {isOpen && (
        <div className="animate-scale-in absolute right-0 top-9 z-10 w-44 origin-top-right overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-lg dark:border-[#252a4a] dark:bg-[#1a1e3d]">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={() => setIsOpen(false)}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                action.danger
                  ? 'text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-[#212549]'
              }`}
            >
              <action.icon size={14} />
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
