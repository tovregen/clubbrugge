import { gql } from "apollo-server-micro";

export default gql`
  type Query {
    team(wyId: ID!): Team!
    player(wyId: ID!): Player!
  }

  type Team {
    wyId: ID!
    name: String!
    imageDataURL: String
    players: [Player!]!
  }

  type Player {
    wyId: ID!
    shortName: String!
    imageDataURL: String
    firstName: String!
    middleName: String
    lastName: String!
    height: Int!
    weight: Int!
    nationality: String!
    role: String!
    foot: String!
    team: Team
    stats(competitionId: ID, seasonId: ID): Stats
  }

  type Stats {
    average: Stat
    total: Stat
    percent: Stat
  }

  type Stat {
    matches: Float
    matchesInStart: Float
    matchesSubstituted: Float
    matchesComingOff: Float
    minutesOnField: Float
    minutesTagged: Float
    goals: Float
    assists: Float
    shots: Float
    headShots: Float
    yellowCards: Float
    redCards: Float
    directRedCards: Float
    penalties: Float
    linkupPlays: Float
    duels: Float
    duelsWon: Float
    defensiveDuels: Float
    defensiveDuelsWon: Float
    offensiveDuels: Float
    offensiveDuelsWon: Float
    aerialDuels: Float
    aerialDuelsWon: Float
    fouls: Float
    passes: Float
    successfulPasses: Float
    smartPasses: Float
    successfulSmartPasses: Float
    passesToFinalThird: Float
    successfulPassesToFinalThird: Float
    crosses: Float
    successfulCrosses: Float
    forwardPasses: Float
    successfulForwardPasses: Float
    backPasses: Float
    successfulBackPasses: Float
    throughPasses: Float
    successfulThroughPasses: Float
    keyPasses: Float
    successfulKeyPasses: Float
    verticalPasses: Float
    successfulVerticalPasses: Float
    longPasses: Float
    successfulLongPasses: Float
    dribbles: Float
    successfulDribbles: Float
    interceptions: Float
    defensiveActions: Float
    successfulDefensiveAction: Float
    attackingActions: Float
    successfulAttackingActions: Float
    freeKicks: Float
    freeKicksOnTarget: Float
    directFreeKicks: Float
    directFreeKicksOnTarget: Float
    corners: Float
    successfulPenalties: Float
    successfulLinkupPlays: Float
    accelerations: Float
    pressingDuels: Float
    pressingDuelsWon: Float
    looseBallDuels: Float
    looseBallDuelsWon: Float
    missedBalls: Float
    shotAssists: Float
    shotOnTargetAssists: Float
    recoveries: Float
    opponentHalfRecoveries: Float
    dangerousOpponentHalfRecoveries: Float
    losses: Float
    ownHalfLosses: Float
    dangerousOwnHalfLosses: Float
    xgShot: Float
    xgAssist: Float
    xgSave: Float
    receivedPass: Float
    touchInBox: Float
    progressiveRun: Float
    offsides: Float
    clearances: Float
    secondAssists: Float
    thirdAssists: Float
    shotsBlocked: Float
    foulsSuffered: Float
    progressivePasses: Float
    counterpressingRecoveries: Float
    slidingTackles: Float
    goalKicks: Float
    dribblesAgainst: Float
    dribblesAgainstWon: Float
    goalKicksShort: Float
    goalKicksLong: Float
    shotsOnTarget: Float
    successfulProgressivePasses: Float
    successfulSlidingTackles: Float
    successfulGoalKicks: Float
    fieldAerialDuels: Float
    fieldAerialDuelsWon: Float
    gkCleanSheets: Float
    gkConcededGoals: Float
    gkShotsAgainst: Float
    gkExits: Float
    gkSuccessfulExits: Float
    gkAerialDuels: Float
    gkAerialDuelsWon: Float
    gkSaves: Float
    newDuelsWon: Float
    newDefensiveDuelsWon: Float
    newOffensiveDuelsWon: Float
    newSuccessfulDribbles: Float
    lateralPasses: Float
    successfulLateralPasses: Float
  }
`;
