import { signInUserRoutine, signUpUserRoutine } from 'scenes/Auth/routines';

const initialState = {
  isAuthorized: false,
  user: {},
  isLoading: false
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case signUpUserRoutine.TRIGGER:
      return { ...state, isLoading: true };
    case signUpUserRoutine.SUCCESS:
      return { ...state, user: payload, isAuthorized: true, isLoading: false };
    case signUpUserRoutine.FAILURE:
      return { ...state, isLoading: false };
    case signInUserRoutine.TRIGGER:
      return { ...state, isLoading: true };
    case signInUserRoutine.SUCCESS:
      return { ...state, user: payload, isAuthorized: true, isLoading: false };
    case signInUserRoutine.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
