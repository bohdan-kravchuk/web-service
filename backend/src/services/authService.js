import userRepository from '../repositories/userRepository';
import { fromUserToUserClient } from '../mappers/user';
import { createToken } from '../helpers/tokenHelper';
import { hash, compare, encrypt, decrypt } from '../helpers/encryptHelper';
import CustomError from '../helpers/errorsHelper';

export const signUp = async ({ email, password, fullName }) => {
  const passwordHash = await hash(password);
  const user = await userRepository.createUser({ email, password: passwordHash, fullName, refreshToken: {} });

  return {
    user: fromUserToUserClient(user),
    accessToken: createToken({ _id: user._id }),
    refreshToken: encrypt(user.refreshToken._id)
  };
};

export const signIn = async ({ email, password }) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) throw new CustomError(404, "Such user isn't exist. Please, sign up first.");

  const comparePassword = await compare(password, user.password);
  if (!comparePassword) {
    throw new CustomError(400, 'Wrong credentials. Please, try again.');
  }

  const { refreshToken } = await userRepository.updateRefreshToken(user._id);

  return {
    user: fromUserToUserClient(user),
    accessToken: createToken({ _id: user._id }),
    refreshToken: encrypt(refreshToken._id)
  };
};

export const updateTokens = async encryptedId => {
  const id = decrypt(encryptedId);

  const { _id: userId, refreshToken } = await userRepository.getRefreshTokenById(id);

  if (!refreshToken) {
    throw new CustomError(401, 'Invalid refresh token');
  }

  if (new Date(refreshToken.expiresAt) < Date.now()) {
    throw new CustomError(401, 'Refresh token expired');
  }

  const { refreshToken: newRefreshToken } = await userRepository.updateRefreshToken(userId);

  return {
    accessToken: createToken({ _id: userId }),
    refreshToken: encrypt(newRefreshToken._id)
  };
};
