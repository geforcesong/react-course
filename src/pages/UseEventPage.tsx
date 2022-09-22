import { useCallback, useLayoutEffect, useRef, useState } from 'react';

function UseEventPage() {
  const [state, setState] = useState('a');

  const onClick = () => {
    setState((prev) => (prev += '1'));
  };

  const showState = useEvent(() => {
    console.log(state);
  });

  return (
    <div>
      <div onClick={onClick}>Click Me</div>
      <div onClick={showState}>Show State</div>
      current: {state}
    </div>
  );
}

type AnyFunction = (...args: any[]) => any;

function useEvent(handler: AnyFunction) {
  const handlerRef = useRef<AnyFunction>(null);

  useLayoutEffect(() => {
    (handlerRef as any).current = handler;
  });

  return useCallback<AnyFunction>((...args) => {
    const fn = handlerRef.current;
    return fn?.(...args);
  }, []);
}

export default UseEventPage;
