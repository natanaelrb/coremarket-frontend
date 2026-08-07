export default function TopbarPageInfo({
  icon: Icon,
  title,
  breadcrumb,
}) {
  return (
    <div className="flex items-center gap-4">

      {Icon && (
        <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white">
          <Icon size={22} />
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold">
          {title}
        </h1>

        <div className="flex gap-2 mt-1 text-sm text-slate-500">
          {breadcrumb.map((item, index) => (
            <span key={item}>
              {index > 0 && "› "}
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}