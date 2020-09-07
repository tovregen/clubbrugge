import { useMemo } from "react";
import BarChart from "./BarChart";
import { withTranslation } from "../../i18n";

export default withTranslation("common")(function GoalkeeperStats({
  stats,
  className,
  t,
}) {
  const data = useMemo(
    () => [
      { name: t("gkCleanSheets"), total: stats.gkCleanSheets },
      { name: t("gkConcededGoals"), total: stats.gkConcededGoals },
      { name: t("gkSaves"), total: stats.gkSaves },
      {
        name: t("gkAerialDuels"),
        total: stats.gkAerialDuels,
        successful: stats.gkAerialDuelsWon,
      },
      { name: t("goalKicksShort"), total: stats.goalKicksShort },
      { name: t("goalKicksLong"), total: stats.goalKicksLong },
    ],
    [stats]
  );

  return (
    <div className={className}>
      <h3>{t("goalkeeper")}</h3>

      <BarChart data={data} />
    </div>
  );
});
