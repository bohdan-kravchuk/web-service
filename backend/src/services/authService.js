import userRepository from '../repositories/userRepository';
import { fromUserToUserClient } from '../mappers/user';
import { createToken } from '../helpers/tokenHelper';
import { hash, compare } from '../helpers/encryptHelper';
import CustomError from '../helpers/errorsHelper';

export const signUp = async ({ email, password, fullName }) => {
  const passwordHash = await hash(password);
  const user = await userRepository.createUser({ email, password: passwordHash, fullName });
  return {
    user: fromUserToUserClient(user),
    accessToken: createToken({ _id: user._id })
  };
};

export const signIn = async ({ email, password }) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) throw new CustomError(404, "Such user isn't exist. Please, sign up first.");

  const comparePassword = await compare(password, user.password);

  if (!comparePassword) {
    throw new CustomError(400, 'Wrong credentials. Please, try again.');
  }

  return {
    user: fromUserToUserClient(user),
    accessToken: createToken({ _id: user._id })
  };
};
