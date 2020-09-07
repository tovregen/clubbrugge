import TeamPage from '../components/team/TeamPage';

export default function Home() {
  return (
    <TeamPage wyId={5072}/>
  )
}


Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
