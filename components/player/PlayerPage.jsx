import { gql, useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import PlayerCard from "./PlayerCard";
import styles from "./player.module.css";
import generalStyles from "../../styles/general.module.css";
import StatsCard from "../stats/StatsCard";
import {
  attackingStats,
  generalStats,
  defensiveStats,
  passingStats,
  goalkeeperStats,
  disciplinaryStats,
} from "../../Constants";
import Header from "../header/Header";
import _ from "lodash";
const PLAYER_QUERY = gql`
  query player($wyId: ID!) {
    player(wyId: $wyId) {
      firstName
      lastName
      middleName
      imageDataURL
      height
      weight
      nationality
      role
      foot
      team {
        imageDataURL
        name
      }
      stats(seasonId: 185753, competitionId: 198) {
        total {
          ...stats
        }
      }
    }
  }

  fragment stats on Stat {
    ${_.uniq([
      ...attackingStats,
      ...generalStats,
      ...defensiveStats,
      ...passingStats,
      ...goalkeeperStats,
      ...disciplinaryStats
    ]).join("\n")}
  }
`;
const getStats = (keys, object) =>
  keys.reduce((mem, val) => ({ ...mem, [val]: object[val] }), {});
export default function ({ wyId }) {
  const { loading, error, data = { team: {} } } = useQuery(PLAYER_QUERY, {
    variables: { wyId },
  });

  const {
    generalStatsObject,
    attackingStatsObject,
    defensiveStatsObject,
    passingStatsObject,
    goalkeeperStatsObject,
    disciplinaryStatsObject,
  } = useMemo(() => {
    const total = data?.player?.stats?.total;
    if (!total) {
      return {};
    }
    return {
      generalStatsObject: getStats(generalStats, total),
      attackingStatsObject: getStats(attackingStats, total),
      defensiveStatsObject: getStats(defensiveStats, total),
      passingStatsObject: getStats(passingStats, total),
      goalkeeperStatsObject: getStats(goalkeeperStats, total),
      disciplinaryStatsObject: getStats(disciplinaryStats, total),
    };
  }, [data]);
  if (loading) {
    return <></>;
  }
  return (
    <>
      <Header
        name={data.player.team.name}
        imageDataURL={data.player.team.imageDataURL}
      ></Header>
      <div className={styles.root}>
        <div className={styles.generalInfoSection}>
          <PlayerCard {...data.player} stats={{}} />
          <StatsCard
            title="General"
            className={generalStyles.paper}
            stats={generalStatsObject}
          ></StatsCard>
          <StatsCard
            title="Disciplinary"
            className={generalStyles.paper}
            stats={disciplinaryStatsObject}
          ></StatsCard>
        </div>
        <div className={styles.statsSection}>
          <StatsCard
            className={generalStyles.paper}
            stats={attackingStatsObject}
            columns={2}
            title="Attacking"
          ></StatsCard>
          <StatsCard
            className={generalStyles.paper}
            stats={defensiveStatsObject}
            columns={2}
            title="Defending"
          ></StatsCard>
          <StatsCard
            className={generalStyles.paper}
            stats={passingStatsObject}
            columns={2}
            title="Passing"
          ></StatsCard>
          <StatsCard
            className={generalStyles.paper}
            stats={goalkeeperStatsObject}
            columns={2}
            title="Goalkeeper"
          ></StatsCard>
        </div>
      </div>
    </>
  );
}
