
import React, { useState, useEffect } from 'react';

function Stopwatch() {

  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('stopped');

  // Update time every second
  useEffect(() => {

    let timer;

    if (status === 'running') {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [status]);

  // Start Stopwatch
  const handleStart = () => {
    setTime(0);
    setStatus('running');
  };

  // Stop Stopwatch
  const handleStop = () => {
    setStatus('stopped');
    setTime(0);
  };

  // Pause Stopwatch
  const handlePause = () => {
    setStatus('paused');
  };

  // Resume Stopwatch
  const handleResume = () => {
    setStatus('running');
  };

  return (
    <div className="container py-5">

      <div className="card shadow text-center p-4 mx-auto"
        style={{ maxWidth: '450px' }}>

        <h2 className="mb-4">Stopwatch</h2>

        <h1 className="display-1 fw-bold text-primary">
          {time} sec
        </h1>

        <p className="text-muted">
          Status: {status}
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">

          <button
            className="btn btn-success"
            onClick={handleStart}
          >
            Start
          </button>

          <button
            className="btn btn-danger"
            onClick={handleStop}
          >
            Stop
          </button>

          <button
            className="btn btn-warning"
            onClick={handlePause}
            disabled={status !== 'running'}
          >
            Pause
          </button>

          <button
            className="btn btn-primary"
            onClick={handleResume}
            disabled={status !== 'paused'}
          >
            Resume
          </button>

        </div>

      </div>

    </div>
  );
}

export default Stopwatch;
