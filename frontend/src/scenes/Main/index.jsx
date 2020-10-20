import React, { useEffect, useState } from 'react';
import styles from './styles.module.sass';
import { Button } from 'react-bootstrap';
import { msInOneSec } from 'common/variables/constants';
import { pluralize } from 'common/helpers/globalHelpers';
import { getStorageCounters, getStorageTimerValue, setStorageCounters, setStorageTimerValue } from 'common/helpers/storageHelper';

const storageTimerValue = Number(getStorageTimerValue());
let timer;

const Main = () => {
  const [timerValue, setTimerValue] = useState(storageTimerValue || null);
  const [disabled, setDisabled] = useState(Boolean(timerValue));
  const [counters, setCounters] = useState(getStorageCounters() || [0, 0, 0]);

  useEffect(() => {
    if (storageTimerValue) startTimer(storageTimerValue);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setStorageTimerValue(timerValue);
  }, [timerValue]);

  useEffect(() => {
    setStorageCounters(counters);
  }, [counters]);

  const startTimer = seconds => {
    timer = setTimeout(function tick() {
      seconds = seconds - 1;
      setTimerValue(seconds);

      if (seconds !== 0) {
        timer = setTimeout(tick, msInOneSec);
      } else {
        setTimerValue(null);
        setDisabled(false);
      }
    }, msInOneSec);
  }

  const onBtnClick = index => {
    const seconds = 20;

    setTimerValue(seconds);
    setDisabled(true);
    setCounters(prevState => prevState.map((el, ind) => ind === index ? el + 1 : el));

    startTimer(seconds);
  };

  return (
    <div className={styles.Main}>
      {counters.map((counter, ind) => (
        <div className={styles.btnBlock} key={ind}>
          <Button disabled={disabled} className={styles.btn} onClick={() => onBtnClick(ind)}>
            {`Button ${ind + 1}`}
          </Button>
          <div className={styles.count}>
            {`Clicked: ${pluralize(counter, 'time')}`}
          </div>
        </div>
      ))}

      {!!timerValue && <div className={styles.timer}>{timerValue}</div>}
    </div>
  );
};

export default Main;
