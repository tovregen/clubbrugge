import clsx from "clsx";
import generalStyles from "../../styles/general.module.css";
import styles from "./player.module.css";
import StatsCard from "../stats/StatsCard";
export default function PlayerCard({
  imageDataURL,
  firstName,
  middleName,
  lastName,
  shortName,
  wyId,
  role,
  height,
  weight,
  nationality,
  foot,
  stats = {},
}) {
  const additionalInfo = [
    nationality,
    role,
    foot,
    height && `${height / 100}m`,
    weight && `${weight}kg`,
  ]
    .filter((x) => x)
    .join(" - ");


  return (
    <div className={clsx(styles.playerGridItem, generalStyles.paper)}>
      <div className={styles.playerInfo}>
        <div
          className={styles.playerImg}
          style={{ backgroundImage: `url(${imageDataURL})` }}
        ></div>

        <div className={styles.nameArea}>
          {firstName && lastName ? `${firstName} ${lastName}` : shortName || ""}
        </div>
        {additionalInfo && (
          <div className={styles.additionalInfo}>{additionalInfo}</div>
        )}
      </div>
      {Object.keys(stats).length > 0 && (
        <StatsCard className={styles.playerStats} stats={stats}></StatsCard>
      )}
    </div>
  );
}
