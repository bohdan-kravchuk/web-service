import api from 'common/helpers/apiHelper'

export const updateUser = (_id, userData) => api.put('/api/users', { _id, userData });

export const getUsers = () => api.get('/api/users');

export const deleteUser = _id => api.delete('/api/users', { _id });
