import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { cn } from "../../utils/cn";

/** Painel flutuante ancorado em um elemento (renderiza em portal, escapa de overflow). */
export function Popover({
  anchorRef,
  open,
  onClose,
  align = "end",
  className,
  children,
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState(null);

  useEscapeKey(onClose, open);

  useLayoutEffect(() => {
    if (!open || !anchorRef.current) return undefined;
    const update = () => {
      const r = anchorRef.current.getBoundingClientRect();
      const w = ref.current?.offsetWidth ?? 0;
      const h = ref.current?.offsetHeight ?? 0;
      let top = r.bottom + 6;
      if (top + h > window.innerHeight - 8 && r.top - h - 6 > 8)
        top = r.top - h - 6;
      let left = align === "end" ? r.right - w : r.left;
      left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
      setPos({ top, left });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, anchorRef, align]);

  useLayoutEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (
        ref.current?.contains(e.target) ||
        anchorRef.current?.contains(e.target)
      )
        return;
      onClose?.();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, onClose, anchorRef]);

  if (!open) return null;
  return createPortal(
    <div
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      style={{
        top: pos?.top ?? 0,
        left: pos?.left ?? 0,
        visibility: pos ? "visible" : "hidden",
      }}
      className={cn(
        "fixed z-[90] origin-top rounded-xl border border-line bg-surface shadow-xl shadow-slate-900/10 animate-scale-in",
        className,
      )}
    >
      {children}
    </div>,
    document.body,
  );
}

