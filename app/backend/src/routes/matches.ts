import * as express from 'express';
import matchesService from '../controllers/matches.controller';

const router = express.Router();

router.get('/', matchesService.getAllMatches);
router.get('/:id', matchesService.getMatcheById);

export default router;
