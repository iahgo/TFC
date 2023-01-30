import MatchesModel from '../database/models/match.model';
import TeamModel from '../database/models/team.model';

const getAllMatches = async () => {
  const matches = await MatchesModel.findAll({
    include: [
      { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
      { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  return matches;
};
const getAllMatchesInProgress = async (inProgress: string) => {
  const progress = (inProgress === 'true');

  const matches = await MatchesModel.findAll({ where:
      { inProgress: progress },
  include: [
    { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
    { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
  ],
  });
  return matches;
};

const getMatcheById = async (id: number) => {
  const match = await MatchesModel.findByPk(id);
  return match;
};

export default {
  getAllMatches,
  getMatcheById,
  getAllMatchesInProgress,
};
