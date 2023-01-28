import UserModel from '../database/models/user.model';

const getAllUsers = async () => {
  const users = await UserModel.findAll();
  return users;
};

// const validateLogin = async (user: IUser): Promise<{ token: string }> => {
//   const newUser = await productModel.insertUser(user);
//   const { id, username, vocation, level } = newUser;
//   const userCreated = { id, username, vocation, level };
//   const token = jwt.sign(
//     userCreated,
//     process.env.JWT_SECRET as string,
//     { algorithm: 'HS256', expiresIn: '1d' },
//   );
//   return { token };
// };

export default {
  getAllUsers,
  // validateLogin,
};
