import userRepository from '../repositories/userRepository';

export const getUsers = () => {
  return userRepository.getUsers();
};
