import UserModel from '../database/models/user.model';

const getAllUsers = async () => {
  const users = await UserModel.findAll();
  return users;
};

export default {
  getAllUsers,
  // validateLogin,
};
