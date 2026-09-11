export default function DashboardCard({
  children,
  className = "",
  style,
  as: Tag = "div",
  ...rest
}) {
  return (
    <Tag
      className={`
        rounded-2xl
        border
        border-[var(--border-subtle)]
        bg-[var(--bg-surface)]
        shadow-[0_2px_10px_rgba(15,23,42,0.04)]
        transition-all
        duration-200
        ${className}
      `}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}