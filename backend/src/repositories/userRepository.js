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

  getUserById(_id) {
    return this.collection.findOne({ _id }, '_id fullName email isAdmin counters');
  }

  async createUser(newUser) {
    const user = new this.collection(newUser);
    await user.save();
    return user;
  }

  updateUser(_id, userData) {
    return this.collection.updateOne({ _id }, userData);
  }

  deleteUser(_id) {
    return this.collection.deleteOne({ _id });
  }
}

export default new UserRepository();
