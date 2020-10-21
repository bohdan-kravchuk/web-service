import { User } from '../models/User';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  getUsers() {
    return this.collection.find({}, '_id fullName email isAdmin counters');
  }

  getUserByEmail(email) {
    return this.collection.findOne({ email });
  }

  async createUser(newUser) {
    const user = new this.collection(newUser);
    await user.save();
    return user;
  }

  updateUser(_id, userData) {
    return this.collection.updateOne({ _id }, userData);
  }
}

export default new UserRepository();
