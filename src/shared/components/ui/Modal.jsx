import { useEffect } from "react";
import { X } from "lucide-react";

import { cn } from "../../utils/cn.js";
import IconButton from "../actions/IconButton.jsx";

/**
 * Centered modal dialog with backdrop, escape-to-close and scroll lock.
 * @param {{ open: boolean, onClose: () => void, title: string, subtitle?: string, children: import('react').ReactNode, footer?: import('react').ReactNode, size?: 'md'|'lg' }} props
 */
export function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = "md",
}) {
  useEffect(() => {
    if (!open) return undefined;

    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="
          absolute inset-0
          bg-slate-900/50
          backdrop-blur-sm
          animate-fade-in
          dark:bg-slate-950/70
        "
        onClick={onClose}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          `
            relative
            w-full
            animate-scale-in
            overflow-hidden
            rounded-2xl
            border border-slate-200
            bg-white
            shadow-[0_20px_50px_rgba(15,23,42,0.18)]
            dark:border-white/10
            dark:bg-slate-900
          `,
          size === "lg" ? "max-w-2xl" : "max-w-md"
        )}
      >
        {/* Header */}
        <div
          className="
            flex items-start justify-between
            border-b border-slate-200
            px-6 py-4
            dark:border-white/10
          "
        >
          <div>
            <h2 className="text-base font-semibold text-[#0f172a] dark:text-white">
              {title}
            </h2>

            {subtitle ? (
              <p className="mt-0.5 text-sm text-[#64748b] dark:text-slate-400">
                {subtitle}
              </p>
            ) : null}
          </div>

          <IconButton
            icon={X}
            label="Fechar"
            onClick={onClose}
          />
        </div>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          {children}
        </div>

        {/* Footer */}
        {footer ? (
          <div
            className="
              flex items-center justify-end gap-2
              border-t border-slate-200
              bg-slate-50/50
              px-6 py-4
              dark:border-white/10
              dark:bg-white/[0.02]
            "
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}