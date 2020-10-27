export const setStorageTimerValue = timerValue => localStorage.setItem('timerValue', timerValue);

export const getStorageTimerValue = () => localStorage.getItem('timerValue');

export const setAccessToken = token => localStorage.setItem('accessToken', token);

export const getAccessToken = () => localStorage.getItem('accessToken');

export const setRefreshToken = token => localStorage.setItem('refreshToken', token);

export const getRefreshToken = () => localStorage.getItem('refreshToken');

export const setTokens = tokens => {
  setRefreshToken(tokens.refreshToken);
  setAccessToken(tokens.accessToken);
};

export const clearStorage = () => localStorage.clear();
