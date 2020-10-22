import { Router } from 'express';
import { run } from '../helpers/routeHelper';
import { getUsers, updateUser, deleteUser } from '../services/userService';

const router = Router();

router
  .get('/', run(() => getUsers()))
  .get('/me', run(req => Promise.resolve(req.user)))
  .put('/', run(req => updateUser(req.body)))
  .delete('/', run(req => deleteUser(req.body._id)));

export default router;
