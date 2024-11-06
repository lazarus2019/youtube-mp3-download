import { DependencyList, useEffect, useRef } from 'react';

export const useUpdateAfterMount = (fn: VoidFunction, deps: DependencyList) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    fn();
  }, deps);
};
