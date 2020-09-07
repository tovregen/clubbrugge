import { useMemo } from "react";
import BarChart from "./BarChart";
import { withTranslation } from "../../i18n";

export default withTranslation("common")(function PassingStats({ stats, className, title, t }) {
  const data = useMemo(
    () => [
      {
        name: t("passes"),
        total: stats.passes,
        successful: stats.successfulPasses,
      },
      {
        name: t("forwardPasses"),
        total: stats.forwardPasses,
        successful: stats.successfulForwardPasses,
      },
      {
        name: t("backPasses"),
        total: stats.backPasses,
        successful: stats.successfulBackPasses,
      },
      {
        name: t("throughPasses"),
        total: stats.throughPasses,
        successful: stats.successfulThroughPasses,
      },
      {
        name: t("verticalPasses"),
        total: stats.verticalPasses,
        successful: stats.successfulVerticalPasses,
      },
      {
        name: t("longPasses"),
        total: stats.longPasses,
        successful: stats.successfulLongPasses,
      },
      {
        name: t("lateralPasses"),
        total: stats.lateralPasses,
        successful: stats.successfulLateralPasses,
      },
    ],
    [stats]
  );

  return (
    <div className={className}>
      <h3>{t("passing")}</h3>

      <BarChart data={data} />
    </div>
  );
})
