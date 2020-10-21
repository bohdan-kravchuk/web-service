import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { getUsers, updateUser } from '../services/userService';

const router = Router();

router
  .get('/', run(() => getUsers()))
  .put('/', run(req => updateUser(req.body)));

export default router;
