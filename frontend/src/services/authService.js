import api from 'common/helpers/apiHelper';

export const signIn = credentials => api.post('/api/auth/signin', credentials);

export const signUp = userData => api.post('/api/auth/signup', userData);
