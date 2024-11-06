import { useState } from 'react';
import { useUpdateAfterMount } from './hooks/useEffectUpdateMount';
import { useUpdateEffect } from './hooks/useUpdateEffect';

export const App2 = () => {
  const [count, setCount] = useState(0);

  useUpdateAfterMount(() => {
    console.log('count has changed', count);
  }, [count]);

  //   useUpdateEffect(() => {
  //     console.log('count has changed', count);
  //   }, [count]);

  return (
    <div>
      Render count {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
