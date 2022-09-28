import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContainerTimer from './style';

const INIT = 30;
const ONE_SECOND = 1000;
const TIME_LIMIT = 1;

export default function Timer({ timeout }) {
  const [seconds, setSeconds] = useState(INIT);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds !== TIME_LIMIT) {
        setSeconds(seconds - 1);
      }
      if (seconds === TIME_LIMIT) {
        timeout();
      }
      sessionStorage.setItem('TIMER_TRIVIA', JSON.stringify(seconds));
    }, ONE_SECOND);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <ContainerTimer>
      <p>{seconds}</p>
    </ContainerTimer>
  );
}
Timer.propTypes = {
  timeout: PropTypes.func.isRequired,
};
