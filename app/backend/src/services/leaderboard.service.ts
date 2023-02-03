import Match from '../database/models/match.model';
import Team from '../database/models/team.model';

const getTotalPoints = (acc: number, curr: Match): number => {
  if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
  if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
  return acc;
};

const getTotalVictories = (acc: number, curr: Match): number => {
  if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
  return acc;
};

const getTotalDraws = (acc: number, curr: Match): number => {
  if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
  return acc;
};

const getTotalHomeLosses = (acc: number, curr: Match): number => {
  if (curr.homeTeamGoals < curr.awayTeamGoals) return acc + 1;
  return acc;
};

const getHomeGoals = (acc: number, curr: Match): number => acc + curr.homeTeamGoals;
const getAwaysGoals = (acc: number, curr: Match): number => acc + curr.awayTeamGoals;

const getMatchesByTeamId = async (id: number): Promise<Match[]> => {
  const allMatches = await Match.findAll({
    where: { homeTeamId: id, inProgress: false },
    include: [
      { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
  });
  return allMatches;
};

interface ITeamMatches {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

const fetchLeaderboardData = async (): Promise<ITeamMatches[]> => {
  const allTeams = await Team.findAll();
  if (allTeams.length === 0) return [];

  const data = await Promise.all(allTeams.map((team) => getMatchesByTeamId(team.id)));
  return data.map((team, index) => ({
    name: allTeams[index].teamName,
    totalPoints: team.reduce(getTotalPoints, 0),
    totalGames: team.length,
    totalVictories: team.reduce(getTotalVictories, 0),
    totalDraws: team.reduce(getTotalDraws, 0),
    totalLosses: team.reduce(getTotalHomeLosses, 0),
    goalsFavor: team.reduce(getHomeGoals, 0),
    goalsOwn: team.reduce(getAwaysGoals, 0),
    goalsBalance: team.reduce(getHomeGoals, 0) - team.reduce(getAwaysGoals, 0),
    efficiency: ((team.reduce(getTotalPoints, 0) / (team.length * 3)) * 100).toFixed(2),
  }));
};

const sortLeaderboard = async () => {
  const data = await fetchLeaderboardData();
  const sortedData = data.sort((a, b) => {
    if (b.totalPoints - a.totalPoints !== 0) return b.totalPoints - a.totalPoints;
    if (b.totalVictories - a.totalVictories !== 0) return b.totalVictories - a.totalVictories;
    if (b.goalsBalance - a.goalsBalance !== 0) return b.goalsBalance - a.goalsBalance;
    return (b.goalsFavor - a.goalsFavor);
  });
  if (!sortedData) return { type: 'error', message: 'No matches for these teams.' };
  return { type: null, message: sortedData };
};
export default {
  sortLeaderboard,
};
