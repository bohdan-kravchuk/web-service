import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { getUsers } from '../services/userService';

const router = Router();

router
  .get('/', run(() => getUsers()));

export default router;
