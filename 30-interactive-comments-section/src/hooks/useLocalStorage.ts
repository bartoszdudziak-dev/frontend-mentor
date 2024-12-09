import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = value => {
    // Update state based on the type of value (function or direct)
    const newValue = value instanceof Function ? value(storedValue) : value;

    // Save new value to state
    setStoredValue(newValue);

    // Persist the new value to localStorage
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue] as const;
}
