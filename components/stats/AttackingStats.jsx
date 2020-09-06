import { useMemo } from "react";
import BarChart from "./BarChart";

export default function AttackingStats({ stats, className, title }) {
  const data = useMemo(
    () => [
      { name: "Goals", total: stats.goals },
      { name: "Assists", total: stats.assists },
      {
        name: "Penalties",
        total: stats.penalties,
        successful: stats.successfulPenalties,
      },
      {
        name: "Crosses",
        total: stats.crosses,
        successful: stats.successfulCrosses,
      },
      {
        name: "Key Passes",
        total: stats.keyPasses,
        successful: stats.successfulKeyPasses,
      },
    ],
    [stats]
  );

  return (
    <div className={className}>
      {title && <h3>{title}</h3>}

      <BarChart data={data} />
    </div>
  );
}
