import userRepository from '../repositories/userRepository';

export const getUsers = () => {
  return userRepository.getUsers();
};

export const updateUser = ({ _id, userData }) => {
  return userRepository.updateUser(_id, userData);
};

export const deleteUser = _id => {
  return userRepository.deleteUser(_id);
}
