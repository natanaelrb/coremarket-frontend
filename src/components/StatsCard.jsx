export default function StatsCard({ title, value, icon, change }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">{value}</h2>

          <p className="text-green-500 text-sm mt-2">{change}</p>
        </div>

        <div className="bg-purple-100 p-3 rounded-xl">{icon}</div>
      </div>
    </div>
  );
}
