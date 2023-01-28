import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
dotenv.config();

export default (token: string):string | jwt.JwtPayload => {
  try {
    const response = jwt.verify(token, secret);
    return response;
  } catch (err) {
    return `${err}`;
  }
};
