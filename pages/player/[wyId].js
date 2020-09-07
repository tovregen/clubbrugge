import { useRouter } from "next/router";
import React from "react";
import PlayerStats from "../../components/player/PlayerPage";


export default function Player({}) {
  const router = useRouter();
  let { wyId } = router.query;

  return (
    <>{wyId && <PlayerStats wyId={wyId} />}</>
  );
}


Player.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

