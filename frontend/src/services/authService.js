import api from 'common/helpers/apiHelper';

export const signIn = user => api.post('/api/auth/signin', user);

export const signUp = newUser => api.post('/api/auth/signup', newUser);
