import { useRef, useEffect } from 'react';

function useIsMounted() {
  const isMountedRef = useRef(true);
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return () => isMountedRef.current;
}

export default useIsMounted;
