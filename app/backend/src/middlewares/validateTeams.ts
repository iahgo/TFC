import { NextFunction, Request, Response } from 'express';

const validateTeams = (req:Request, res:Response, next:NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  if (homeTeamId > 16 || homeTeamId < 1 || awayTeamId > 16 || awayTeamId < 1) {
    return { status: 404,
      message: 'There is no team with such id!' };
  }
  next();
};

export default validateTeams;
