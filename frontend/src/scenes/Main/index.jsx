import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.sass';
import { Button } from 'react-bootstrap';
import { msInOneSec } from 'common/variables/constants';
import { pluralize } from 'common/helpers/globalHelpers';
import { getStorageTimerValue, setStorageTimerValue } from 'common/helpers/storageHelper';
import { updateCountersRoutine } from 'scenes/Main/routines';

const storageTimerValue = Number(getStorageTimerValue());
let timer;

const Main = ({ counters, _id, updateCounters }) => {
  const [timerValue, setTimerValue] = useState(storageTimerValue || null);

  useEffect(() => {
    if (storageTimerValue) startTimer(storageTimerValue);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setStorageTimerValue(timerValue);
  }, [timerValue]);

  const startTimer = seconds => {
    timer = setTimeout(function tick() {
      seconds = seconds - 1;
      setTimerValue(seconds);

      if (seconds !== 0) {
        timer = setTimeout(tick, msInOneSec);
      } else {
        setTimerValue(null);
      }
    }, msInOneSec);
  };

  const onBtnClick = index => {
    const seconds = 20;
    setTimerValue(seconds);
    const updatedCounters = counters.map((counter, ind) => ind === index ? counter + 1 : counter)
    updateCounters({ _id, counters: updatedCounters});
    startTimer(seconds);
  };

  return (
    <div className={styles.Main}>
      {counters.map((counter, ind) => (
        <div className={styles.btnBlock} key={ind}>
          <Button disabled={!!timerValue} className={styles.btn} onClick={() => onBtnClick(ind)}>
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

const mapStateToProps = state => ({
  counters: state.user.user.counters,
  _id: state.user.user._id
});

const mapDispatchToProps = {
  updateCounters: updateCountersRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
