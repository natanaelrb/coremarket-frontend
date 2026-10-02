import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { cn } from "../../utils/cn.js";
import IconButton from "../actions/IconButton.jsx";

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
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const isFull = size === "full";

  const modal = (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        h-[100dvh]
        w-[100vw]
        items-center
        justify-center
        p-5
        sm:p-6
      "
    >
      {/* =========================================================
          OVERLAY — COBRE A TELA INTEIRA
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          h-full
          w-full
          bg-slate-950/65
          backdrop-blur-md
          animate-modal-overlay
        "
        onClick={onClose}
        aria-hidden="true"
      />

      {/* =========================================================
          RETÂNGULO CENTRAL DO MODAL
      ========================================================= */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={cn(
          `
            relative
            z-10
            h-[90vh]
            w-[60vw]
            max-w-[1000px]
            flex
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-[0_24px_80px_rgba(15,23,42,0.28)]
            animate-modal-enter
            dark:border-white/10
            dark:bg-slate-900
            dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)]
          `,

          /* MODAL FULL */
          isFull &&
            `
              h-[82vh]
              max-h-[900px]
              w-[85vw]
              max-w-[1100px]
            `,

          /* MODAL NORMAL */
          !isFull &&
            `
              h-auto
              max-h-[calc(100dvh-2rem)]
              w-[calc(100vw-2rem)]
              max-w-md
            `,

          /* MODAL LG */
          size === "lg" &&
            !isFull &&
            `
              max-w-3xl
            `
        )}
      >
        {/* =========================================================
            IDENTIDADE COREMARKET
        ========================================================= */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            z-20
            h-1
            bg-gradient-to-r
            from-emerald-500
            via-green-500
            to-amber-400
          "
          aria-hidden="true"
        />

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div
          className="
            flex
            shrink-0
            items-start
            justify-between
            border-b
            border-slate-200
            bg-white
            px-6
            py-5
            dark:border-white/10
            dark:bg-slate-900
            sm:px-8
          "
        >
          <div className="flex min-w-0 items-start gap-3">
            <div
              className="
                mt-0.5
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-emerald-50
                text-emerald-600
                ring-1
                ring-emerald-100
                dark:bg-emerald-500/10
                dark:text-emerald-400
                dark:ring-emerald-500/20
              "
            >
              <span className="h-2 w-2 rounded-full bg-current" />
            </div>

            <div className="min-w-0">
              <h2
                id="modal-title"
                className="
                  text-base
                  font-semibold
                  tracking-[-0.01em]
                  text-slate-900
                  dark:text-white
                "
              >
                {title}
              </h2>

              {subtitle ? (
                <p
                  className="
                    mt-1
                    text-sm
                    leading-5
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>

          <IconButton
            icon={X}
            label="Fechar"
            onClick={onClose}
          />
        </div>

        {/* =========================================================
            CONTEÚDO — SOMENTE ESTA ÁREA ROLA
        ========================================================= */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-6
            py-7
            scrollbar-thin
            scrollbar-thumb-slate-300
            scrollbar-track-transparent
            dark:scrollbar-thumb-slate-700
            sm:px-8
            lg:px-10
          "
        >
          {children}
        </div>

        {/* =========================================================
            FOOTER FIXO
        ========================================================= */}
        {footer ? (
          <div
            className="
              flex
              shrink-0
              items-center
              justify-end
              gap-3
              border-t
              border-slate-200
              bg-slate-50
              px-6
              py-4
              dark:border-white/10
              dark:bg-slate-900
              sm:px-8
            "
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}