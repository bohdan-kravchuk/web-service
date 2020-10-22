import bcrypt from 'bcryptjs';

const saltRounds = 10;

export const hash = data => bcrypt.hash(data, saltRounds);

export const compare = (data, encrypted) => bcrypt.compare(data, encrypted);
