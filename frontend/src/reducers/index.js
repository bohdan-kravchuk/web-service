import { combineReducers } from 'redux';
import { user } from './user';
import { dashboard } from '../scenes/Dashboard/reducer'

const rootReducer = () => combineReducers({
  user,
  dashboard
});

export default rootReducer;
