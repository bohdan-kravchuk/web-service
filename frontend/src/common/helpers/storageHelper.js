export const setStorageTimerValue = token => localStorage.setItem('timerValue', token);

export const getStorageTimerValue = () => localStorage.getItem('timerValue');

export const setStorageCounters = counters => {
  try {
    const strCounters = JSON.stringify(counters);
    localStorage.setItem('counters', strCounters);
  } catch (e) {
    console.log(e.message);
  }
};

export const getStorageCounters = () => {
  try {
    const strCounters = localStorage.getItem('counters');
    return JSON.parse(strCounters);
  } catch (e) {
    console.log(e.message);
  }
}
