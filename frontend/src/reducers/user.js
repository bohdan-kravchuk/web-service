import { fetchUserRoutine } from 'routines/user';
import { signInUserRoutine, signUpUserRoutine } from 'scenes/Auth/routines';
import { updateCountersRoutine } from 'scenes/Main/routines';

const initialState = {
  isAuthorized: false,
  user: {},
  isLoading: false
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case signUpUserRoutine.TRIGGER:
    case signInUserRoutine.TRIGGER:
    case fetchUserRoutine.TRIGGER:
      return { ...state, isLoading: true };

    case signUpUserRoutine.FAILURE:
    case signInUserRoutine.FAILURE:
    case fetchUserRoutine.FAILURE:
      return { ...state, isLoading: false };

    case signUpUserRoutine.SUCCESS:
      return { ...state, user: payload, isAuthorized: true, isLoading: false };

    case signInUserRoutine.SUCCESS:
      return { ...state, user: payload, isAuthorized: true, isLoading: false };

    case updateCountersRoutine.TRIGGER:
      return { ...state, user: { ...state.user, counters: payload.counters } };

    case fetchUserRoutine.SUCCESS:
      return { ...state, user: payload, isAuthorized: true, isLoading: false };

    default:
      return state;
  }
};
