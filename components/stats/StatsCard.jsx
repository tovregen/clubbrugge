import styles from "./stats.module.css";
import clsx from "clsx";
export default function StatsCard({
  stats = {},
  title = "",
  className,
  columns = 1,
}) {
  const statsDiv = Object.keys(stats)
    .reduce((acc, key, i) => {
      let x = i % columns;
      if (!acc[x]) {
        acc[x] = [];
      }
      acc[x].push(key);
      return acc;
    }, [])
    .map((x) => (
      <table className={styles.playerStats}>
        <tbody>
          {x.map((stat) =>
            typeof stats[stat] !== "object" ? (
              <tr key={stat}>
                <td className={styles.playerStatLabel}>{stat}</td>
                <td>{stats[stat]}</td>
              </tr>
            ) : (
              <></>
            )
          )}
        </tbody>
      </table>
    ));

  return (
    <section className={className}>
      {title && <h3>{title}</h3>}
      <div
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        className={clsx(styles.statsCard)}
      >
        {statsDiv.length > 0 && statsDiv}
      </div>
    </section>
  );
}
