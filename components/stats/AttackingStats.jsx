import { useMemo } from "react";
import BarChart from "./BarChart";
import { withTranslation } from "../../i18n";

export default withTranslation("common")(function AttackingStats({
  stats,
  className,
  t
}) {
  const data = useMemo(
    () => [
      { name: t("goals"), total: stats.goals },
      { name: t("assists"), total: stats.assists },
      {
        name: t("penalties"),
        total: stats.penalties,
        successful: stats.successfulPenalties,
      },
      {
        name: t("crosses"),
        total: stats.crosses,
        successful: stats.successfulCrosses,
      },
      {
        name: t("keyPasses"),
        total: stats.keyPasses,
        successful: stats.successfulKeyPasses,
      },
    ],
    [stats]
  );

  return (
    <div className={className}>
      <h3>{t("offense")}</h3>

      <BarChart data={data} />
    </div>
  );
});
