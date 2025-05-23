import { useState, useEffect } from 'react';

/**
 * Custom hook for managing localStorage with React state synchronization
 * @param key - The localStorage key
 * @param initialValue - The initial value to use if no value exists in localStorage
 * @returns A tuple containing the current value and a setter function
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Listen for changes to localStorage from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.warn(`Error parsing localStorage value for key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
}

/**
 * Hook for managing localStorage with additional utilities
 * @param key - The localStorage key
 * @param initialValue - The initial value to use if no value exists in localStorage
 * @returns An object with value, setValue, and utility functions
 */
export function useLocalStorageWithUtils<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const remove = () => {
    try {
      window.localStorage.removeItem(key);
      setValue(initialValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  };

  const clear = () => {
    try {
      window.localStorage.clear();
      setValue(initialValue);
    } catch (error) {
      console.warn(`Error clearing localStorage:`, error);
    }
  };

  return {
    value,
    setValue,
    remove,
    clear
  };
}
