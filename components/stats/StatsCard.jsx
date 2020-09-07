import { withTranslation } from '../../i18n';
import styles from "./stats.module.css";

export default withTranslation("common")(function StatsCard({ stats = {}, title = "", className, t }) {
  const statsDiv = (
    <table className={styles.playerStats}>
      <tbody>
        {Object.keys(stats).map((stat) =>
          typeof stats[stat] !== "object" ? (
            <tr key={stat}>
              <td className={styles.playerStatNumber}>{stats[stat]}</td>
              <td className={styles.playerStatLabel}>{t(stat)}</td>
            </tr>
          ) : (
            <></>
          )
        )}
      </tbody>
    </table>
  );

  return (
    <section className={className}>
      {title && <h3>{title}</h3>}
      <div className={styles.statsCard}>{statsDiv}</div>
    </section>
  );
})
