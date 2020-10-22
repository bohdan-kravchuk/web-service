import { combineReducers } from 'redux';
import { user } from './user';
import { dashboard } from '../scenes/Dashboard/reducer';
import {reducer as toastr} from 'react-redux-toastr';

const rootReducer = () => combineReducers({
  user,
  dashboard,
  toastr
});

export default rootReducer;
