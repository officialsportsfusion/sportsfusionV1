import React from "react";

export const useTimer = (interval = 1000) => {
  const timerRef = React.useRef(null);
  const [count, setCount] = React.useState(0);

  const reset = () => {
    setCount(0);
  };

  const start = (int) => {
    if (!int) {
      int = interval;
    }

    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, int);
    clearInterval(timerRef.current - 1);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  React.useEffect(() => {
    return () => {
      stop()
    };
  }, []);

  return { reset, start, stop, time: count };
};
