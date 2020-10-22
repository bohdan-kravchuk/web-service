import { deleteUserRoutine, getUsersRoutine } from 'scenes/Dashboard/routines';

const initialState = {
  users: [],
  isLoading: false,
  deletedUserId: null
};

export const dashboard = (state = initialState, { type, payload }) => {
  switch (type) {
    case getUsersRoutine.TRIGGER:
      return { ...state, isLoading: true };
    case getUsersRoutine.SUCCESS:
      return { ...state, users: payload, isLoading: false };
    case getUsersRoutine.FAILURE:
      return { ...state, isLoading: false };
    case deleteUserRoutine.TRIGGER:
      return { ...state, deletedUserId: payload };
    case deleteUserRoutine.SUCCESS:
      return { ...state, users: state.users.filter(user => user._id !== payload), deletedUserId: null };
    case deleteUserRoutine.FAILURE:
      return { ...state, deletedUserId: null };
    default:
      return state;
  }
};
