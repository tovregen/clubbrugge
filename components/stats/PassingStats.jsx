import { useMemo } from "react";
import BarChart from "./BarChart";

export default function PassingStats({ stats, className, title }) {
  const data = useMemo(
    () => [
      {
        name: "Passes",
        total: stats.passes,
        successful: stats.successfulPasses,
      },
      {
        name: "Forward Passes",
        total: stats.forwardPasses,
        successful: stats.successfulForwardPasses,
      },
      {
        name: "Back Passes",
        total: stats.backPasses,
        successful: stats.successfulBackPasses,
      },
      {
        name: "Through Balls",
        total: stats.throughPasses,
        successful: stats.successfulThroughPasses,
      },
      {
        name: "Vertical Passes",
        total: stats.verticalPasses,
        successful: stats.successfulVerticalPasses,
      },
      {
        name: "Long Balls",
        total: stats.longPasses,
        successful: stats.successfulLongPasses,
      },
      {
        name: "Lateral Passes",
        total: stats.lateralPasses,
        successful: stats.successfulLateralPasses,
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
