import styles from "./stats.module.css";
import { withTranslation } from "../../i18n";

export default withTranslation("stats")(function StatsCard({
  stats = {},
  title = "",
  className,
  t
}) {
  const statsDiv = (
    <table className={styles.playerStats}>
      <tbody>
        {Object.keys(stats).map((stat) =>
          typeof stats[stat] !== "object" ? (
            <tr key={stat}>
              <td className={styles.playerStatLabel}>{t(stat)}</td>
              <td>{stats[stat]}</td>
            </tr>
          ) : (
            <></>
          )
        )}{" "}
      </tbody>
    </table>
  );

  return (
    <section className={className}>
      {title && <h3>{title}</h3>}
      <div className={styles.statsCard}>{statsDiv}</div>
    </section>
  );
});
