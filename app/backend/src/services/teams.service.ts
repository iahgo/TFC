import TeamModel from '../database/models/team.model';

const getAllTeams = async () => {
  const users = await TeamModel.findAll();
  return users;
};

const getTeamById = async (id: number) => {
  const users = await TeamModel.findByPk(id);
  return users;
};

export default {
  getAllTeams,
  getTeamById,
};
