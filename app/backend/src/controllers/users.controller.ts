import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import validateToken from '../utils/validateToken';
import userService from '../services/user.service';
import createToken from '../utils/createToken';

const decrypt = (reqPassw: string, dbPassw: string) =>
  bcrypt.compare(reqPassw, dbPassw);

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const allUsers = await userService.getAllUsers();
  // console.log(allUsers);
  const user = allUsers.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: 'Incorrect email or password' });
  if ((await decrypt(password, user.password)) === false) {
    console.log('email ou senha erado');
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  console.log('senha correta');
  const token = createToken(user.dataValues);
  return res.status(200).send({ token });
};

const validateLogin = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (authorization === undefined) {
    return res.status(404).json({ message: 'Token not found' });
  }
  const userData = validateToken(authorization);
  if (typeof userData === 'string') {
    return res.status(404).json({ message: 'Token not found' });
  }
  return res.status(200).json({ role: userData.data.role });
};

export default {
  login,
  validateLogin,
};
