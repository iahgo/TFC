import * as express from 'express';
import validateAuthorization from '../middlewares/validateAuthorization';
import matchesController from '../controllers/matches.controller';
import validateTeams from '../middlewares/validateTeams';

const router = express.Router();

router.post('/', validateTeams, validateAuthorization, matchesController.insertMatch);
router.get('/', matchesController.getAllMatches);
router.get('/:id', matchesController.getMatcheById);
router.patch('/:id', matchesController.updateResult);
router.patch('/:id/finish', matchesController.updateMatch);

export default router;
