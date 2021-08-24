import { useEffect, useState } from 'react';

const useMediaQuery = (queryStr) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setMatch(window.matchMedia(queryStr).matches);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [queryStr]);

  return match;
};

export { useMediaQuery };
