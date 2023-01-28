import { NextFunction, Request, Response } from 'express';

// const validEmail = (email:string) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

const validateEmail = (req:Request, res:Response, next:NextFunction) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'All fields must be filled' });
  // if (validEmail(email) === false) return res.status(400).send('Campo "email" inválido');
  next();
};

export default validateEmail;
