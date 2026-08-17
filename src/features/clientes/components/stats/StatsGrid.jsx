import StatCard from "./StatCard";
import { buildStatsConfig } from "../../constants/statsConfig";

export default function StatsGrid({ stats }) {
  const cards = buildStatsConfig(stats);

  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-6
      gap-4
      mb-7
    ">
      {cards.map(({ key, ...card }, i) => (
        <StatCard
          key={key}
          {...card}
          delay={i * 60}
        />
      ))}
    </div>
  );
}