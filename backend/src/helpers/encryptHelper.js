import bcrypt from 'bcryptjs';
import Cryptr from 'cryptr';
import { secret } from '../configs/jwtConfig';

const cryptr = new Cryptr(secret);

const saltRounds = 10;

export const hash = data => bcrypt.hash(data, saltRounds);

export const compare = (data, encrypted) => bcrypt.compare(data, encrypted);

export const encrypt = str => cryptr.encrypt(str);

export const decrypt = str => cryptr.decrypt(str);
