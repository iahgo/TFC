import * as express from 'express';
import userService from '../controllers/users.controller';
import validateLogin from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import validateAuthorization from '../middlewares/validateAuthorization';

const router = express.Router();

router.post('/', validateLogin, validatePassword, userService.login);
router.get('/validate', validateAuthorization, userService.validateLogin);

export default router;
