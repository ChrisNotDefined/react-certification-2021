import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (queryStr) => {
  const [match, setMatch] = useState(false);

  const onResize = useCallback(() => {
    setMatch(window.matchMedia(queryStr).matches);
  }, [queryStr]);

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  return match;
};

export { useMediaQuery };
