import styles from "./stats.module.css";
export default function StatsCard({ stats = {}, title = "", className }) {
  const statsDiv = (
    <table className={styles.playerStats}>
      <tbody>
        {Object.keys(stats).map((stat) =>
          typeof stats[stat] !== "object" ? (
            <tr key={stat}>
              <td className={styles.playerStatNumber}>{stats[stat]}</td>
              <td className={styles.playerStatLabel}>{stat}</td>
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
}
