import { useEffect } from 'react';

export function useIntegration<T = unknown>(
  eventName: string,
  callback: (data: T) => void,
): void {
  useEffect(() => {
    const transformedCallback: EventListener = (event: Event) => {
      callback((event as CustomEvent).detail);
    };

    console.log('useIntegration registered', eventName, callback);

    document.addEventListener(eventName, transformedCallback);
    return () => {
      console.log('removed event ' + eventName);
      document.removeEventListener(eventName, transformedCallback);
    };
  }, [callback, eventName]);
}
