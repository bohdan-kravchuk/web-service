export const setStorageTimerValue = timerValue => localStorage.setItem('timerValue', timerValue);

export const getStorageTimerValue = () => localStorage.getItem('timerValue');

export const setAccessToken = token => localStorage.setItem('accessToken', token);

export const getAccessToken = () => localStorage.getItem('accessToken');

export const clearStorage = () => localStorage.clear();
