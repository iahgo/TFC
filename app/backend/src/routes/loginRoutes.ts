import * as express from 'express';
import validateLogin from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import validateAuthorization from '../middlewares/validateAuthorization';
import usersController from '../controllers/users.controller';

const router = express.Router();

router.post('/', validateLogin, validatePassword, usersController.login);
router.get('/validate', validateAuthorization, usersController.validateLogin);

export default router;
