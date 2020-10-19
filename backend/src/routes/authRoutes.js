import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { signUp, signIn } from '../services/authService';

const router = new Router();

router
  .post('/signup', run(req => signUp(req.body)))
  .post('/signin', run(req => signIn(req.body)));

export default router;
