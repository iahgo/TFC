import { NextFunction, Request, Response } from 'express';

const validateAuthorization = (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(400).json({ message: 'Token not found' });
  next();
};

export default validateAuthorization;
