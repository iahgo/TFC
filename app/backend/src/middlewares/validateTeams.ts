import { NextFunction, Request, Response } from 'express';

const validateTeams = (req:Request, res:Response, next:NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  // const validHomeTeam = teamsService.getTeamById(homeTeamId);
  // const validAwayTeam = teamsService.getTeamById(awayTeamId);

  // console.log(validHomeTeam);
  // console.log(validAwayTeam);

  if (homeTeamId > 16 || homeTeamId < 1 || awayTeamId > 16 || awayTeamId < 1) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  console.log('times existem');
  next();
};

export default validateTeams;
