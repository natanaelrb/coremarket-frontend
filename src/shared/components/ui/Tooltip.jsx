import { useState } from 'react'

/** Minimal hover tooltip wrapper. */
export function Tooltip({ label, children }) {
  const [visible, setVisible] = useState(false)
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-slate-900 text-white text-xs px-2 py-1 shadow-lg animate-fade-in">
          {label}
        </span>
      )}
    </span>
  )
}
