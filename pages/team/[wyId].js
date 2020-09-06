import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import TeamPage from "../../components/team/TeamPage";



export default function Team() {
  const router = useRouter();
  const { wyId } = router.query;

  return <> {wyId && <TeamPage wyId={wyId} />}</>;
}
