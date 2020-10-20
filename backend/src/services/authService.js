import userRepository from '../repositories/userRepository';

export const signUp = ({ email, password, fullName }) => {
  return userRepository.createUser({ email, password, fullName });
};

export const signIn = async ({ email, password }) => {
  const user = await userRepository.getUserByEmail(email);

  if (!user) throw new Error('No user with such email');

  if (user.password !== password) {
    throw new Error('Wrong password');
  }

  return user;
};
