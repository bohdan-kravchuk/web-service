import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { signUp, signIn, updateTokens } from '../services/authService';

const router = new Router();

router
  .post('/signup', run(req => signUp(req.body)))
  .post('/signin', run(req => signIn(req.body)))
  .post('/tokens', run(req => updateTokens(req.body.refreshToken)));

export default router;
