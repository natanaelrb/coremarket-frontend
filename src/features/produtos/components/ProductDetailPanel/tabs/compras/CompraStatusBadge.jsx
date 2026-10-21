export function CompraStatusBadge({ status }) {
  const isPending = status === "Pendente";

  return (
    <span
      className={[
        "inline-flex rounded-full px-2.5 py-1",
        "text-xs font-semibold",
        isPending
          ? "bg-amber-50 text-amber-700"
          : "bg-green-50 text-green-700",
      ].join(" ")}
    >
      {status}
    </span>
  );
}