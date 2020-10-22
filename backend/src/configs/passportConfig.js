import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { secret } from './jwtConfig';
import userRepository from '../repositories/userRepository';

const validateUser = async (_id, done) => {
  try {
    const user = await userRepository.getUserById(_id);
    return user ? done(null, user) : done({ status: 401, message: 'Token is invalid.' }, null);
  } catch (err) {
    return done(err);
  }
};

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};

passport.use('jwt', new JwtStrategy(options, async ({ _id }, done) => (
  validateUser(_id, done)
)));
