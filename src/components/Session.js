import moment from 'moment';
import React from 'react';

const Session = ({ sessionLength, decrementSessionLengthByOneMinute, incrementSessionLengthByOneMinute }) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes();
  return (
    <>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <div>
        <button id="session-decrement" onClick={decrementSessionLengthByOneMinute}>
          -
        </button>
        <button id="session-increment" onClick={incrementSessionLengthByOneMinute}>
          +
        </button>
      </div>
    </>
  );
};

export default Session;