import { Router } from 'express';
// import userLogin from '../controllers/userLogin';
import validateEmail from '../middlewares/validateEmail';
// import validatePassword from '../middlewares/validatePassword';

const router = Router();

router.post('/login', validateEmail, () => console.log('deu certop'));

export default router;
