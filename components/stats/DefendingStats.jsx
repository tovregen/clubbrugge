import BarChart from "./BarChart";

import { useMemo } from "react";
import { withTranslation } from "../../i18n";

export default withTranslation("common")(function DefendingStats({ stats, className, t }) {
  const data = useMemo(
    () => [
      { name: t("interceptions"), total: stats.interceptions },
      { name: t("clearances"), total: stats.clearances },
      { name: "Shots Blocked", total: stats.shotsBlocked },
      {
        name: t("aerialDuels"),
        total: stats.aerialDuels,
        successful: stats.aerialDuelsWon,
      },
      {
        name: t("slidingTackles"),
        total: stats.slidingTackles,
        successful: stats.successfulSlidingTackles,
      },
      {
        name: t("dribblesAgainst"),
        total: stats.dribblesAgainst,
        successful: stats.dribblesAgainstWon,
      },
    ],
    [stats]
  );

  return (
    <div className={className}>
      <h3>{t("defense")}</h3>
      <BarChart data={data} />
    </div>
  );
})
