import userRoutes from './userRoutes';
import authRoutes from './authRoutes';

const routes = (app) => {
  app.use('/api/users', userRoutes);
  app.use('/api/auth', authRoutes);
};

export default routes;
