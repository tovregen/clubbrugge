const AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCES_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});
const docClient = new AWS.DynamoDB.DocumentClient();

const teamById = (wyId) =>
  new Promise((resolve, reject) => {
    docClient.get(
      {
        TableName: "Teams",
        Key: {
          wyId: parseInt(wyId),
        },
      },
      (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data.Item);
        }
      }
    );
  });

const playerById = (wyId) =>
  new Promise((resolve, reject) => {
    docClient.get(
      {
        TableName: "Players",
        Key: {
          wyId: parseInt(wyId),
        },
      },
      (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data.Item);
        }
      }
    );
  });

const playersByTeam = (currentTeamId) =>
  new Promise((resolve, reject) => {
    docClient.scan(
      {
        TableName: "Players",
        FilterExpression: "currentTeamId = :teamId",
        ExpressionAttributeValues: {
          ":teamId": parseInt(currentTeamId),
        },
      },
      (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data.Items);
        }
      }
    );
  });

const statsForPlayer = (playerId, competitionId, seasonId) =>
  new Promise((resolve, reject) => {
    docClient.get(
      {
        TableName: "Stats",
        Key: {
          "playerId+competitionId": `${playerId}+${competitionId}`,
          seasonId: parseInt(seasonId),
        },
      },
      (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data.Item);
        }
      }
    );
  });

export default {
  Query: {
    team: (_parent, { wyId }, _context) => teamById(wyId),
    player: (_parent, { wyId }, _context) => playerById(wyId),
  },

  Team: {
    players: (team) => playersByTeam(team.wyId),
  },

  Player: {
    nationality: (player) => player.passportArea.name,
    role: (player) => player.role.name,
    team: (player) => teamById(player.currentTeamId),
    stats: (player, { seasonId, competitionId }) =>
      statsForPlayer(player.wyId, competitionId, seasonId),
  },
};
