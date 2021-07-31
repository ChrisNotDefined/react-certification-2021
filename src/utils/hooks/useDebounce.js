import { useEffect, useRef } from 'react';

const useDebounce = (fn, time = 300) => {
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef != null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      fn();
    }, time);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [fn, time]);
};

export { useDebounce };
