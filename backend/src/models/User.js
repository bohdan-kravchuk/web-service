import { Schema, model } from 'mongoose';
import { refreshTokenSchema } from './RefreshToken';

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    counters: {
      type: [Number],
      default: [0, 0, 0]
    },
    refreshToken: refreshTokenSchema
  },
  {
    timestamps: true
  }
);

export const User = model('User', userSchema);
