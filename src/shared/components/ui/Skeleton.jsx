/**
 * Bloco de esqueleto animado (shimmer) para estados de carregamento.
 * @param {{ className?: string }} props
 */
export function Skeleton({ className = '' }) {
  return (
    <div
      className={`
        rounded-md bg-gradient-to-r from-cm-surface-hover via-cm-border to-cm-surface-hover
        bg-[length:400px_100%] animate-shimmer ${className}
      `}
    />
  );
}
