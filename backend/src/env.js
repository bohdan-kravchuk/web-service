import * as dotenv from 'dotenv';
import { getOsEnv } from './helpers/pathHelper.js';

dotenv.config();

export const env = {
  app: {
    port: getOsEnv('PORT'),
    clientUrl: getOsEnv('APP_CLIENT_URL')
  },
  mongoDbUrl: getOsEnv('MONGODB_URL')
};
