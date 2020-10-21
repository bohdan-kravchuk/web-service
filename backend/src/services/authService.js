import userRepository from '../repositories/userRepository';
import { fromUserToUserClient } from '../mappers/user';

export const signUp = async ({ email, password, fullName }) => {
  const user = await userRepository.createUser({ email, password, fullName });
  return fromUserToUserClient(user);
};

export const signIn = async ({ email, password }) => {
  const user = await userRepository.getUserByEmail(email);

  if (!user) throw new Error('No user with such email');

  if (user.password !== password) {
    throw new Error('Wrong password');
  }

  return fromUserToUserClient(user);
};
