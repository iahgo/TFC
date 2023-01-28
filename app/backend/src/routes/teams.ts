import * as express from 'express';
import teamsService from '../controllers/teams.controller';

const router = express.Router();

router.get('/', teamsService.getAllTeams);
router.get('/:id', teamsService.getTeamById);

export default router;
