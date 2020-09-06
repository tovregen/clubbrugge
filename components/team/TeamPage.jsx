import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import styles from "./team.module.css";
import PlayerCard from "../player/PlayerCard";
import Link from "next/link";
import Header from "../header/Header";

const TEAM_QUERY = gql`
  query team($wyId: ID!) {
    team(wyId: $wyId) {
      name
      imageDataURL
      players {
        shortName
        wyId
        imageDataURL
        role
        stats(seasonId: 185753, competitionId: 198) {
          total {
            matches
            goals
            xgShot
            assists
            xgAssist
            successfulKeyPasses
            gkSaves
            interceptions
            duelsWon
            gkCleanSheets
            gkConcededGoals
            dribbles
            fieldAerialDuelsWon
            recoveries
          }
        }
      }
    }
  }
`;

const generalStats = ["matches"];
const roleToStats = {
  Midfielder: [...generalStats, "assists", "xgAssist", "goals", "successfulKeyPasses"],
  Defender: [...generalStats, "interceptions", "recoveries", "duelsWon", "fieldAerialDuelsWon"],
  Forward: [...generalStats, "goals", "xgShot", "assists", "dribbles"],
  Goalkeeper: [...generalStats, "gkSaves", "gkCleanSheets"],
};

export default function TeamPage({ wyId }) {
  const { loading, error, data = { team: {} } } = useQuery(TEAM_QUERY, {
    variables: { wyId },
  });

  const { name, imageDataURL, players = [] } = data.team;

  return (
    <>
      <Head>
        <title>{loading ? "" : name}</title>
        <link rel="icon" href={imageDataURL || "/favicon.ico"} />
      </Head>
      <Header name={name} imageDataURL={imageDataURL}/>
      <div className={styles.teamGrid}>
        {players.map((player) => {
          const { role, shortName, imageDataURL, stats } = player;
          const statsToShow = roleToStats[role]?.reduce(
            (mem, stat) => ({ ...mem, [stat]: stats?.total?.[stat] }),
            {}
          );
          return (
            <Link
              key={player.wyId}
              href="/player/[wyId]"
              as={`/player/${player.wyId}`}
            >
              <a>
                <PlayerCard
                  shortName={shortName}
                  imageDataURL={imageDataURL}
                  stats={statsToShow}
                ></PlayerCard>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
