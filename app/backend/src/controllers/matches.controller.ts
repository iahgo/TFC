import { Request, Response } from 'express';
import validateToken from '../utils/validateToken';
import MatchesService from '../services/matches.service';
import INewMatch from '../interfaces/INewMatch';

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

const insertMatch = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const userData = validateToken(authorization as string);

  if (typeof userData === 'string') {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  if (!authorization || !userData) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  const newMatch = await MatchesService.insertMatch(req.body as INewMatch);
  return res.status(201).json(newMatch);
};

const updateMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MatchesService.updateMatch(Number(id));
  return res.status(200).json(result);
};
const updateResult = async (req: Request, res: Response) => {
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const { id } = req.params;
  const newResult = await MatchesService.updateResult(Number(id), homeTeamGoals, awayTeamGoals);
  return res.status(200).json(newResult);
};

export default {
  getAllMatches,
  getMatcheById,
  insertMatch,
  updateMatch,
  updateResult,
};
