import jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../configs/jwtConfig';

export const createToken = data => jwt.sign(data, secret, { expiresIn });
