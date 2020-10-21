import api from 'common/helpers/apiHelper'

export const updateUser = (_id, userData) => api.put('/api/users', { _id, userData });
