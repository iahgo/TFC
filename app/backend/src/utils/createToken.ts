import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
dotenv.config();

type UserType = {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
};

export default (params: UserType) => {
  try {
    const { password: _, ...userWithoutPasw } = params;
    const token = jwt.sign({ data: userWithoutPasw }, secret, {
      expiresIn: '12h',
      algorithm: 'HS256',
    });

    return token;
  } catch (err) {
    return err;
  }
};
