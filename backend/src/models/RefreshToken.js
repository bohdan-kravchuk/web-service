import { Schema, model } from 'mongoose';
import { getAfter30Days } from '../helpers/dateHelper';

export const refreshTokenSchema = new Schema({
  expiresAt: {
    type: Date,
    default: getAfter30Days()
  }
});
