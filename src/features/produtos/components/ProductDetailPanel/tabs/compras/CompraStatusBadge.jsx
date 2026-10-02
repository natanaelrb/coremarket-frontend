export function CompraStatusBadge({ status }) {
  const isPending = status === "Pendente";

  return (
    <span
      className={[
        "inline-flex rounded-full px-2.5 py-1",
        "text-xs font-semibold",
        isPending
          ? "bg-amber-50 text-amber-700"
          : "bg-emerald-50 text-emerald-700",
      ].join(" ")}
    >
      {status}
    </span>
  );
}