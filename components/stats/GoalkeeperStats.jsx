import { useMemo } from "react";
import BarChart from "./BarChart";

export default function GoalkeeperStats({ stats, className, title }) {
  const data = useMemo(
    () => [
      { name: "Clean Sheets", total: stats.gkCleanSheets },
      { name: "Conceded", total: stats.gkConcededGoals },
      { name: "Saves", total: stats.gkSaves },
      {
        name: "Aerial Duels",
        total: stats.gkAerialDuels,
        successful: stats.gkAerialDuelsWon,
      },
      { name: "Short Kicks", total: stats.goalKicksShort },
      { name: "Long Kicks", total: stats.goalKicksLong },

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
