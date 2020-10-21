import { Schema, model } from 'mongoose';

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
      type: String,
      default: false
    },
    counters: {
      type: [Number],
      default: [0, 0, 0]
    }
  },
  {
    timestamps: true
  }
);

export const User = model('User', userSchema);
