import { createRoutine } from 'redux-saga-routines';

export const getUsersRoutine = createRoutine('GET_USERS');
export const deleteUserRoutine = createRoutine('DELETE_USER');
