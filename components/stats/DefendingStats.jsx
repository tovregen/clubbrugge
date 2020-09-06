import BarChart from "./BarChart";

import { useMemo } from "react";

export default function DefendingStats({ stats, className, title }) {
  const data = useMemo(
    () => [
      { name: "Interceptions", total: stats.interceptions },
      { name: "Clearances", total: stats.clearances },
      { name: "Shots Blocked", total: stats.shotsBlocked },
      {
        name: "Aerial Duels",
        total: stats.aerialDuels,
        successful: stats.aerialDuelsWon,
      },
      {
        name: "Sliding Tackles",
        total: stats.slidingTackles,
        successful: stats.successfulSlidingTackles,
      },
      {
        name: "Dribbles Against",
        total: stats.dribblesAgainst,
        successful: stats.dribblesAgainstWon,
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
