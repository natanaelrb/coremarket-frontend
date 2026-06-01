export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </h2>
        </div>

        <div className="bg-purple-100 p-3 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}