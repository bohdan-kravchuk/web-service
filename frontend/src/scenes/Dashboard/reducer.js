import { getUsersRoutine } from 'scenes/Dashboard/routines';

const initialState = {
  users: [],
  isLoading: false
};

export const dashboard = (state = initialState, { type, payload }) => {
  switch (type) {
    case getUsersRoutine.TRIGGER:
      return { ...state, isLoading: true };
    case getUsersRoutine.SUCCESS:
      return { ...state, users: payload, isLoading: false };
    case getUsersRoutine.FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
