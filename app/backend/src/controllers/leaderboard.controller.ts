import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboard.service';

const getLeaderboard = async (req: Request, res: Response) => {
  const { type, message } = await leaderboardService.sortLeaderboard();
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

export default { getLeaderboard };
