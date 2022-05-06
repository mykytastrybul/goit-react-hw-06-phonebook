import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
