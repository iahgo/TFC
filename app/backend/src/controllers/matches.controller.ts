import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

const getAllMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  if (inProgress) {
    const allMatches = await MatchesService.getAllMatchesInProgress(inProgress as string);
    return res.status(200).json(allMatches);
  }
  const allMatches = await MatchesService.getAllMatches();

  return res.status(200).json(allMatches);
};

const getMatcheById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await MatchesService.getMatcheById(Number(id));

  return res.status(200).json(team);
};

export default {
  getAllMatches,
  getMatcheById,
};
